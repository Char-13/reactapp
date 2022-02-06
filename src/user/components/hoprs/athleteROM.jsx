import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ImageMapper from 'react-img-mapper';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
/**
 * Range of Motion Minigame
 * 
 * The player will hover over the player model and scan for red circles in per-determined areas (shoulders, knees, and ankles). Upon
 * clicking this red circle, they will see a short description of the general look and range of motion for that area.
 * The player will then be able to select which body part is injured using the multiple choice selection next to the avatar.
 * Currently the avatar is a placeholder, several animated GIFs need to be made to help visualize the test.
 * 
 *                   -TODO-
 *      - Integrate animations based on injury severity
 *      - Store user-submitted choices
 *      - creating a new animated avatar
 *      - General UI Improvements
 *      - Completing the submit button (currently returns the user to the main page)
 * */

const AthleteROM = (props) => {
    const [injuryFound, setInjuryFound] = React.useState("none");
    const [HealthyFound, setHealthyFound] = React.useState("none");
    var xCoord = 280.0
    var yCoord = 170.0
    var injurySize = 50
    var injuryDesc = "The Athlete is experiencing pain and a reduced range of motion in the selected area"
    var healthyDesc = "The Athlete is not experiencing pain and has full range of motion in the selected area"
    var img = "https://cdn0.iconfinder.com/data/icons/sport-people-1/512/sport_-_sportsman_-_people_-_athlete-08-512.png"
    var injuryMap = {
        name: "injury-map",
        areas: [
            { name: RShoulder, shape: "circle", coords: [xCoord+20, yCoord, injurySize], injured: true },
            { name: LShoulder, shape: "circle", coords: [xCoord-90, yCoord, injurySize], injured: false},
            { name: RKnee, shape: "circle", coords: [xCoord+60, yCoord+200, injurySize], injured: true},
            { name: LKnee, shape: "circle", coords: [xCoord-120, yCoord+200, injurySize], injured: false},
            { name: RAnkle, shape: "circle", coords: [xCoord+60, yCoord+300, injurySize], injured: false},
            { name: LAnkle, shape: "circle", coords: [xCoord-120, yCoord+300, injurySize], injured: false}
        ]
    }

    //Variables used for each body part
    var RShoulder = "Right Shoulder"
    var LShoulder = "Left Shoulder"
    var RKnee = "Right Knee"
    var LKnee = "Left Knee"
    var RAnkle = "Right Ankle"
    var LAnkle = "Left Ankle"

    const handleInjury = (areas) => {
        if (areas.injured){
        setInjuryFound("block");
        setHealthyFound("none");
        }else{
        setHealthyFound("block");
        setInjuryFound("none");
        }
    }

    // Stores answers in athleteScreen
    const handleSubmit = () => {
        
    }

    const ROMBuilder = () => (
        <Row>
            <Col>   
                <div style={{ display: injuryFound }}>{injuryDesc}</div>
                <div style={{ display: HealthyFound }}>{healthyDesc}</div>
                <form>
                    {/* The user can select which body part has restricted range of motion */}
                    <div className="form-group" style={{ textAlign: "left" }}>
                        <br></br>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label={RShoulder} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}/>
                            <FormControlLabel control={<Checkbox />} label={LShoulder} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}/>
                            <FormControlLabel control={<Checkbox />} label={RKnee} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />
                            <FormControlLabel control={<Checkbox />} label={LKnee} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}/>
                            <FormControlLabel control={<Checkbox />} label={RAnkle} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />
                            <FormControlLabel control={<Checkbox />} label={LAnkle} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}/>
                        </FormGroup>
                    </div>
                    <div className="form-group">
                        {/* Submit Button */}
                        <button className="btn btn-primary float-left mt-3" onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </Col>
            <Col>
                <ImageMapper
                    src={img}
                    map={injuryMap}
                    fillColor={"rgba(255, 0, 0, 0.70)"}
                    onClick={areas => handleInjury(areas)}
                />
            </Col>
        </Row>
    );
    return <ROMBuilder />
}

export default AthleteROM;
