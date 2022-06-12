const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const path = require('path');
const savedActivities = require('./models/savedActivityModel')
const completedActivities = require('./models/completedActivityModel');
const User = require('./models/userModel');
const jwt = require('jsonwebtoken');

const port = process.env.PORT || 5000;

connectDB();

const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const protect = async (req, res, next) =>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id); //this tells you what the ID is of the user that made the request

            next();
        } catch (error) {
            console.log(error);
            res.status(401).json({message: 'Not Authorized'});
        }
    }

    if(!token){
        res.status(401).json({message: 'Not Authorized, no token'});
    }
}



//Additional Functions
const generateToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '30d'});
}


//API Routes
app.get('/api/savedActivities', protect, async (req, res) => {
    const s_activities = await savedActivities.find({user: req.user.id});
    res.status(200).json(s_activities);
})

app.post('/api/savedActivities', protect, async (req, res) => {

    const newActivity = await savedActivities.create({
        user: req.user.id,
        activity: req.body.activity,
        type: req.body.type,
        participants: req.body.participants,
        price: req.body.price,
        key: req.body.key,
        accessibility: req.body.accessibility
    })

    res.status(200).json(newActivity);
})

app.delete('/api/savedActivities/:id', protect, async (req, res) => {
    const response = await savedActivities.deleteOne({key: req.params.id});
    res.status(200).json(response);
})

app.get('/api/completedActivities', protect, async (req, res) => {
    const c_activities = await completedActivities.find({user: req.user.id}); 
    res.status(200).json(c_activities);
})

app.post('/api/completedActivities', protect, async (req, res) => {
    const newActivity = completedActivities.create({
        user: req.user.id,
        activity: req.body.activity,
        type: req.body.type,
        participants: req.body.participants,
        price: req.body.price,
        key: req.body.key,
        accessibility: req.body.accessibility
    })
    res.status(200).json(newActivity);
})

//User Routes
app.post('/api/registerUser', async (req, res) =>{
    const {name, email, password} = req.body;

    if(!name | !email | !password){
        res.status(400).json({message: 'Please add all fields'});
    }

    try {
        //Check if user exists
        const userExists = await User.findOne({email});
        if(userExists){
            res.status(400).json({message: "User already exists"});
        }

        //Create the user
        const newUser = await User.create({
            name,
            email,
            password
        })

        if(newUser){
            res.status(201).json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                token: generateToken(newUser._id)
            });
        }
        else{
            res.status(400).json({message: 'Invalid user data'});
        }
    } catch (error) {
        console.log(error);
    }

    
})

app.post('/api/loginUser', async (req, res) =>{
    const {email, password} = req.body;

    const user = await User.findOne({email});

    //Check if correct password
    if(user && password == user.password){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
         });
    }
    else{
        res.status(400).json({message: 'Invalid logged in data'});
    }
    
})

app.get('/api/getUserData', protect, async (req, res) =>{

    res.status(200).json({message: `${req.user.email} - this is my data`});
})

//Serve Front-End, written after the app has been completed
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))
}

app.listen(port, () => console.log(`Server Running: ${port}`));