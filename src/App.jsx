import React from "react";
import './mybox.css';
function App() {
  var [count,setCount]=React.useState(0)
  return (
    <div className="mybox">
      <h1>vinay</h1>
      <p>count:{count}</p>
      <button onClick={()=>{setCount(count+1)}}>increment</button>
      <button onClick={()=>{setCount(count-1)}}>decrement</button>

    </div>
    

  );
}

export default App;