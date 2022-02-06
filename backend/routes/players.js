/**
 * Tyler Hay / hayty@mail.gvsu.edu
 * December 2020
 * 
 * players route
 * 
 * This file will serve as the middle-man between the front end and the database
 * for player related queries. Function calls using Axios in the React JS files will call the HTTPS
 * POST/GET requests in this file for CRUD operations regarding players
 */
const router = require('express').Router();
const mongoose = require('mongoose');
const db = mongoose.connection;

const express = require('express');
const app = express();

//Linking the players schema model
let Players = require('../models/players.model');

/**
 * Default GET request. Returns full list of player documents
 * in a JSON format. 
 * 
 * handles incoming HTTP GET requests on the /athlete/ url path
 */
router.route('/').get((req, res) => {
  Players.find()
    .then(players => res.json(players))
    .catch(err => res.status(400).json('Error: ' + err));
});

/**
 * GET request used for Google Sign In.
 * 
 * Searches the players collection for a player that matches the
 * specified email. If a player with that email isn't found,
 * then a new player is created using the data from the Google
 * Sign In. If a player is found,  it is returned to the fron end using
 * the res param. 
 */
router.route('/find_byEmail').get((req, res) => {  
  Players.findOne({"Email" : req.query.email})
    .then(players => {
      //Checking if player exists under than email
      if(players == null || players == undefined){
        //gathering user input from athlete creation screen
        const collection = db.collection('players');
        collection.countDocuments().then((count)=>{
        var PID = 10000000 + count;        
        });
        var PName = req.query.Name;
        var Email = req.query.email;
        var Athlist = [];
        var LastPlay = new Date();
        var IiD = 30000000; //Hard code for default instructor ID

        const newPlayer = new Players({
            
          PID,
          PName,
          Email,
          Athlist,
          LastPlay,
          IiD
        });

        console.log(newPlayer);
        
        //Save the player in the players collection in the DB.
        db.collection('players').insertOne(newPlayer);
      }
      else{
        //return the player document to whoever called the request.
        res.json(players);
      }
          })
          .catch(err => res.status(400).json('Error: ' + err));
});

// handles incoming HTTP POST requests on the /players/player_create/
/**
 * Default POST request for player creation.
 * Works similar to Google Sign in's method of player creation,
 * but can be used manually by the Super User if they need to add
 * players in.
 */
router.route('/player_create').post((req, res) => {
  //res.set('Access-Control-Allow-Origin', '*');
  console.log(req.body.Name);
  //gathering user input from athlete creation screen
 const collection = db.collection('players');
        collection.countDocuments().then((count)=>{
        var PID = 10000000 + count;
        });
  var PName = req.query.Name;
  var Email = req.query.email;
  var Athlist = [];
  var LastPlay = new Date();
  var IiD = 30000000;

  const newPlayer = new Players({
      
    PID,
    PName,
    Email,
    Athlist,
    LastPlay,
    IiD
  });

  console.log(newPlayer);
  
  newPlayer.save()
    .then(() => { console.log(req.user); console.log("Completed."); res.json('player added!')})
    .catch(err => { console.log(err); res.status(400).json('Error: ' + err)});
});

/**
 * Get request that finds a player based on the
 * player ID in the query. Returns a single player
 * to whoever called the function using the res param.
 */
router.route('/:id').get((req, res) => {

  Players.findById(req.params.id)
  .then(players => res.json(players))
  .catch(err => res.status(400).json('Error: ' + err));
});

/**
 * Get request that finds a player based on the player ID
 * in the search query and deletes it from the database collection.
 */
router.route('/:id').delete((req, res) => {

  Players.findByIdAndDelete(req.params.id)
  .then(players => res.json('Player Deleted.'))
  .catch(err => res.status(400).json('Error: ' + err));
});


/**
 *  Function used to create an object ID that matches the database parameters.
 *  Based on the collection name being passed in, the function will search said
 *  collection to get the total number of objects in the collection, which will
 *  then be used to created the new object ID. 
 * 
 *  example: If athlete has 4 objects listed, then the new object inserted will
 *  have the set ID: 20000005. No IDs will repeat in the list. 
 *  
 *  Players:    ID is an 8 digit int starting with 1. (1xxxxxxx)
 *  Athletes: ID is an 8 digit int starting with 2. (2xxxxxxx)
 *  Super Users: ID is an 8 digit int starting with 3. (3xxxxxxx)
 *  Scenarios: ID is an 8 digit int starting with 4. (4xxxxxxx)
 * 
 *  @return integer of the newly created ID.
 * 
 */
function setID(){
    //console.log('workin');
    // Int var that will be populated with the specific ID number for an object.
    var ID = 0;

    //Array that will be used to check for duplicate IDs.
    var duplicates = []; 

    //var to focus on the specific collection passed in
    const collection = db.collection('players');

    try{

        ID = 10000000 +  collection.countDocuments();

        //gather list of IDs from collection objects
        duplicates = collection.find().project({AID: 1} ).map(x => x.AID).toArray();

        for (var i = 0; i < duplicates.length; i++){

          if( ID == duplicates[i]){
            ID++;
          }
        }
  }
  catch{
  console.log('error');
  }
  finally{
    return ID;
  }
}

module.exports = router;