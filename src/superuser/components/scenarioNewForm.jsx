import React, { Component } from 'react';
import axios from 'axios';


class ScenarioNewForm extends Component {
    
    
      render() {
        return (
          <form>
            <div className="form-group">
              <label htmlFor="ScenarioID">ID: </label>
              <input type="text" className="form-control" id="ScenarioID" placeholder="10 00 00 00"></input>
            </div>
            <div className="form-group">
              <label htmlFor="ScenarioTitle">Title: </label>
              <input type="text" className="form-control" id="ScenarioTitle" placeholder="Broken Arm  "></input>
            </div>
            <div className="form-group">
              <label htmlFor="ScenarioReview">Review</label>
              <textarea className="form-control" id="ScenarioReview" rows="3"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="ScenarioInjuryType">Injury Type</label>
              <select className="form-control" id="ScenarioInjuryType">
                <option>Sprain</option>
                <option>Strain</option>
                <option>Fracture</option>
                <option>itis</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="ScenarioInjuryLocation">Injury Location</label>
              <select className="form-control" id="ScenarioInjuryLocation">
                <option>Torso</option>
                <option>Leg</option>
                <option>Foot</option>
                <option>Arm</option>
                <option>Hand</option>
                <option>Head</option>
                <option>Other</option>  
              </select>
            </div>
          </form>
        );
      }
}
 
export default ScenarioNewForm;