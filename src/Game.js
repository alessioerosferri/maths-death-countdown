import React, { useState, useEffect } from 'react';
import GameOver from "./GameOver";

function Game() {
    const [lives, setLives] = useState(3);
    // Similar to componentDidMount and componentDidUpdate:
    function visibilityHandler(){
        if(document.visibilityState === "hidden"){
            document.removeEventListener("visibilitychange", visibilityHandler);
            setLives(0);
        }
    }
    useEffect(() => {
        document.addEventListener("visibilitychange", visibilityHandler);
    }, []);
    if (lives){
        return (
            <div>
                You have {lives} lives left.
            </div>
        );
    } else {
        return (
            <GameOver />
        )
    }

}

export default Game;
