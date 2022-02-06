import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class AthleteNavBar extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark" className="my-2" >
                    <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Grand_Valley_State_Lakers_logo.svg/1200px-Grand_Valley_State_Lakers_logo.svg.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{'Whats Wrong With the Lakers?'}
                    
                    </Navbar.Brand>
                </Navbar>
            </>
        );
    }
}

export default AthleteNavBar;