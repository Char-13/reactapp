import React, { Component } from 'react';

class Header extends Component {
    state = { 
        name: "Meghan Fox"
     }
    render() { 
        return (  
            <div className="header">
                <h1>GVSU Athletic Training Team</h1>
                <h1>{this.state.name}</h1>
                <button>Log Out</button>
            </div>
                );
    }
}
 
export default Header;