import React, { Component } from 'react';

class TestScenario extends Component {
    state = {  }
    render() { 
        return ( <div className="testscreen">
            <div className="search">
                <form>
                    <div class="form-group">
                        <label htmlFor="exampleFormControlInput1">ID: </label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="10 00 00 00"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Title: </label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Broken Arm"></input>
                    </div>
                    <button type="submit" class="btn btn-primary">Search</button>
                </form>
            </div>
            <div className="test">
                <h1>This will be replaced by the test screen</h1>
            </div>
        </div> );
    }
}
 
export default TestScenario;