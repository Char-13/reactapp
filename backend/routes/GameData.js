/**
 * Tyler Hay / hayty@mail.gvsu.edu
 * December 2020
 * GameData route
 * 
 * This file will serve as the middle-man between the front end and the database
 * for GameData related queries. Function calls using Axios in the React JS files will call the HTTPS
 * POST/GET requests in this file for CRUD operations regarding Game Data
 */
const router = require('express').Router();
const mongoose = require('mongoose');
const db = mongoose.connection;
//Linking the GameData Schema model
let GameData = require('../models/GameData.model.js');


// handles incoming HTTP GET requests on the /GameData/ url path
/**
 * Default GET request for the GameData collection.
 * Returns the whole GameData list in JSON format.
 */
router.route('/').get((req, res) => {
  GameData.find()
    .then(gameData => res.json(gameData))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;