import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ImageMapper from 'react-img-mapper';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
/**
 * Athlete Observation Minigame
 * 
 * The player will hover over the player model and scan for red circles. Upon
 * clicking this red circle, they will see an image appear on the left side of
 * the screen detailing the observation. The player will then be able to select
 * the injury based on the checkboxes below the image.
 * 
 *                   ----------------TODO----------------
 *      - Integrate database information for the injuries
 *      - Store user-submitted choices
 *      - Fix stuttering issue (onClick for the image makes the screen stutter)
 *      - General UI Improvements
 * */

const AthleteObservation = (props) => {
    const [injuryFound, setInjuryFound] = React.useState("none");

    //Variables gotten from the database scenario > SData > Observation
    var xCoord = props.scenario[0]
    var yCoord = props.scenario[1]
    var injurySize = 50
    //https://www.epainassist.com/images/Article-Images/what-shoulder-joint-bruises.jpg
    var injuryDesc = props.scenario[3]
    var img = props.scenario[2]
    var injuryMap = {
        name: "injury-map",
        areas: [
            { name: optionOne, shape: "circle", coords: [xCoord, yCoord, injurySize] }
        ]
    }

    //Potentially add a field for an array of possible answers in the database?
    //Currently only stores an array of 2 *actual* answers
    var optionOne = "Bruised Shoulder"
    var optionTwo = "Broken Arm"
    var optionThree = "Headache"
    var optionFour = "Bruised Knee"

    // Stores answers in athleteScreen
    const handleSubmit = () => {
       
    }

    const handleInjury = () => {
        setInjuryFound("block");
    }

    const ObservationBuiler = () => (
        <Row>
            <Col>
                <div style={{ display: injuryFound }}>{injuryDesc}</div>
                <form>
                    {/* Here the player would select the injuries that they found */}
                    <div className="form-group" style={{ textAlign: "left" }}>
                        <br></br>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label={optionOne} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}/>
                            <FormControlLabel control={<Checkbox />} label={optionTwo} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}/>
                            <FormControlLabel control={<Checkbox />} label={optionThree} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />
                            <FormControlLabel control={<Checkbox />} label={optionFour} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}/>
                        </FormGroup>
                    </div>
                        {/* Submit Button */}
                        <button className="btn btn-primary float-left mt-3" onClick={handleSubmit}>Submit</button>
                </form>
            </Col>
            <Col>
                {/* Example image of a shoulder joint bruise + mapped injury location */}
                <ImageMapper
                    src={img}
                    map={injuryMap}
                    fillColor={"rgba(255, 0, 0, 0.70)"}
                    onClick={handleInjury}
                />
            </Col>
        </Row>
    );

    return <ObservationBuiler />
}

export default AthleteObservation;