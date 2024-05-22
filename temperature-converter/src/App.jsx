import React from "react";
import Header from "./Header";
import Module from "./Module";

function App(){


// ---------------------------------------------------------------------------------------------------------------------------------
    return (
        <div className="container">
           <div className="header-container">
            <Header />
           </div>
           <div className="module-container">
             <Module />
           </div>
           
        </div>
    );
}

export default App;