import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
/**
 * Athlete Special Test Minigame
 * 
 * In this minigame, after the user has completed all the previous minigames, they will 
 * select what tests they believe should be performed on the patient. A successful 
 * choice will give a thumbs up and a wrong choice will give a thumbs up.
 * 
 * If given the chance, I would go back and change the logic for the choices to use
 * useState arrays instead of the current state of the function and separate useStates.
 *    
 */

const AthleteSpecialTests = (props) => {

    // Variables that need to be accessed from the database
    var specialTests = props.scenario
    var specialTestsAnswers = props.answers
    var selectedAnswers = ['0', '0', '0']

    // The Thumbs Up & Thumbs Down images respectively 
    const imageStyle1 = {
        margin: 'auto',
        display: 'inline-block',
        backgroundImage: 'url(https://img.icons8.com/ultraviolet/40/000000/good-quality--v1.png)',
        height: '40px',
        width: '40px',
        backgroundSize: '40px'
    }

    const imageStyle2 = {
        margin: 'auto',
        display: 'inline-block',
        backgroundImage: 'url(https://img.icons8.com/ultraviolet/40/000000/poor-quality.png)',
        height: '40px',
        width: '40px',
        backgroundSize: '40px'
    }

    // The opacity overlay for the images (False = Faded, True = Full)
    const opacityStyleFalse = {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        color: 'white'
    }

    const opacityStyleTrue = {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        color: 'white'
    }

    // UseStates for all thumbs up/down images
    // Would update this and the logic below to arrays if had the time
    const [correctAnswer1, setCorrectAnswer1] = React.useState(opacityStyleFalse)
    const [wrongAnswer1, setWrongAnswer1] = React.useState(opacityStyleFalse)
    const [correctAnswer2, setCorrectAnswer2] = React.useState(opacityStyleFalse)
    const [wrongAnswer2, setWrongAnswer2] = React.useState(opacityStyleFalse)
    const [correctAnswer3, setCorrectAnswer3] = React.useState(opacityStyleFalse)
    const [wrongAnswer3, setWrongAnswer3] = React.useState(opacityStyleFalse)

    // Dropdown component
    const SelectionDropdown = ({ tests, value }) => {
        const [selectedTest, setSelectedTest] = useState('0')

        const handleTest = (props) => {
            setSelectedTest(props.value)
            selectedAnswers[value - 1] = props.target.value
        }

        return <div>
            <select className="custom-select" onChange={handleTest}>
                <option value={0}> Special Test {value} </option>
                {tests.map((test) => <option value={test.value}>
                    {test.value}</option>)}
            </select>
        </div>
    }

    // Checks for correct answers and sets the useStates appropriately
    const checkAnswers = () => {
        let ansOne = specialTestsAnswers[0]
        let ansTwo = specialTestsAnswers[1]
        let ansThree = specialTestsAnswers[2]

        let choiceOne = selectedAnswers[0]
        let choiceTwo = selectedAnswers[1]
        let choiceThree = selectedAnswers[2]

        // Checks for how many "Nones" the answer contains
        let none = 0
        for (let i = 0; i < specialTestsAnswers.length; i++) {
            if (specialTestsAnswers[i] === "None") {
                none++
            }
        }

        // Checks first choice
        if (choiceOne === ansOne || choiceOne === ansTwo || choiceOne === ansThree) {
            if (choiceOne === "None" && none === 0) {
                setCorrectAnswer1(opacityStyleFalse)
                setWrongAnswer1(opacityStyleTrue)
            } else if (choiceOne === "None") {
                none--
                setCorrectAnswer1(opacityStyleTrue)
                setWrongAnswer1(opacityStyleFalse)
            } else {
                setCorrectAnswer1(opacityStyleTrue)
                setWrongAnswer1(opacityStyleFalse)
            }
        } else {
            setCorrectAnswer1(opacityStyleFalse)
            setWrongAnswer1(opacityStyleTrue)
        }

        // Checks second choice
        if (choiceTwo === ansOne || choiceTwo === ansTwo || choiceTwo === ansThree) {
            if ((choiceTwo === "None" && none === 0) || (choiceTwo !== "None" && choiceOne === choiceTwo)) {
                setCorrectAnswer2(opacityStyleFalse)
                setWrongAnswer2(opacityStyleTrue)
            } else if (choiceTwo === "None") {
                none--
                setCorrectAnswer2(opacityStyleTrue)
                setWrongAnswer2(opacityStyleFalse)
            } else {
                setCorrectAnswer2(opacityStyleTrue)
                setWrongAnswer2(opacityStyleFalse)
            }
        } else {
            setCorrectAnswer2(opacityStyleFalse)
            setWrongAnswer2(opacityStyleTrue)
        }

        // Checks third choice
        if (choiceThree === ansOne || choiceThree === ansTwo || choiceThree === ansThree) {
            if ((choiceThree === "None" && none === 0) || (choiceThree !== "None" && (choiceOne === choiceThree || choiceTwo === choiceThree))) {
                setCorrectAnswer3(opacityStyleFalse)
                setWrongAnswer3(opacityStyleTrue)
            } else if (choiceThree === "None") {
                none--
                setCorrectAnswer3(opacityStyleTrue)
                setWrongAnswer3(opacityStyleFalse)
            } else {
                setCorrectAnswer3(opacityStyleTrue)
                setWrongAnswer3(opacityStyleFalse)
            }
        } else {
            setCorrectAnswer3(opacityStyleFalse)
            setWrongAnswer3(opacityStyleTrue)
        }
    }

    // Stores answers in athleteScreen
    const handleSubmit = () => {
       
    }

    const SpecialTestsBuilder = () => (
        <Row>
            <Col>
                <form>
                    <div className="form-group">
                        <SelectionDropdown tests={specialTests} value={1} />
                        <br />
                        <div style={imageStyle1}>
                            <div style={correctAnswer1} />
                        </div> &nbsp;&nbsp;&nbsp;
                        <div style={imageStyle2}>
                            <div style={wrongAnswer1} />
                        </div>
                        <br /><br />

                        <SelectionDropdown tests={specialTests} value={2} />
                        <br />
                        <div style={imageStyle1}>
                            <div style={correctAnswer2} />
                        </div> &nbsp;&nbsp;&nbsp;
                        <div style={imageStyle2}>
                            <div style={wrongAnswer2} />
                        </div>
                        <br /><br />

                        <SelectionDropdown tests={specialTests} value={3} />
                        <br />
                        <div style={imageStyle1}>
                            <div style={correctAnswer3} />
                        </div> &nbsp;&nbsp;&nbsp;
                        <div style={imageStyle2}>
                            <div style={wrongAnswer3} />
                        </div>
                        <br />
                    </div>

                    {/* Check Button. This should turn the Special Tests examples to a postive or negative result */}
                    <button type="button" className="btn btn-outline-success float-left my-3" onClick={checkAnswers}>Check results</button>
                    {/* Submit Button */}
                    <button className="btn btn-primary float-left mt-3" onClick={handleSubmit}>Submit</button>
                </form>
            </Col>
            <Col>
                <img src="https://cdn0.iconfinder.com/data/icons/sport-people-1/512/sport_-_sportsman_-_people_-_athlete-08-512.png" className="img-fluid h-100" alt="Athlete"></img>
            </Col>
        </Row>
    );

    return <SpecialTestsBuilder />
}

export default AthleteSpecialTests;