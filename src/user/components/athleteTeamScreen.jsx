import React, { Component } from 'react';
import axios from 'axios';


class AthleteTeamScreen extends Component {
    render() {
        return (
                <form>
                    <div className="form-group">
                        {/* Athlete example GREY: The athlete is inactive due to suspension.*/}
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-secondary"></span>
                            </div>
                            <input type="text" className="form-control bg-dark text-light" defaultValue="James (3 weeks)" disabled></input>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button">X</button>
                            </div>


                        </div>

                        {/* Athlete examples GREEN: The athlete is currently active */}
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-success"></span>
                            </div>
                            <input type="text" className="form-control bg-dark text-light" defaultValue="Mary (Active)" disabled></input>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button">X</button>
                            </div>
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-success"></span>
                            </div>
                            <input type="text" className="form-control bg-dark text-light" defaultValue="Dante (Active)" disabled></input>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button">X</button>
                            </div>
                        </div>


                        {/* Athlete examples RED: The athlete is injured and is waiting for aid. */}
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-danger"></span>
                            </div>
                            <input type="text" className="form-control bg-dark text-light" defaultValue="Jeremy (Injured)" disabled></input>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button">X</button>
                            </div>
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-danger"></span>
                            </div>
                            <input type="text" className="form-control bg-dark text-light" defaultValue="Hannah (Injured)" disabled></input>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button">X</button>
                            </div>
                        </div>

                        

                        {/* Add athlete button */}
                        <div className="input-group mb-3">
                        <button type="button" className="btn btn-primary btn-lg btn-block">Add new athlete</button>
                        </div>
                    </div>
                </form>
            );
    }
}

export default AthleteTeamScreen;