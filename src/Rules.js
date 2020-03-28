import React from 'react';
import {Link} from "react-router-dom";


function Rules() {
    return (
        <div>
                <p>
                    Keep this page on top of your screen otherwise it is game over. <br />
                    Do not use any calculator, there is no room for cheaters. <br />
                    You only have three lives.
                </p>
                Back to <Link className="App-link" to="/">homepage</Link>
        </div>
    );
}

export default Rules;
