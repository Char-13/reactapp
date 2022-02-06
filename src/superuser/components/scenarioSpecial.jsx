import React, { Component } from 'react';

class NewSpecial extends Component {
    state = {  }
    render() { 
        return ( <form>
            <div class="form-group">
                <h5>Special Tests</h5>
            </div>
           <div className="form-group">
              <label htmlFor="Special Test 1">First Special Test</label>
              <select className="form-control" id="Special 1">
                <option>None</option>
                <option>Ligament Testing</option>
                <option>Fracture Testing</option>
                <option>Neurological Testing</option>
                <option>Hydration Testing</option>
                <option>Strength Testing</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Special Test 2">Second Special Test</label>
              <select className="form-control" id="Special 2">
                <option>None</option>
                <option>Ligament Testing</option>
                <option>Fracture Testing</option>
                <option>Neurological Testing</option>
                <option>Hydration Testing</option>
                <option>Strength Testing</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Special Test 3">Third Special Test</label>
              <select className="form-control" id="Special 3">
                <option>None</option>
                <option>Ligament Testing</option>
                <option>Fracture Testing</option>
                <option>Neurological Testing</option>
                <option>Hydration Testing</option>
                <option>Strength Testing</option>
              </select>
            </div>
          </form> );
    }
}
 
export default NewSpecial;