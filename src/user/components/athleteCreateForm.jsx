import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
class AthleteCreateForm extends Component {
    render() {
        return (
            <>
                <Col>
                    <form>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" >Name</span>
                            </div>
                            <input type="text" id="name" className="form-control modifiedInfo" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Gender</span>
                            </div>
                            <select id="gender" className="form-control">
                                <option defaultValue>Choose...</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Race</span>
                            </div>
                            <select id="race" className="form-control">
                                <option defaultValue>Choose...</option>
                                <option>American Indian or Alaska Native</option>
                                <option>Asian</option>
                                <option>Black or African American</option>
                                <option>Hispanic or Latino</option>
                                <option>Native Hawaiian or Other Pacific Islander</option>
                                <option>White</option>
                            </select>
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Skin Color</span>
                            </div>
                            <select id="skinColor" className="form-control">
                                <option defaultValue>Choose...</option>
                                <option>Russet</option>
                                <option>Peru</option>
                                <option>Fawn</option>
                                <option>Mellow Apricot</option>
                                <option>Navajo White</option>
                                <option>Pale</option>
                            </select>
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Shirt Color</span>
                            </div>
                            <select id="shirtColor" className="form-control">
                                <option defaultValue>Choose...</option>
                                <option>Blue</option>
                                <option>Red</option>
                                <option>Black</option>
                                <option>Yellow</option>
                                <option>Purple</option>
                                <option>White</option>
                            </select>
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Pants Color</span>
                            </div>
                            <select id="pantColor" className="form-control">
                                <option defaultValue>Choose...</option>
                                <option>Blue</option>
                                <option>Red</option>
                                <option>Black</option>
                                <option>Yellow</option>
                                <option>Purple</option>
                                <option>White</option>
                            </select>
                        </div>
                        <input type="submit" className="btn btn-primary" id="submitDetails" name="submitDetails" value="Submit"></input>
                    </form>
                </Col>


                <Col>
                    <img src="https://cdn0.iconfinder.com/data/icons/sport-people-1/512/sport_-_sportsman_-_people_-_athlete-08-512.png" className="img-fluid" alt="Athlete"></img>
                </Col>


            </>


        );
    }
}

export default AthleteCreateForm;