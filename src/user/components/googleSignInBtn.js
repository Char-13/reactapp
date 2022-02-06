import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import axios from 'axios';

const CLIENT_ID = '137684248623-t73c4bv62fmu1q4hbh5v7idgnfndffjv.apps.googleusercontent.com';
var Name = '';
var email = '';
class GoogleSignInBtn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: false,
			accessToken: ''
		};

		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);

		this.handleLoginFailure = this.handleLoginFailure.bind(this);
		this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
	}

	login(response) {
		Name = response.profileObj.name;
		email = response.profileObj.email;
		var token = response.accessToken;
		var ProviderId = 'Google'
		console.log(Name);
		console.log(email);
		var getResult;

		axios.get('http://localhost:5000/players/find_byEmail/', {
			params: {
				Name,
				email
			}
		}).
		then(res => console.log(res.data));
			
		// if(getResult == null){

		// 	axios.post( 'http://localhost:5000/players/player_create/', {
		// 		body: {
		// 			Name,
		// 			email
		// 		}
		// 	}).then(res => console.log(res.data));
		// }
		// else{
		// 	console.log(getResult);
		// }

		if (response.accessToken) {
			this.setState(state => ({
				isLoggedIn: true,
				accessToken: response.accessToken
			}));
		}
	}

	logout(response) {
		this.setState(state => ({
			isLoggedIn: false,
			accessToken: ''
		}));
	}

	handleLoginFailure(response) {
		alert('Failed to log in')
	}

	handleLogoutFailure(response) {
		alert('Failed to log out')
	}

	render() {
		return (
			<div>
				{ this.state.isLoggedIn ?
					<GoogleLogout
						clientId={CLIENT_ID}
						buttonText='Logout'
						onLogoutSuccess={this.logout}
						onFailure={this.handleLogoutFailure}
						theme='dark'
					>
					</GoogleLogout> : <GoogleLogin
						clientId={CLIENT_ID}
						buttonText='Login'
						onSuccess={this.login}
						onFailure={this.handleLoginFailure}
						cookiePolicy={'single_host_origin'}
						responseType='code,token'
						theme='dark'
					/>
				}

			</div>
		)
	}
}
export {email, Name};
export default GoogleSignInBtn;