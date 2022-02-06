import React, { Component } from 'react';
import NewScenario from './components/scenarioNew';
import ManScenario from './components/scenarioManage';
import RevScenario from './components/scenarioReview';
import TestScenario from './components/scenarioTest';
import GradeStud from './components/studentGrade';
import ManStud from './components/studentManage';
import SysNot from './components/systemNotifications';
import SysSet from './components/systemSettings';  
import Header from './components/header';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {mode: "snot"};

        this.handleNew = this.handleNew.bind(this);
        this.handleMan = this.handleMan.bind(this);
        this.handleRev = this.handleRev.bind(this);
        this.handleTest = this.handleTest.bind(this);

        this.handleSman = this.handleSman.bind(this);
        this.handleGrd = this.handleGrd.bind(this);

        this.handleSnot = this.handleSnot.bind(this);
        this.handleSet = this.handleSet.bind(this);
    }

    handleNew(){this.setState({mode: 'new'});}
    handleMan(){this.setState({mode: 'man'});}
    handleRev(){this.setState({mode: 'rev'});}
    handleTest(){this.setState({mode: 'test'});}

    handleSman(){this.setState({mode: 'sman'});}
    handleGrd(){this.setState({mode: 'grd'});}

    handleSnot(){this.setState({mode: 'snot'});}
    handleSet(){this.setState({mode: 'set'});}


    render() {

        const renderStatus = () => {
            let com = '';
            switch(this.state.mode){
                case 'new':
                    com = <NewScenario/>
                    break;
                case "man":
                    com = <ManScenario/>
                    break;
                case "rev":
                    com = <RevScenario/>
                    break;
                case 'test':
                    com = <TestScenario/>
                    break;
                case "sman":
                    com = <ManStud/>
                    break;
                case "grd":
                    com = <GradeStud/>
                    break;
                case "snot":
                    com = <SysNot/>
                    break;
                case "set":
                    com = <SysSet/>
                    break;
                default:
                    com = <SysNot/>
                    break;
            }
            return com;
        }

        return (
            <div>
                <Header />
                <div className="main">
                    <div className="mainmenu">
                        <h1 >Scenario</h1>
                        <button onClick={this.handleNew}>New</button>
                        <button onClick={this.handleMan}>Manage</button>
                        <button onClick={this.handleRev}>Review</button>
                        <button onClick={this.handleTest}>Test</button>
                        <h1 >Students</h1>
                        <button onClick={this.handleGrd}>Interact</button>
                        <button onClick={this.handleSman}>Manage</button>
                        <h1>System</h1>
                        <button onClick={this.handleSnot}>Notifications</button>
                        <button onClick={this.handleSet}>Settings</button>
                    </div>
                    <div className="mainscreen">
                        {renderStatus()}
                    </div>
                </div>
            </div>);
    }
}
 
export default Main;