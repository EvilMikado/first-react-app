import React from "react";

function App() {
  let [count, setCount] = React.useState(0)
  const counter = () =>{
    setCount(++count)
  }
  return (

    <div className="App">
      <p onClick={counter}>Counts: {count}</p>
    </div>
  );
}

export default App;
