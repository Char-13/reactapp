import React, { Component } from 'react';
import axios from 'axios';
import NewHistory from './scenarioHistory';
import NewObservation from './scenarioObservation';
import NewPalpation from './scenarioPalpation';
import NewROM from './scenarioROM';
import NewSpecial from './scenarioSpecial';
import Error from '../../errorPage';
import {ISName, ISReview, IScat} from './scenarioNew';
 
// This very long variable was made so that everything could be safely pushed to the database
//Without it it is hard to save and store information
var SData1 = {
        //HOPRS: History details
        history: {
            hStory: "",
            hKeywords: ["", ""],
            hReveal: ["", ""],
            hAnswer: ["", ""]
        },

        //HOPRS: Observation Details
        observation: {
            oPoint: [
                {
                    oCoordX: "",
                    oCoordY: "",
                    oDescript: "",
                    oImage: ""
                },
                {
                    oCoordX: "",
                    oCoordY: "",
                    oDescript: "",
                    oImage: ""
                }
            ],

            oAnswers: [
                "",
                ""
            ]
        },

        //HOPRS: Palpation Details
        palpation: {
            pPoint: [
                {
                    pCoordX: "",
                    pCoordY: "",
                    pMaxPain: "",
                    pDescript: ""
                },
                {
                    pCoordX: "",
                    pCoordY: "",
                    pMaxPain: "",
                    pDescript: ""
                }
            ],

            pAnswers: [
                "",
                ""
            ]
        },

        //HOPRS: Range Of Motion
        RoM: {
            rLocation: "",
        },

        //HOPRS: Special Tests Details
        specTest: {
            specTestAnswers: [
                "",
                "",
                ""
            ]
        },

        //HOPRS: Treatment Details (TODO)
        treatment: {

        }




  }
class Main extends Component {
    constructor(props){
        super(props);
        this.state = {mode: "new"};
        //These are all the modes depending on the HOPRS methods
        this.handleNew = this.handleNew.bind(this);
        this.handleMan = this.handleMan.bind(this);
        this.handleRev = this.handleRev.bind(this);
        this.handleTest = this.handleTest.bind(this);
        this.handleGrd = this.handleGrd.bind(this);
        this.handleSub = this.handleSub.bind(this);
        this.handleSav = this.handleSav.bind(this);
    }

    //Changes the State of the program to the different HOPRS methods
    handleNew(){this.setState({mode: 'new'});}
    handleMan(){this.setState({mode: 'man'});}
    handleRev(){this.setState({mode: 'rev'});}
    handleGrd(){this.setState({mode: 'grd'});}
    handleTest(){this.setState({mode: 'test'});}
   
    //This is the Submit Button for when everything is saved this should defintely work but there are things elswhere keeping it commented out
    handleSub(){
    //axios.post('http://localhost:5000/scenario/scen_create/', { 
     //SName: ISName, 
     //SReview: ISReview,
     //SCat: IScat,
     //SData: SData1
    //})
      
    }
    /*****************************************************************************************************************
    * Save Button Function added in to be able to save the information relating to the scenario schema to the database
    * Certain variables need to be redone in the schemas in order to get this completely working however
    *****************************************************************************************************************/
    handleSav(){
            switch(this.state.mode){
                //This is the case if the HOPRS method being imported is currently history
                case 'new':
                    SData1.hStory = document.getElementById("HistoryStory");
                    SData1.hKeywords = [document.getElementById("FirstKeyword"),document.getElementById("SecondKeyword"), document.getElementById("ThirdKeyword")];
                    //hReveal is a variable that the previous group left in but seems unecessary/the same as hAnswer so its commented out
                    //SData1.hReveal = document.getElementById("HistoryStory");
                    SData1.hAnswer = [document.getElementById("FirstKeywordLabel"),document.getElementById("SecondKeywordLabel"), document.getElementById("ThirdKeywordLabel")];
               
                //This is the case if the HOPRS method being imported is currently Observation
                //We did not have enough time to figure out how to import these variables but we suggest remaking the observation minigame schema
                case "man":
                    //SData1.oPoint.oCoordX = 
                    //SData1.oPoint.oCoordY = 
                    //SData1.oPoint.oDescript =
                    //SData1.oPoint.oImage = 
                    //SData1.oAnswers = 
                    break;

                //This is the case if the HOPRS method being imported is currently Palpations
                case "rev":
                    SData1.pPoint.pCoordX = document.getElementById("X Coord");
                    SData1.pPoint.pCoordY = document.getElementById("Y Coord");
                    SData1.pPoint.pMaxPain = document.getElementById("Pain Tolerence");
                    SData1.pPoint.pDescript =  document.getElementById("Palpation Description");
                    
                    //pAnswers not currently required/in use
                    //SData1.pAnswers = 
                    break;

                //This is the case if the HOPRS method being imported is currently Range Of Motion
                case 'grd':
                    SData1.rLocation = document.getElementById("rangelocal");
                    break;
                //This is the case if the HOPRS method being imported is currently Special Tests
                case "test":
                    SData1.specTestAnswers = [document.getElementById("Special 1"),document.getElementById("Special 2"), document.getElementById("Special 3")];
                    break;
                default:
                    break;
            }        
    }


    render() { 

        const renderStatus = () => {
            let com = '';
            switch(this.state.mode){
                case 'new':
                    com = <NewHistory/>
                    break;
                case "man":
                    com = <NewObservation/>
                    break;
                case "rev":
                    com = <NewPalpation/>
                    break;
                case 'grd':
                    com = <NewROM/>
                    break;
                case "test":
                    com = <NewSpecial/>
                    break;
                default:
                    com = <Error/>
                    break;
            }
            return com;
        }

        return ( 
        <div className="main">
            <div>
                <button onClick={this.handleNew}>H</button>
                <button onClick={this.handleMan}>O</button>
                <button onClick={this.handleRev}>P</button>
                <button onClick={this.handleGrd}>R</button>
                <button onClick={this.handleTest}>S</button>
                <button onClick={this.handleSav}>Save</button>
                <button onClick={this.handleSub}>Submit</button>
            </div>
            <div className="mainscreen">
                {renderStatus()}
            </div>
        </div>    );
    }
}
 
export default Main;