import React, { Component } from 'react';

class NewROM extends Component {
    state = {  }
    render() { 
        return( <form>
            <div class="form-group">
                <h4>Range Of Motion</h4>
            </div>
            <div className="form-group">
              <label htmlFor="Affected Location">Affected Location</label>
              <select className="form-control" id="rangelocal">
                <option>Right Shoulder</option>
                <option>Left Shoulder</option>
                <option>Right Knee</option>
                <option>Left Knee</option>
                <option>Right Ankle</option>
                <option>Left Ankle</option>
              </select>
            </div>
          </form> );
    }
}
 
export default NewROM;