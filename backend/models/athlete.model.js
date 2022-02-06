/**
 * Tyler Hay / hayty@mail.gvsu.edu
 * December 2020
 * Database schema for athletes
 * 
 * This schema acts as an organizational tool to ensure that
 * each athlete document in the athlete collection within the
 * database follows a similar format
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 // Athlete Schema Object
 const athleteSchema = new Schema({
   //Athlete ID: Unique to every athlete
   AID: {type: Number, required: true},
   //Athlete Name
   AthName: {type: String, required: true},
   // Athlete's Race
   Race: {type: String, required: true},
   // Athlete's Gender
   Gender: {type: String, required: true},
   // Athlete's Skin color
   SkColor: {type: String, required: true},
   //Athlete's Shirt Color
   TshColor: {type: String, required: true},
   //Athlete's Pants Color
   PantColor: {type: String, required: true},
   //Date of Athlete's Last Injury
   LastInjury: {type: Date, required: true},
   //Athlete's Current Active Injury Scenario
   CurrScen: {type: Number, required: true},
   //Athlete's Last Active Injury Scenario
   LastScen: {type: Number, required: true},
   //Date Athlete was created
   CreateDate: {type: Date, required: true},
   //Player ID that will tie the athlete to a user account
   PID: {type: Number, required: true}
 }, {
   
  //Timestamps will automatically put DateCreated and DateEdited
  //fields  in the schema.
   timestamps: false,

   //Linking specified collection the schema relates to in the DB
   collection: 'athlete'
 

 });

 //exporting the schema model so route files can make use of it
 const Athlete = mongoose.model('athlete', athleteSchema);

 module.exports = Athlete;