import React, { useCallback, useState } from "react";

function App(){

    const initial = Array(6).fill(null);
    const [game, setGame] = useState(initial);
    const[winner, setwinner] = useState(null);


    const renderButtons = () => {
        return game.map((value, index) => {
            <button key={index}>{value}</button>
        });
    };
     




    return(
        <div className="game">
        <div className="set">{renderButtons()}</div>



        </div>
    );
};

export default App;