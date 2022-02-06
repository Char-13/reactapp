import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ImageMapper from 'react-img-mapper';
/**
 * Athlete Palpation Minigame
 * 
 * In this minigames, the player will hover over the athlete model. When hovering
 * over the model, the indicators on the left side will change depending on the level
 * of pain the user is feeling and indicate what kind of pain the athlete is
 * experiencing. Currently, the minigame allows for two areas of pain from the 
 * database, an "entry pain point" and a "max pain point"
 *    
 */

const AthletePalpation = (props) => {

    // Variables that need to be replaced with database info
    var xCoord = props.scenario[0]
    var yCoord = props.scenario[1]
    var maxPain = props.scenario[2]
    var painType = props.scenario[3]
    const img = "https://cdn0.iconfinder.com/data/icons/sport-people-1/512/sport_-_sportsman_-_people_-_athlete-08-512.png"
    var injuryMap = {
        name: "injury-map",
        areas: [
            { "name": maxPain, "shape": "circle", "coords": [xCoord, yCoord, 10] },
            { "name": 2, "shape": "circle", "coords": [xCoord, yCoord, 50] },
        ]
    }

    // UseStates that are used for the labeled areas on the left side of the screen
    const [painFound, setPainFound] = React.useState("None")
    const [painLevel, setPainLevel] = React.useState(0)

    // Function that updates pain & painLevel when entering an area
    const handleEnter = (area) => {
        setPainLevel(area.name)
        if (area.name == maxPain) { setPainFound(painType) }
    }

    // Function that updates pain & painLevel when leaving an area
    const handlLeave = (area) => {
        setPainFound("None")
        if (area.name == 2) { setPainLevel("0") }
    }

    // Stores answers in athleteScreen
    const handleSubmit = () => {
        
    }

    const PalpationsBuilder = () => (
        <Row>
            <Col>
                <form>
                    <div className="form-group">

                        <label>Pain Level</label>
                        {/* This button value should be updated once the user gets closer to the source of the injury */}
                        <button type="button" className="btn btn-info btn-lg btn-block">{painLevel}</button>

                        <label className="mt-2">Type of Pain</label>
                        {/* Once the user's cursor is directly over the condition, this button value should contain the condition */}
                        <button type="button" className="btn btn-info btn-lg btn-block">{painFound}</button>
                    </div>

                    <div className="form-group mt-5">
                        <div className="input-group mb-3">
                            {/* In the below input box, the player will input what they believe to be the correct injury based on the condition. */}
                            <input type="text" className="form-control" placeholder="Input"></input>
                            {/* It will then be spell-checked using the below button */}
                            {/*<button type="submit" className="btn btn-primary btn-block float-left mt-3">Check Spelling</button>*/}
                        </div>
                        <div className="form-check mt-5">
                            {/* Also, the player can make an assumption that the virtual athlete is in too much pain. (Based on documentation from the sponsor's)
                                    If that is the case, then this input box will be checked before submitting. */}
                            <input className="form-check-input" type="checkbox" value=""></input>
                            <label className="form-check-label">{'Too much pain?'}</label>

                        </div>
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
                    fillColor={"rgba(255, 0, 0, 0.00)"}
                    strokeColor={"rgba(255, 0, 0, 0.00)"}
                    onMouseEnter={area => handleEnter(area)}
                    onMouseLeave={area => handlLeave(area)}
                />
            </Col>
        </Row>
    );

    return <PalpationsBuilder />
}

export default AthletePalpation;