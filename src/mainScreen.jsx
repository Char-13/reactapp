import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import GVSU_logo from './GVSU_logo.jpg';

/*
 * Work In Progress Home Screen
 * 
 * Currently this page works as a home screen that leads to the admin page or student page.
 * We will replace this with a login screen that redirects users based on the login to either the admin view or student view
 **/
 


const MainScreen = () => {
    const history = useHistory();
    const handleAdmin = () => history.push('/admin');
    const handleStudent = () => history.push('/student');

    const loginText = {
        position: 'fixed',
        top: '-300%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        textStyle: {
            color: '#3399FF',
            fontWeight: 'bold',
            fontSize: 50
        }
    }

    const buttons = {
        position: 'fixed',
        top: '80%',
        transform: 'translate(0%,25%)',
        buttonStyle: {
            backgroundColor: "#3399FF",
            borderColor: "#3399FF"
        }
    }


    return (
    <body>		
            <div class="top-img">
                <div class="container">
                    <div class="navv">
                        <a href=".">Home</a>
                        <a href="student">Student</a>
                        <a href="admin">Admin</a> 
                        
              

             <div style={buttons}>
            {/* Here is where we display the GVSU logo in the bottom righthand corner */}
          
                <img alt="GVSU_logo" src={GVSU_logo} height="100" weight="100" />
                
        
                     </div>
                     
                     
                </div>
                <div class="container">

                <button type="button" style={buttons.buttonStyle} className="btn btn-danger btn-lg float-left m-2" onClick={handleAdmin}>Login</button>
            <button type="button" style={buttons.buttonStyle} className="btn btn-danger btn-lg float-left m-2" onClick={handleStudent}>Logout</button>
            
             </div>
            </div>
            
            

        </div>
            </body>
    )
    
    }

export default MainScreen;
