/**
 * Tyler Hay / hayty@mail.gvsu.edu
 * December 2020
 * Database schema for scenarios
 * 
 * This schema acts as an organizational tool to ensure that
 * each athlete document in the athlete collection within the
 * database follows a similar format
 * 
 * Scenario documents represent injury scenarios that players will have
 * to play through. Players will go through the scenario and use the HOPRS
 * method to discover what the injury is and how to best treat the injured athlete.
 * 
 * Super Users (such as instructors) should be able to create and edit scenarios
 * using the Super User front end so they can fine tune specific injuries they
 * would like students to practice.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 // Scenario Schema Object
 const scenarioSchema = new Schema({
   //Scenario ID: Unique to every scenario
   SID: {type: Number, required: true},
   //Scenario Name
   SName: {type: String, required: true},
   //Summary of what happens in the scenario.
   SReview: {type: String, required: true},
   //Date the scenario was created
   SCreated: {type: Date, required: true},
   //Date the scenario was edited
   LastEdited: {type: Date, required: true},
   //Scenario Category: Classification the injury falls under
   SCat: {type: Array, required: true},
   //Scenario Data: Linked GameData regarding the injury and HOPRS
   SData: {type: Object, required: true}
 }, {
   
  //Timestamps will automatically put DateCreated and DateEdited
  //fields in the schema.
   timestamps: false,
   collection: 'scenario'
 

 });

 //exporting the schema model so route files can make use of it
 const Scenario = mongoose.model('scenario', scenarioSchema);

 module.exports = Scenario;