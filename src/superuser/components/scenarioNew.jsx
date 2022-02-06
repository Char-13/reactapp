import React, { Component } from 'react';
import ScenarioNewForm from "./scenarioNewForm";
import Hoprs from "./scenarioNewHoprs";
import Error from "../../errorPage";
import axios from 'axios';
import {useEffect, useState} from 'react';

  //var IDS = '';
  var ISName = '';
  var ISReview = '';
  var IScat = {injury:" ", location:" "};
class ScenarioNew extends Component {
  constructor(props){
      super(props);
      this.state = {mode: "new"};

      this.handleNew = this.handleNew.bind(this);
      this.handleMan = this.handleMan.bind(this);
  }

  handleNew(){this.setState({mode: 'new'});}
  handleMan(){
  this.setState({mode: 'hoprs'});
  //Document.getElementById will recieve the element stored in the text spaces from the admin overview
  ISName = document.getElementById("ScenarioTitle");
  ISReview = document.getElementById("ScenarioReview");
  IScat.injury = document.getElementById("ScenarioInjuryType"); 
  IScat.location = document.getElementById("ScenarioInjuryLocation"); 
  }
  

  render() { 

      const renderStatus = () => {
          let com = '';
          switch(this.state.mode){
              case 'new':
                  com = <ScenarioNewForm/>
                  break;
              case "hoprs":
                  com = <Hoprs/>
                  break;
              default:
                  com = <Error/>
                  break;
          }
          return com;
      }

      return ( 
      <div className="main">
          <div className="mainscreen">
              {renderStatus()}
          </div>
          <div>
            <button onClick={this.handleMan}>Next</button>
          </div>
      </div>    );
  }
}
export {ISName, ISReview, IScat};
export default ScenarioNew;