import React, { Component } from 'react';

class NewPalpation extends Component {
    state = {  }
    render() { 
        return( <form>
            <div class="form-group">
                <h3>Palpatations</h3>
              <label for="Description">Description</label>
              <textarea class="form-control" id="Palpatation Description" rows="3"></textarea>
            </div>
            <div class="form-group">
              <label for="Pain Tolerence">Tolerence Level </label>
              <input type="text" class="form-control" id="Pain Tolerence" placeholder="1-10"></input>
            </div>
            <div class="form-group">
              <label for="Location of Palpatation X Coordinate">X Coordinate</label>
              <input type="text" class="form-control" id="X Coord" placeholder="0-511"></input>
            </div>
            <div class="form-group">
              <label for="Location of Palpatation Y Coordinate">Y Coordinate </label>
              <input type="text" class="form-control" id="Y Coord" placeholder="0-511"></input>
            </div>
          </form> );
    }
}
 
export default NewPalpation;