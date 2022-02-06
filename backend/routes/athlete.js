/**
 * Tyler Hay / hayty@mail.gvsu.edu
 * December 2020
 * 
 * Athlete Route
 * 
 * This file will serve as the middle-man between the front end and the database
 * for athlete related queries. Function calls using Axios in the React JS files will call the HTTPS
 * POST/GET requests in this file for CRUD operations regarding athletes
 */

const router = require('express').Router();
const mongoose = require('mongoose');
const db = mongoose.connection;

//Linking the athlete Schema model
let Athlete = require('../models/athlete.model.js');

/**
 * Default GET request. Returns full list of athlete documents
 * in a JSON format. 
 */
router.route('/').get((req, res) => {
  Athlete.find()
    .then(athlete => res.json(athlete))
    .catch(err => res.status(400).json('Error: ' + err));
});

/**
 * GET request used for the Super User
 * Force injury feature. Instructors and force injuries 
 * onto athletes to make sure students practice specific
 * injuries.
 */
router.route('/force-injury/').get((req, res) => {
  //Searching for athletes based on the Athlete ID being passed in the req param
  Athlete.findOne({"AID": parseInt(req.query.AID)})
    .then(athlete => {
      
      //Checking if the athlete has a set injury already
      if(athlete.CurrScen === 0){

        //If they don't have a set injury, give the athlete the injury in the req param.
        athlete.CurrScen = req.query.Scen;

        //Update the athlete in the database.
        Athlete.findOneAndUpdate({"AID": parseInt(req.query.AID)}, {
          $set: athlete
        }, (error,data) => {
          if(error){
            return next(error);
          }
          else{
            res.json(data)
          }
        }).then(res => res.json("athlete updated"));

      }
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


/**
 * Default POST request to update athlete documents.
 * Searches for an athlete based on the Athlete ID and updates it
 * with the rest of the req params.
 * 
 *  handles incoming HTTP GET requests on the /update-athlete/ url path
 */
router.route('/update-athlete/').put((req, res, next) => {
  Athlete.findOneAndUpdate({AID: req.params.AID}, {
    $set: req.body
  }, (error, data) => {
    if(error){
      return next(error);
    }
    else{
      res.json(data)
    }
  })
});

/**
 * Default POST request to put a new athlete in the database. 
 * The req param in the POST request contains athlete attributes to
 * make a new athlete object. The athlete is then saved in the athlete
 * collection in the database. 
 * 
 * handles incoming HTTP POST requests on the /athlete/ath_create/
 */
router.route('/ath_create').post((req, res) => {

  //gathering user input from athlete creation screen
    var inID = setID();
    var inName = req.body.name;
    var inRace = req.body.race;
    var inGender = req.body.gender;
    var inSkColor = req.body.skinColor;
    var inShColor = req.body.shirtColor;
    var inPantColor = req.body.pantColor;
    var inLastInjury = new Date();
    var inCurrScen = 00000000;
    var inLastScen = 00000000;
    var inCreateDate = new Date();
    var inPriorInj = req.body.priorInjury;

  const newAthlete = new Athlete({
      inID,
      inName,
      inRace,
      inGender,
      inSkColor,
      inShColor,
      inPantColor,
      inLastInjury,
      inCurrScen,
      inLastScen,
      inCreateDate,
      inPriorInj,
  });

  console.log(newAthlete);

  newAthlete.save()
    .then(() => res.json('athlete added!'))
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

    // Int var that will be populated with the specific ID number for an object.
    var ID = 0;

    //Array that will be used to check for duplicate IDs.
    var duplicates = []; 

    //var to focus on the specific collection passed in
    const collection = db.collection("athlete");

    try{

        ID = 20000000 +  collection.countDocuments();

        //gather list of IDs from collection objects
        duplicates = collection.find().project({AID: 1} ).map(x => x.AID).toArray();

        for (var i = 0; i < duplicates.length; i++){

          if( ID == duplicates[i]){
            ID++;
          }
        }
  }
  catch{

  }
  finally{
    return ID;
  }
}

module.exports = router;