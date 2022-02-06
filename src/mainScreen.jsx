import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
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

    const centering = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)'
    }

    return (
        <div style={centering}>
            <button type="button" className="btn btn-danger btn-lg float-left m-2" onClick={handleAdmin}>Admin</button>
            <button type="button" className="btn btn-danger btn-lg float-left m-2" onClick={handleStudent}>User</button>
        </div>
    )
}

export default MainScreen;