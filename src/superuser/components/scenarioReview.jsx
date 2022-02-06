import React, { Component } from 'react';

class ScenarioReview extends Component {
    constructor(props) {
        super(props);
        this.state = {searchID: null,
                      searchTitle: ''
                    };
      }

    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]:val});
    }
    
    handleSubmit = (event) => {
        alert('A name was submitted: ' + this.state.searchID);
        event.preventDefault();
    }

    render() { 
        return ( 
        <div>
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Manage: {this.state.searchID}{this.state.searchTitle}</h1>
                    <label>
                    ID:
                    <input type="text" name='searchID' onChange={this.handleChange}/>
                    </label> 
                    <label>
                    Title:
                    <input type="text" name="searchTitle" onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
          </div>
            <div className="review">
            <h2>Review</h2>
            <p>The athlete has a broken leg and needs a cast.</p>
            <h2>History</h2>
            <p>This is where the full story goes. The athlete stopped his fall with his arm. He thinks his arm is broken.</p>
            <li>Story: Incorrect</li>
            <li>Arm: Correct</li>
            <h2>Observation</h2>
            <p>Two observation points</p>
            <li>Info: The athlete has a fracture in their right arm. X: 12.1, Y: 25.3</li>
            <li>Image: brokenarm.png . X: 12.4, Y: 25.5</li>
            <h2>Palpation</h2>
            <p>One palpation point</p>
            <li>Condition: Fractured Arm, Max Pain: 10, X: 12.1, Y: 25.3</li>
            <h2>Range of Motion</h2>
            <p>Limited movement in Active and Passive.</p>
            <li>Active: Right Wrist</li>
            <li>Passive: Right Wrist</li>
            <h2>Special Test</h2>
            <p>There is one special test.</p>
            <li>Wrist Test</li>
            <h2>Treatment/Assessment</h2>
            <p>Broken Arm, refer to XRay.</p>
            </div>
        </div>
         );
    }
}
 
export default ScenarioReview;