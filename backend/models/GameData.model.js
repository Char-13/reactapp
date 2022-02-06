/**
 * Tyler Hay / hayty@mail.gvsu.edu
 * December 2020
 * Database schema for game data documents
 * 
 * This schema acts as an organizational tool to ensure that
 * each GameData document in the GameData collection within the
 * database follows a similar format
 * 
 * The GameData document will hold lists of injury scenarios classified by
 * the injury type. Ideally there should be only 1 GameData document that is
 * continuously updated with injury scenarios and used. 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 // GameData Schema Object
 const gameDataSchema = new Schema({
   
      //List of Prior Injuries (History in HOPRS method)
      PrioInjuryList: {type: Object, required: false},
      //List of Palpation data for HOPRS method
      PalpationList: {type: Object, required: false},
      //List of Observation data for HOPRS method
      ObservationList: {type: Object, required: false},
      //List of Special Test data for HOPRS
      SpecialTestList: {type: Object, required: false},
      //List of Dislocation type injuries
      DislocationList: {type: Object, required: false},
      //List of Sprain type injuries
      SprainList: {type: Object, required: false},
      //List of Strain type injuries
      StrainList: {type: Object, required: false},
      //List of Fracture type injuries
      FractureList: {type: Object, required: false},
      //List of Itis type injuries
      itisList: {type: Object, required: false}


 }, {
   
    //Timestamps will automatically put DateCreated
    // and DateEdited fields  in the schema.
   timestamps: false,

   //Linking specified collection the schema relates to in the DB
   collection: 'GameData'
 

 });

 //exporting the schema model so route files can make use of it
 const GameData = mongoose.model('GameData', gameDataSchema);

 module.exports = GameData;