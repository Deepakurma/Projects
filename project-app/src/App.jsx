import React, { useState } from "react";

function App() {
  const [Login, setLogin] = useState(null);
  const [mat, setMat] = useState(null);

  function handleLogin() {
    setLogin(true);
    setMat(true)
  }

  function handleSign() {
    setLogin(false);
    setMat(false)
  }

  return (
    <div className="set">
     <h1>Login page</h1>
      {Login === null ? (
        <div className="ls">
          <button type="submit" className="submit" onClick={handleLogin}>
            login
          </button>
          <p>Or</p>
          <button type="button" className="sign-up" onClick={handleSign}>
            Sign-up
          </button>
        </div>
      ) : Login === true ? (
        <div className="login">
          <input type="text" placeholder="username" autofocus/>
          <input type="password" placeholder="password" />
          <button type="submit" className="submit">
            submit
          </button>
        </div>
      ) : (
        <div className="login">
          <input type="text" placeholder="firstname" autofocus/>
          <input type="text" placeholder="lastname" />
          <input type="password" placeholder="password" />
          <button type="submit" className="submit">
            submit
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

