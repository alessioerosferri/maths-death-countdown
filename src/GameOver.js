import React from 'react';
import {Link} from "react-router-dom";


function GameOver() {
    return (
        <div>
                <p>
                    Game over. You can do better than that.
                </p>
                Back to <Link className="App-link" to="/">homepage</Link>
        </div>
    );
}

export default GameOver;
