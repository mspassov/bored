const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db')
const savedActivities = require('./models/savedActivityModel')
const completedActivities = require('./models/completedActivityModel');
const port = process.env.PORT || 5000;

connectDB();

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//API Routes
app.get('/api/savedActivities', async (req, res) => {
    const s_activities = await savedActivities.find();
    res.status(200).json(s_activities);
})

app.post('/api/savedActivities', async (req, res) => {
    res.status(200).json({message: "Adding a saved activity"})
})

app.delete('/api/savedActivities/:id', async (req, res) => {
    res.status(200).json({message: `Deleting a saved activity: ${req.params.id}`})
})

app.get('/api/completedActivities', async (req, res) => {
    const c_activities = await completedActivities.find(); 
    res.status(200).json(c_activities);
})

app.post('/api/completedActivities', async (req, res) => {
    res.status(200).json({message: "Adding a completed activity"})
})

//User Routes
app.post('/api/registerUser', async (req, res) =>{
    res.status(200).json({message: 'New User has been registered'})
})

app.post('/api/loginUser', async (req, res) =>{
    res.status(200).json({message: 'User has been logged in'})
})

app.get('/api/getUserData', async (req, res) =>{
    res.status(200).json({message: 'This is the user data'})
})




app.listen(port, () => console.log(`Server Running: ${port}`));


