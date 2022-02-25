import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';
import GVSU_logo from './GVSU_logo.jpg';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import { useState } from 'react';
import { useFormControlUnstyled } from '@mui/material';

/*
 * Work In Progress Home Screen
 * 
 * Currently this page works as a home screen that leads to the admin page or student page.
 * We will replace this with a login screen that redirects users based on the login to either the admin view or student view
 **/

const MainScreen  = () =>  {
    const history = useHistory();
    const handleAdmin = () => history.push('/admin');
    const handleStudent = () => history.push('/student');
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");

    const textStyle = {
        width: "400px",
        height: "20px"
    };

    // const handleSubmit = async e =>{

    // };

    https://www.freecodecamp.org/news/how-to-persist-a-logged-in-user-in-react/
    //finish

    return (
        <>
            {/* Here is where we display the top banner */}
            <div class="rectangle"></div>

            {/* Here is where we display the GVSU logo in the bottom righthand corner */}
            <div class="img">
                <img src={GVSU_logo} alt="GVSU_Logo" width="244" height="72" />
            </div>

            {/* Here is where we display the app name */}
            <div class="header2">
                <h1>
                    What's Wrong with Louie?
                </h1>
            </div> 

            {/* Username text box*/}
            <div class="textBox">
                <div>
                    <input type="text" id="uName" name="uName" style={textStyle} placeholder="Username" /> <br /> <br />
                </div>
                <div>
                    <input type="text" id="pWord" name="pWord" style={textStyle} placeholder="Password" /> <br /> <br />
                </div>
            </div>

            {/* Login Button */}
            <div class="button">
                <button type="submit" form="loginForm" value="Login">
                    Login
                </button>
            </div>

            <div>
                <div class="button">
                    <button type="submit" form="AdminForm" value="Admin" onClick={handleAdmin}>
                        Admin
                    </button>
                </div>

                <div class="button">
                    <button type="submit" form="UserForm" value="User" onClick={handleStudent}>
                        User
                    </button>
                </div>
            </div>

            {/* Bottom Banner */}
            <div class= "rectangle2"> </div>
        </>
    )
};

export default MainScreen;
