import react from "react";
import Header from "./Header";
import Matter from "./matter";
import Display from "./diaplay";
import login from "./login";

function App() {
  function matterInIt(matters) {
    return (
      <Display
        key={matters.id}
        name={matters.name}
        place={matters.place}
        url={matters.image}
      />
    );
  }

  function head() {
    return <Header />;
  }
  return (
    <div className="container">
      <div className="hh">{head()}</div>
      <dl className="card">{Matter.map(matterInIt)}</dl>
    </div>
  );
}

export default App;
