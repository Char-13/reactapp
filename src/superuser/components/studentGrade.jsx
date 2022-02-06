import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';

const columns = [
  {field: 'id', headerName: "ID", width: 130},
  {field: 'name', headerName: "Name", width: 200},
  {field: 'lastPlayed', headerName: "Last Played", width: 130},
  {field: 'athleteStatus', headerName: 'Athletes', width: 300}
]
var studentList;
var athleteList;
var gameData;
//Sends HTTP GET request to backend to get the list of players from the
// database. It then logs the list in the console. 
axios.get('http://localhost:5000/players/').then(res => studentList = res.data);
axios.get('http://localhost:5000/GameData/').then(res => gameData = res.data);

class ManageStudent extends Component {

  //list to hold collection documents
  constructor(props) {
    super(props);

    var obj = [];

    for(var i = 0; i < studentList.length; i++){

      obj.push({
        id: studentList[i].PID,
        name: studentList[i].PName,
        lastPlayed: studentList[i].LastPlay.substring(0, 10),
        athleteStatus: studentList[i].AthList.length
      });
    }

    this.state = {searchID: 0,
                  searchTitle: '',
                  obj
                };
  }

  

  handleID = (event) => {
        this.setState({ searchID: event.target.value })
    }

    handleName = (event) => {
        this.setState({ searchTitle: event.target.value });
    }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.searchID);
    event.preventDefault();
  }

  // Force Injury event.
  // Pressing the submit button in the form
  // will retrieve the GameData list for the
  // chosen injury and body location, then
  // pick a random injury and apply it to every
  // student in the players list. 
  handleSubmitFI = (event) => {

    var  injuryList;
    var currAthlete;
    
    if(this.state.injurytype === "Dislocation"){

      injuryList = gameData[1].DislocationList;

    }
    else if(this.state.injurytype === "Sprain"){
      injuryList = gameData[2].SpainList;

    }
    else if(this.state.injurytype === "Strain"){
      injuryList = gameData[3].StrainList;

    }
    else if(this.state.injurytype === "Fracture"){
      injuryList = gameData[4].FractureList;

    }
    else if(this.state.injurytype === "Itis"){
      injuryList = gameData[5].ItisList;

    }
    else{
      alert("Please select an injury type and body location");
    }

    if(this.state.locationtype === "Leg"){
      injuryList = injuryList.Leg;
    }
    else if(this.state.locationtype === "Arm"){
        injuryList = injuryList.Arm;
    }
    else if(this.state.locationtype === "Torso"){
        injuryList = injuryList.Torso;
    }
    else if(this.state.locationtype === "Head"){
        injuryList = injuryList.Head;
    }
    else if(this.state.locationtype === "Hand"){
        injuryList = injuryList.Hand;
    }
    else if(this.state.locationtype === "foot"){
        injuryList = injuryList.Foot;
    }
    else{
      alert("Please select an injury type and body location");
    }

    //loop through each student
    for(var i = 0; i < studentList.length; i++){

      var athList = studentList[i].AthList;
        //loop through each athlete in the student document
        for(var j = 0; j < athList.length; j++){

          axios.get('http://localhost:5000/athlete/force-injury/', {
            params: {
              AID: athList[j],
              Scen: injuryList[Math.floor(Math.random() * injuryList.length)]
            }
          });
        }

      }

      event.preventDefault();
  }

  handleChangeFI = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]:val});
  }

   dynamicSearch = () => {
        return this.state.obj.filter(player => player.name.toLowerCase().includes(this.state.searchTitle.toLowerCase())
            && player.id.toString().includes(this.state.searchID.toString()))
    }

  render() { 
    return (  
      <div>
        <div className="scenarioManageSearch">
          <form onSubmit={this.handleSubmit}>
            <h1>Manage: {this.state.searchID}{this.state.searchTitle}</h1>
            <label>
              ID:
              <input type="text" name='searchID' onChange={this.handleID}/>
            </label> 
            <label>
              Name:
              <input type="text" name="searchTitle" onChange={this.handleName}/>
            </label>
            <input type="submit" value="Submit"/>
          </form>
        </div>
        <div style={{height: 500, width: '100%'}}>
          <DataGrid rows={this.dynamicSearch()} columns={columns} pageSize={5} checkBoxSelection />
        </div>

        <form onSubmit={this.handleSubmitFI}>
          <h1 className="display-8">Force Injury</h1>
          <div className="jumbotron jumbotron-fluid">
            
            <div className="form-group col-md-6">
              <label htmlFor="injuryInput">Injury Type</label>
              <select className="form-control" name='injurytype' onChange={this.handleChangeFI}>
                <option>Select A Injury Type..</option>
                <option>Dislocation</option>
                <option>Sprain</option>
                <option>Strain</option>
                <option>Fracture</option>
                <option>Itis</option>
              </select>

            </div>

            <div className="form-group col-md-6">
              <label htmlFor="locationType">Injury Location</label>
              <select className="form-control" name='locationtype' onChange={this.handleChangeFI}>
                <option>Select A Injury Location..</option>
                <option>Leg</option>
                <option>Arm</option>
                <option>Torso</option>
                <option>Head</option>
                <option>Hand</option>
                <option>Foot</option>
              </select>

            </div>
            
            <div className="form-group col-md-6">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>

     );
  }
}
 
export default ManageStudent;