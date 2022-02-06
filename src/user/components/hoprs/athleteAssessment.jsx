import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

/**
 * Athlete Assessment
 *
 * This component is used to document the student's deductions after completing the HOPRS minigames,
 * but before the treatment screen. The student will deduce what injuries their athlete has sustained
 * and record it in the dropwdown menus provided. 
 * 
 * There are 3 categories for the injuries (Shoulder, Knee, Ankle), the athlete will have exactly
 * one injury (currently). 
 */

const AthleteAssessment = () => {

    // Variables that will be pulled from the database
	let shoulderInjuries = []
	let kneeInjuries = []
    let ankleInjuries = []
    let selectedAnswers = ['0', '0', '0']


    // Dropdown list component
    const SelectionDropdown = ({ tests, name, value }) => {
        const [selectedTest, setSelectedTest] = useState('0')

        const handleTest = (props) => {
            setSelectedTest(props.value)
            selectedAnswers[value] = props.target.value
        }

        return <div>
            <select className="custom-select" onChange={handleTest}>
                <option value={0}> {name} </option>
                {tests.map((test) => <option value={test.value}>
                    {test.value}</option>)}
            </select>
        </div>
    }

    const handleSubmit = () => {
        //TODO
	}

    const AthleteAssessmentBuilder = () => (
        <Row>
            <Col>
                <form>
                    <div className="form-group">
                        <SelectionDropdown tests={shoulderInjuries} name={"Shoulder Injuries"} value={0} />
                        <br />
                        <SelectionDropdown tests={kneeInjuries} name={"Knee Injuries"} value={1}/>
                        <br />
                        <SelectionDropdown tests={ankleInjuries} name={"Ankle Injuries"} value={2}/>
                        <br />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary float-left mt-3" onClick={handleSubmit}>Submit</button>
                </form>
            </Col>
            <Col>
                <img src="https://cdn0.iconfinder.com/data/icons/sport-people-1/512/sport_-_sportsman_-_people_-_athlete-08-512.png" className="img-fluid h-100" alt="Athlete"></img>
            </Col>
        </Row>
    );

	return <AthleteAssessmentBuilder />
}

export default AthleteAssessment;