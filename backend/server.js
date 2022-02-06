/**
 *  Tyler Hay / hayty@mail.gvsu.edu
 *  GVSU Senior Project - December 2020
 *  
 *  This file makes the connection to the MongoDB database and uses the
 *  Route files to be able to interact with the DB collections.
 * 
 *  To connect to the mongoDB db:
 *  1. In the terminal, go to the directory my-app/backend
 *  2. Start the server by using the command "nodemon server"
 * 
 *  You may have to npm install nodemon if the package is missing.
 * 
 */

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// middleware to parse JSON files
app.use(cors());
app.use(express.json());

//This is the URI for the database.
//The default username is Test and the Default password is Test
//The database name is currently user_test.
//These credentials will likely need to be changed to increase DB security
//in the future, but for now it's convenient for development. 


//Currently, this link should not work and should be replaced with the current group's own MongoDB server.
const uri = "mongodb+srv://CapstoneGroup:GVSU@whatswrongwithlouie.omkgd.mongodb.net/WhatswrongwithLouie?retryWrites=true&w=majority"
//Connecting to the database using the URI.
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//Load routers from their respective files
const athleteRouter = require('./routes/athlete');
const playersRouter = require('./routes/players');
const scenarioRouter = require('./routes/scenario');
const SUserRouter = require('./routes/SUser');
const GameDataRouter = require('./routes/GameData');

// adding routers as middleware
app.use('/athlete', athleteRouter);
app.use('/players', playersRouter);
app.use('/scenario', scenarioRouter);
app.use('/SUser', SUserRouter);
app.use('/GameData', GameDataRouter);

// Server connecting
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});