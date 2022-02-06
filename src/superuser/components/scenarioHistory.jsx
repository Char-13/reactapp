import React, { Component } from 'react';

class NewHistory extends Component {
    state = {  }
    render() { 
        return ( <form>
            <div class="form-group">
                <h1>History</h1>
              <label for="HistoryStory">Story</label>
              <textarea class="form-control" id="HistoryStory" rows="3"></textarea>
            </div>
            <div class="form-group">
              <label for="FirstKeyword">Keyword 1 </label>
              <input type="text" class="form-control" id="FirstKeyword" placeholder=""></input>
            </div>
            <div class="form-group">
              <label for="FirstKeywordLabel">Correct: </label>
              <input type="checkbox" class="form-control" id="FirstKeywordLabel" placeholder=""></input>
            </div>
            <div class="form-group">
              <label for="SecondKeyword">Keyword 2 </label>
              <input type="text" class="form-control" id="SecondKeyword" placeholder=" "></input>
            </div>
            <div class="form-group">
              <label for="SecondKeywordLabel">Correct: </label>
              <input type="checkbox" class="form-control" id="SecondKeywordLabel" placeholder=""></input>
            </div>
            <div class="form-group">
              <label for="ThirdKeyword">Keyword 3 </label>
              <input type="text" class="form-control" id="ThirdKeyword" placeholder=" "></input>
            </div>
            <div class="form-group">
              <label for="ThirdKeywordLabel">Correct: </label>
              <input type="checkbox" class="form-control" id="ThirdKeywordLabel" placeholder=""></input>
            </div>
          </form> );
    }
}
 
export default NewHistory;