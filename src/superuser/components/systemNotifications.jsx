import React, { Component } from 'react';

class NotificationSystem extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>This is the notification system.</h1>
                <h2>Version 0.0.5</h2>
                <li>This is the most recent update.</li>
                <li>This is the second most recent update.</li>
                <li>This is the third most recent update.</li>
                <h2>New Scenario</h2>
                <li>10 00 00 00: Broken Arm made by Meghan Fox on 10/14/2020.</li>
                <li>10 00 00 01: Broken Leg made by Meghan Fox on 10/15/2020.</li>
                <li>10 00 00 02: Sprain Leg from Football made by Eliza MacDonald on 10/15/2020.</li>
                <h2>Edit Scenario</h2>
                <li>10 00 00 20: Strained Shoulder by Meghan Fox was edited by herself. Reason: Cleaning up grammer.</li>
                <li>10 00 00 30: Stubbed Toe by Meghan Fox was edited by Eliza MacDonald. Reason: Changing point of injury.</li>
                <h2>Deleted Scenario</h2>
                <li>10 00 00 31: Upset Stomach by Eliza MacDonald was deleted by herself. Reason: No scolastic merit.</li>
                <li>10 00 40 00: Brokn Finger by Eliza MacDonald was deleted by Meghan Fox. Reason: Duplicate and better version exists.</li>
            </div>
             );
    }
}
 
export default NotificationSystem;