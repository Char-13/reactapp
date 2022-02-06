/**
 * Tyler Hay / hayty@mail.gvsu.edu
 * December 2020
 * 
 * Athlete Route
 * 
 * This file will serve as the middle-man between the front end and the database
 * for scenario related queries. Function calls using Axios in the React JS files will call the HTTPS
 * POST/GET requests in this file for CRUD operations regarding scenarios
 */

const router = require('express').Router();
const mongoose = require('mongoose');
const db = mongoose.connection;

//Linking the scenario schema model
let Scenario = require('../models/scenario.model'); 

/**
 * Default GET request for scenarios. Retrurns a full list of 
 * all scenario documents in JSON format. 
 * 
 * handles incoming HTTP GET requests on the /scenario/ url path
 * 
 * Note: returning the result will make the JSON undefined.
 * It's reccomended that CRUD operations for scenario objects stay in this file
 * instead of passing it back to the front end files.
 */
router.route('/').get((req, res) => {
  Scenario.find()
    .then(scenario => res.json(scenario))
    .catch(err => res.status(400).json('Error: ' + err));
});


/**
 * POST request to save new scenarios. 
 * 
 * handles incoming HTTP POST requests on the /scenario/scen_create/
 * 
 * Note: This should be mostly working properly now there is only a few kinks
 */
router.route('/scen_create').post((req, res) => {

  //gathering user input from athlete creation screen
  const collection = db.collection('scenarios');
        collection.countDocuments().then((count)=>{
        var SID = 40000000 + count;
        });
  var SName = req.body.title;
  var SReview = req.body.review;
  var SCreated = new Date();
  var LastEdited = new Date();
  var SCat = [
      req.body.injuryType, 
      req.body.injuryLocation
    ];
    // Object that will hold the HOPRS method details
  var SData = {
        //HOPRS: History details
        history: {
            hStory: req.body.hStory,
            hKeywords: [req.body.hKeyword1, req.body.hKeyword2],
            hReveal: [req.body.hReveal1, req.body.hReveal2],
            hAnswer: [req.body.hAnswer1, req.body.hReveal2]
        },

        //HOPRS: Observation Details
        observation: {
            oPoint: [
                {
                    oCoordX: req.body.oXCoord1,
                    oCoordY: req.body.oYCoord1,
                    oDescript: req.body.oDesc1,
                    oImage: req.body.oImg1
                },
                {
                    oCoordX: req.body.oXCoord2,
                    oCoordY: req.body.oYCoord2,
                    oDescript: req.body.oDesc2,
                    oImage: req.body.oImg2
                }
            ],

            oAnswers: [
                req.body.oAnswer1,
                req.body.oAnswer2
            ]
        },

        //HOPRS: Palpation Details
        palpation: {
            pPoint: [
                {
                    pCoordX: req.body.pXCoord1,
                    pCoordY: req.body.pYCoord1,
                    pMaxPain: req.body.mPain1,
                    pDescript: req.body.pDesc1
                },
                {
                    pCoordX: req.body.pXCoord2,
                    pCoordY: req.body.pYCoord2,
                    pMaxPain: req.body.mPain2,
                    pDescript: req.body.pDesc2
                }
            ],

            pAnswers: [
                req.body.pAnswer1,
                req.body.pAnswer2
            ]
        },

        //HOPRS: Range Of Motion (TODO)
        RoM: {

        },

        //HOPRS: Special Tests Details (TODO)
        specTest: {
            specTestAnswers: [

            ]
        },

        //HOPRS: Treatment Details (TODO)
        treatment: {

        }




  }

  const newScenario = new Scenario({
      
        SID,
        SName,
        SReview,
        SCreated,
        LastEdited,
        SCat,
        SData
  });

  console.log(newScenario);
  
  newScenario.save()
    .then(() => res.json('scenario added!'))
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

 //This was an old function left by the previous group we left it in in case you decide to use it but we found it unnecessary and it caused
 //a lot of errors
function setID(){

    // Int var that will be populated with the specific ID number for an object.
    var ID = 0;

    //Array that will be used to check for duplicate IDs.
    var duplicates = []; 

    //var to focus on the specific collection passed in
    const collection = db.collection("scenario");

    //This creates the random ID that was created in the function below this was way easier though
    try{

        ID = 40000000 +  collection.countDocuments();

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