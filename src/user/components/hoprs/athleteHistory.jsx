import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from '@mui/material/Button';
import axios from 'axios';

/**
 *  Athlete History Minigame
 *  
 *  A minigame that renders a story on screen with 3 buttons placed throughout the text in place
 *  of words. 
 *  
 *  The user will select these buttons based on which they think would be the cause of an injury.
 *  By default, all buttons will be red (false). If you click on one it will be set to blue (true).
 *  I decided on blue instead of green in case of color-blindness (if I had more time I would have 
 *  liked to work on improving more parts of the app for accessibility.)
 * 
 *  
 *                   ----------------TODO----------------
 *      - Integrate database information for injuries -- (~Line 28)
 *      - Implement "hint" functionality described in transfer document
 *      - Store user submitted information (true/false for buttons) -- (~Line 50)
 *      - Athlete art -- (~Line 71)
 *      - Implement better use of useState arrays in other minigames (Time issue)
 * */

const AthleteHistory = (props) => {

    // Placeholder information for a story from the database
    // Information needed is stored in > scenario > SData > History > HStory, HKeyword, HAnswer, HReveal
    // The parser later on uses KEY1, KEY2, KEY3 to place in the buttons for the answers
    var story = props.hstory
    var keys = props.hkeys
    var hints = ["the athlete fell", "the athlete's arm is swolen", "the athlete's head feels fine"]
    var realAnswers = [true, true, false];

    // Used to parse function and determine if a button has been pressed or not
    const modifiedText = story.replace(/ /g, " , ");
    const storyParts = modifiedText.split(",");
    const [selected, setSelected] = React.useState([...props.hanswers])

    // Code for returning the buttons used in the story
    const KeyButton = (btn) => {
        return <Button disableElevation variant="contained" color={selected[btn.id-1] ? "primary" : "error"} onClick={() => {
            handleClick(btn.id)
        }}>
            {btn.text}
        </Button>
    }

    // Changes color of button to blue/red
    const handleClick = (id) => {
        let newSelected = [...selected]
        newSelected[id-1] = !newSelected[id-1]
        setSelected(newSelected)
    }

    // Stores answers in athleteScreen
    const handleSubmit = () => {
        props.submitHistory([...selected])
    }

    // Parses out the story parts and replaces the KEY# strings with buttons containing the keywords
    var storyBuilder = storyParts.map(part => {
        return part.match(/KEY1/) ? <KeyButton text={keys[0]} id={1} /> :
            part.match(/KEY2/) ? <KeyButton text={keys[1]} id={2} /> :
                part.match(/KEY3/) ? <KeyButton text={keys[2]} id={3} /> :
                    part
    })

    // Final builder for the page
    const HistoryBuilder = () => (
        <Row>
            <Col>
                <div style={{ textAlign: "left" }}>
                    {storyBuilder}
                </div>

                {/* Submit Button*/}
                <button className="btn btn-primary float-left mt-3" onClick={handleSubmit}>Submit</button>
            </Col>
            <div>
                {/* Example Athlete model */}
                <img src="https://cdn0.iconfinder.com/data/icons/sport-people-1/512/sport_-_sportsman_-_people_-_athlete-08-512.png" className="img-fluid h-100" alt="Athlete"></img>
            </div>
        </Row>
        
    )

return <HistoryBuilder />
}

export default AthleteHistory;