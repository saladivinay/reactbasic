import React from "react";
function Div(){
    var [div,setDiv]=React.useState(["Mumbai Indians",'Chennai super Kings'])
    return  <div className='box'>
        <h1>{div}</h1>
    </div>
}
export default Div;