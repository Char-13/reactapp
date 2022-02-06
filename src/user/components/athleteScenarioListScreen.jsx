import React, { Component, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const AthleteScenarioList = (props) => {
    let gradScenarios = props.gradedScenarioList
    let pracScenarios = props.practiceScenarioList

    const handleScenario = () => {
        props.startScenario()
    }

    const AthleteScenarioListBuilder = () => (
        <Row>
            <Col>
                Graded Exercises<br /><br />
                {gradScenarios.map(scenario => (
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder={scenario.name} aria-label={scenario.name} key={scenario.id} aria-describedby="basic-addon2" readOnly></input>
                        <div className="input-group-append">
                            <button onClick={handleScenario} className="btn btn-success" type="button" id="button-addon2" >O</button>
                        </div>
                    </div>
                ))}
                Practice Exercises<br /><br />
                {pracScenarios.map(scenario => (
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder={scenario.name} aria-label={scenario.name} key={scenario.id} aria-describedby="basic-addon2" readOnly></input>
                        <div className="input-group-append">
                            <button onClick={handleScenario} className="btn btn-primary" type="button" id="button-addon2" >O</button>
                        </div>
                    </div>
                ))}
            </Col>
            <Col>
                <img src="https://cdn0.iconfinder.com/data/icons/sport-people-1/512/sport_-_sportsman_-_people_-_athlete-08-512.png" className="img-fluid h-100" alt="Athlete"></img>
            </Col>
        </Row>
    );

    return <AthleteScenarioListBuilder />
}

export default AthleteScenarioList;