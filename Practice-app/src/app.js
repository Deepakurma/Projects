import React from "react";
import Input from "./Formcomponents/input";

const App = (props) => {
  return (
    <div className="conw">
      <form className="formcon"> 
        <Input
          id="tittle"
          element="input"
          type="text"
          errortext="Please enter valid tittle."
        />
        <Input
          type="textarea"
          id="description"
          element="textarea"
          errortext="Please enter valid description."
        />
      </form>
    </div>
  );
};

export default App;
