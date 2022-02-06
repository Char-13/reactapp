import React, { Component } from 'react';

class AthleteTreatmentScreen extends Component {
    render() {
        return (
                <>
                    <label className="text-left">Police: protect will determine if and how the athlete should protect themselves during their injury.</label>
                    <div className="input-group">
                        <textarea className="form-control" aria-label="With textarea"></textarea>
                    </div>

                    <label className="text-left">Optimal Load: tells the athlete how much load they should put on the injury.</label>
                    <div className="input-group">
                        <textarea className="form-control" aria-label="With textarea"></textarea>
                    </div>

                    <label className="text-left">ICE: determines if this injury is an emergency and the athlete requires immediate attention.</label>
                    <div className="input-group">
                        <textarea className="form-control" aria-label="With textarea"></textarea>
                    </div>

                    <label className="text-left">Compress: tells the athlete if they should use a cold or hot compress and how often should they do so</label>
                    <div className="input-group">
                        <textarea className="form-control" aria-label="With textarea"></textarea>
                    </div>

                    <label className="text-left">Elevate: advises the athlete if they should elevate their injury and for how long.</label>
                    <div className="input-group">
                        <textarea className="form-control" aria-label="With textarea"></textarea>
                    </div>


                    <button type="submit" className="btn btn-primary float-left mt-3">Submit</button>
                </>
        );
    }
}

export default AthleteTreatmentScreen;