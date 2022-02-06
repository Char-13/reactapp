import React, { Component } from 'react';

class AthleteReferencesScreen extends Component {
    render() {
        return (
            <>
                <div className="card-deck">

                    <div className="card text-left">
                        <div className="card-body">
                            <h5 className="card-title">How to treat a broken leg</h5>
                            <p className="card-text">Wear any support device (splint, sling, or brace, for example) until the doctor sees you for follow-up. Keep your splint or cast clean and dry. Apply ice to the injured area for 20-30 minutes 4-5 times a day. Keep your arm elevated above the heart as much as possible to decrease swelling.</p>
                            <a href="#" className="btn btn-primary">Edit</a>
                            <a href="#" className="btn btn-danger">Delete</a>
                        </div>
                    </div>

                    <div className="card text-left">
                        <div className="card-body">
                            <h5 className="card-title">What to do for a shoulder injury</h5>
                            <p className="card-text">Try to keep from making the injury worse. Put an ice pack wrapped in a pillowcase or towel on your leg to ease swelling. If possible, keep your leg raised with pillows or cushions to reduce swelling. Often with a broken leg, surgery is necessary.</p>
                            <a href="#" className="btn btn-primary">Edit</a>
                            <a href="#" className="btn btn-danger">Delete</a>
                        </div>
                    </div>


                </div>
            </>
        );
    }
}

export default AthleteReferencesScreen;