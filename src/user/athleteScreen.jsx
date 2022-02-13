import React, { Component, useState } from 'react';
import { Col, Row } from "react-bootstrap";

import AthleteNavBar from './components/athleteNavbar';
import AthleteSettingsScreen from './components/athleteSettingsScreen';
import AthleteTreatmentScreen from './components/athleteTreatmentScreen';
import AthleteScenarioList from './components/athleteScenarioListScreen';
import Error from '../errorPage';

/** HOPRS mini-games */
import AthleteHistory from './components/hoprs/athleteHistory';
import AthleteObservation from './components/hoprs/athleteObservation';
import AthletePalpation from './components/hoprs/athletePalpation';
import AthleteROM from './components/hoprs/athleteROM';
import AthleteSpecialTests from './components/hoprs/athleteSpecialTest';
import AthleteAssessment from './components/hoprs/athleteAssessment';


class AthleteScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            mode: 'athHome',
            observationLock: true,
            palpationLock: true,
            romLock: true,
            stLock: true,
            assessmentLock: true,
            observationLabel: "X",
            palpationLabel: "X",
            romLabel: "X",
            stLabel: "X",
            assessmentLabel: "X",
            /*Past this point is minigame information that should be replaced through a connection to the database*/
            scenarioList: [1, 2, 3],
            gradedScenarios: [{ name: "Graded Shoulder Sprain", id: "1" },
                { name: "Graded Ankle Sprain", id: "2" },
                { name: "Graded Elbow Sprain", id: "3" }],
            practiceScenarios: [{ name: "Shoulder Sprain", id: "4" },
                { name: "Ankle Sprain", id: "5" },
                { name: "Elbow Sprain", id: "6" }],
            historyScen: ["The athlete woke up with a KEY3 .The athlete KEY1 hard during practice on their KEY2.",
                ["fell", "arm", "headache"]],
            historyAns: [false, false, false],
            observationScen: [284,
                170,
                "https://cdn0.iconfinder.com/data/icons/sport-people-1/512/sport_-_sportsman_-_people_-_athlete-08-512.png",
                "A shoulder joint bruise or a bruised shoulder is a condition where the shoulder bone or the shoulder joint is hurt or injured resulting in development of purplish-bluish discoloration beneath the skin of the shoulder joint."],
            observationAns: [],
            palpationScen: [284,
                176,
                6,
                "Rotator Cuff Injury"],
            palpationAns: [],
            romScen: ["Right Shoulder",
                "Left Shoulder",
                "Right Knee",
                "Left Knee",
                "Right Ankle",
                "Left Ankle"],
            romAns: [],
            stScen: [
                { value: "Strength Testing", id: 1 },
                { value: "Fracture Testing", id: 2 },
                { value: "Ligament Testing", id: 3 },
                { value: "Neurological Testing", id: 4 },
                { value: "Hydration Testing", id: 5 },
                { value: "None", id: 6 }
            ],
            stAns: ["Strength Testing", "None", "None"],
        }

        this.skipToHomeScreen = this.skipToHomeScreen.bind(this);
        this.handleTreatButton = this.handleTreatButton.bind(this);
        this.handleTreatmentButton = this.handleTreatmentButton.bind(this);
        this.handleSetButton = this.handleSetButton.bind(this);
        this.handleScenarioListButton = this.handleScenarioListButton.bind(this);

        this.handleHistory = this.handleHistory.bind(this);
        this.handleObservation = this.handleObservation.bind(this);
        this.handlePalpation = this.handlePalpation.bind(this);
        this.handleROM = this.handleROM.bind(this);
        this.handleST = this.handleST.bind(this);
        this.handleAssessment = this.handleAssessment.bind(this);
    }

    skipToHomeScreen() { this.setState({ mode: 'athHome' }); }
    handleSetButton() { this.setState({ mode: 'athSetting' }); }
    handleTreatButton() { this.setState({ mode: 'athTreat' }); }
    handleTreatmentButton() { this.setState({ mode: 'athTreatment' }); }
    handleScenarioListButton() { this.setState({ mode: 'athScenarioList' }); }

    handleHistory() { this.setState({ mode: 'athHistory', observationLock: false, observationLabel: "O" }); }
    handleObservation() { this.setState({ mode: 'athObservation', palpationLock: false, palpationLabel: "O" }); }
    handlePalpation() { this.setState({ mode: 'athPalpation', romLock: false, romLabel: "O" }); }
    handleROM() { this.setState({ mode: 'athROM', stLock: false, stLabel: "O" }); }
    handleST() { this.setState({ mode: 'athST', assessmentLock: false, assessmentLabel: "O" }); }
    handleAssessment() { this.setState({ mode: 'athAssessment' }) }

    saveHistory(answers) {this.setState({ historyAns: answers });}
    saveObservation(answers) {this.setState({ observationAns: answers })}
    savePalpation(answers) {this.setState({ palpationAns: answers })}
    saveROM(answers) {this.setState({ romAns: answers })}
    saveST(answers) {this.setState({ stAns: answers })}
    saveAssessment() {
        const newScenario = [...this.state.scenario];
        newScenario[5] = "null";
        this.setState({ scenario: newScenario });
    }


    render() {

        const renderStatus = () => {
            let com = '';
            switch (this.state.mode) {
                /** Begin main game screens. Returning users start here */
                // Athlete Home Screen
                case 'athHome':
                    com =
                    
              
                        
                         <React.Fragment>
                  
                        <button onClick={this.handleScenarioListButton} type="button" className="btn btn-danger btn-lg">Treat</button> &nbsp;&nbsp;&nbsp;
                        {/** <button onClick={this.handleTreatButton} type="button" className="btn btn-danger btn-lg">Treat</button> &nbsp;&nbsp;&nbsp; */}
                        <button onClick={this.handleSetButton} id="settingsButton" type="button" className="btn btn-secondary btn-lg">Settings</button>
                            <div>
                                <img src="https://cdn0.iconfinder.com/data/icons/sport-people-1/512/sport_-_sportsman_-_people_-_athlete-08-512.png" className="img-fluid" alt="Athlete"></img>
            
                            </div>
                           
                            
                        </React.Fragment>
                    break;
                case 'athSetting':
                    com =
                        <React.Fragment>
                            <Row>
                                <button onClick={this.skipToHomeScreen} type="button" className="btn btn-danger btn-lg float-left my-2">Back</button>
                                <div className="p-3 w-auto my-2 bg-secondary text-white">Settings</div>
                            </Row>
                            <AthleteSettingsScreen />
                        </React.Fragment>
                    break;
                case 'athScenarioList':
                    com =
                        <React.Fragment>
                            <Row>
                                <button onClick={this.skipToHomeScreen} type="button" className="btn btn-danger btn-lg float-left my-2">Back</button>
                        </Row>
                        <AthleteScenarioList gradedScenarioList={this.state.gradedScenarios} practiceScenarioList={this.state.practiceScenarios} startScenario={this.handleTreatButton} />
                        </React.Fragment>
                    break;
                // Treat screen
                case 'athTreat':
                    com =
                        <React.Fragment>
                        <Row>
                            <button onClick={this.handleScenarioListButton} type="button" className="btn btn-danger btn-lg float-left m-2">Back</button>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="form-group">
                                        {/* History */}
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="History" aria-label="History" aria-describedby="basic-addon2" readOnly></input>
                                            <div className="input-group-append">
                                                <button onClick={this.handleHistory} className="btn btn-primary" type="button" id="button-addon2" >O</button>
                                            </div>
                                        </div>
                                        {/* Observation */}
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Observation" aria-label="Observation" aria-describedby="basic-addon2" readOnly></input>
                                            <div className="input-group-append">
                                                <button onClick={this.handleObservation} className="btn btn-primary" type="button" id="button-addon2" disabled={this.state.observationLock}>{this.state.observationLabel}</button>
                                            </div>
                                        </div>

                                        {/* Palpations */}
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Palpations" aria-label="Palpations" aria-describedby="basic-addon2" readOnly></input>
                                            <div className="input-group-append">
                                                <button onClick={this.handlePalpation} className="btn btn-primary" type="button" id="button-addon2" disabled={this.state.palpationLock}>{this.state.palpationLabel}</button>
                                            </div>
                                        </div>

                                        {/* Range of Motion (ROM)*/}
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Range of Motion" aria-label="Range of Motion" aria-describedby="basic-addon2" readOnly></input>
                                            <div className="input-group-append">
                                                <button onClick={this.handleROM} className="btn btn-primary" type="button" id="button-addon2" disabled={this.state.romLock} >{this.state.romLabel}</button>
                                            </div>
                                        </div>

                                        {/* Special Tests */}
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Special Tests" aria-label="Special Tests" aria-describedby="basic-addon2" readOnly></input>
                                            <div className="input-group-append">
                                                <button onClick={this.handleST} className="btn btn-primary" type="button" id="button-addon2" disabled={this.state.stLock}>{this.state.stLabel}</button>
                                            </div>
                                        </div>

                                        {/* Assessments */}
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Assessments" aria-label="Assessments" aria-describedby="basic-addon2" readOnly></input>
                                            <div className="input-group-append">
                                                <button onClick={this.handleAssessment} className="btn btn-primary" type="button" id="button-addon2" disabled={this.state.assessmentLock}>{this.state.assessmentLabel}</button>
                                            </div>
                                        </div>

                                        {/* Treatments Button */}
                                        <button onClick={this.handleTreatmentButton} type="button" className="btn btn-secondary float-left my-3">Treatment</button>
                                        {/* Submit Button */}
                                        <button type="submit" className="btn btn-primary float-left mt-3">Submit</button>
                                    </div>
                                </Col>

                                <Col>
                                    <img src="https://cdn0.iconfinder.com/data/icons/sport-people-1/512/sport_-_sportsman_-_people_-_athlete-08-512.png" className="img-fluid h-100" alt="Athlete"></img>
                                </Col>
                            </Row>
                        </React.Fragment>
                    break;
                // Treatment screen, located inside the treat screen
                case 'athTreatment':
                    com =
                        <React.Fragment>
                            <Row>
                                <button onClick={this.handleTreatButton} id="treatButton" type="button" className="btn btn-danger btn-lg float-left m-2">Back</button>
                                <div className="p-3 w-auto my-2 bg-secondary text-white">Treatment</div>
                            </Row>
                            <AthleteTreatmentScreen />
                            <div className="row">
                                <button id="referenceButton" type="button" className="btn btn-dark btn-lg">References</button>
                            </div>
                        </React.Fragment>
                    break;
                /** Begin HOPRS screens */
                // History screen
                case 'athHistory':
                    com =
                        <React.Fragment>
                            <Row>
                                <button onClick={this.handleTreatButton} type="button" className="btn btn-danger btn-lg float-left m-2">Back</button>
                                <div className="p-3 w-auto my-2 bg-secondary text-white">History</div>
                            </Row>
                        <AthleteHistory hstory={this.state.historyScen[0]} hkeys={this.state.historyScen[1]}  hanswers={this.state.historyAns}  submitHistory={this.saveHistory.bind(this)} />
                            <button id="referenceButton" type="button" className="btn btn-dark btn-lg float-left mt-3">References</button>
                        </React.Fragment>
                    break;
                // Observation screen
                case 'athObservation':
                    com =
                        <React.Fragment>
                            <Row>
                                <button onClick={this.handleTreatButton} type="button" className="btn btn-danger btn-lg float-left m-2">Back</button>
                                <div className="p-3 w-auto my-2 bg-secondary text-white">Observation</div>
                        </Row>
                        <AthleteObservation scenario={this.state.observationScen} />
                            <button id="referenceButton" type="button" className="btn btn-dark btn-lg float-left mt-3">References</button>
                        </React.Fragment>
                    break;
                // Palpation screen
                case 'athPalpation':
                    com =
                        <React.Fragment>
                            <Row>
                                <button onClick={this.handleTreatButton} type="button" className="btn btn-danger btn-lg float-left m-2">Back</button>
                                <div className="p-3 w-auto my-2 bg-secondary text-white">Palpation</div>
                        </Row>
                        <AthletePalpation scenario={this.state.palpationScen} />
                            <button id="referenceButton" type="button" className="btn btn-dark btn-lg float-left mt-3">References</button>
                        </React.Fragment>
                    break;
                // Range of Motion screen
                case 'athROM':
                    com =
                        <React.Fragment>
                            <Row>
                                <button onClick={this.handleTreatButton} type="button" className="btn btn-danger btn-lg float-left m-2">Back</button>
                                <div className="p-3 w-auto my-2 bg-secondary text-white">Range of Motion</div>
                            </Row>
                        <AthleteROM scenario={this.state.romScen} />
                            <button id="referenceButton" type="button" className="btn btn-dark btn-lg float-left mt-3">References</button>
                        </React.Fragment>
                    break;
                // Special Tests screen
                case 'athST':
                    com =
                        <React.Fragment>
                            <Row>
                                <button onClick={this.handleTreatButton} type="button" className="btn btn-danger btn-lg float-left m-2">Back</button>
                                <div className="p-3 w-auto my-2 bg-secondary text-white">Special Tests</div>
                            </Row>
                        <AthleteSpecialTests scenario={this.state.stScen} answers={this.state.stAns} />
                            <button id="referenceButton" type="button" className="btn btn-dark btn-lg float-left mt-3">References</button>
                        </React.Fragment>
                    break;
                // Assessment screen
                case 'athAssessment':
                    com =
                        <React.Fragment>
                            <Row>
                                <button onClick={this.handleTreatButton} type="button" className="btn btn-danger btn-lg float-left m-2">Back</button>
                                <div className="p-3 w-auto my-2 bg-secondary text-white">Assessments</div>
                            </Row>
                            <AthleteAssessment />
                            <button id="referenceButton" type="button" className="btn btn-dark btn-lg float-left mt-3">References</button>
                        </React.Fragment>
                    break;
                default:
                    com = <Error />
                    break;
            }
            return com;
        }
        return (
           
            <div className="container text-center h-auto position-relative">
            <div class="top-img">
                <div class="container">
                    <div class="navv">
                        <a href="/">Home</a>
                        <a href="student">Student</a>
                        <a href="admin">Admin</a> 
                        </div>
                        </div>
                        </div>
                <AthleteNavBar />
                {renderStatus()}
            </div>);
    }
}

export default AthleteScreen;
