import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';

const columns = [
    { field: 'id', headerName: "ID", width: 130 },
    { field: 'name', headerName: "Name", width: 200 },
    { field: 'lastPlayed', headerName: "Last Played", width: 130 },
    { field: 'athleteStatus', headerName: 'Athletes', width: 300 }
]

var studentList;
//Sends HTTP GET request to backend to get the list of players from the
// database. It then logs the list in the console. 
axios.get('http://localhost:5000/players/').then(res => studentList = res.data);


class ManageStudent extends Component {

    //list to hold collection documents
    constructor(props) {
        super(props);

        var obj = [];

        for (var i = 0; i < studentList.length; i++) {

            obj.push({
                id: studentList[i].PID,
                name: studentList[i].PName,
                lastPlayed: studentList[i].LastPlay.substring(0, 10),
                athleteStatus: studentList[i].AthList.length
            });
        }

        this.state = {
            searchID: 1,
            searchTitle: '',
            obj
        };
    }

    handleID = (event) => {
        this.setState({ searchID: event.target.value });
    }

    handleName = (event) => {
        this.setState({ searchTitle: event.target.value });
    }

    handleSubmit = (event) => {
        alert('A name was submitted: ' + this.state.searchID);
        event.preventDefault();
    }

    dynamicSearch = () => {
        return this.state.obj.filter(player => player.name.toLowerCase().includes(this.state.searchTitle.toLowerCase())
            && player.id.toString().includes(this.state.searchID.toString()))
    }

    render() {
        return (
            <div>
                <div className="studentManageSearch">
                    <form onSubmit={this.handleSubmit}>
                        <h1>Manage: {this.state.searchID}{this.state.searchTitle}</h1>
                        <label>
                            ID:
                            <input type="text" name='searchID' onChange={this.handleID} />
                        </label>
                        <label>
                            Name:
                            <input type="text" name="searchTitle" onChange={this.handleName} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div style={{ height: 500, width: '100%' }}>
                    <DataGrid rows={this.dynamicSearch()} columns={columns} pageSize={5} />
                </div>
            </div>

        );
    }
}

export default ManageStudent;