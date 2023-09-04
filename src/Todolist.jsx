import React from "react";
import './index.css';
function Todo(){

    var [arr,setArr]=React.useState([ {
        title:'clear bills',
        status:false
      },
      {
        title:'Moksha School',
        status:true
      },
      {
        title:'Manas Bus Fee',
        status:false
      },
      {
        title:'Gold Bill',
        status:false
      },
      {
        title:'Current Bill',
        status:true
      },])

      function abc(){
        var newtask=document.getElementById("i").value
        setArr([...arr,{ title:newtask}])
      }
      function abd(i){
        var x=[...arr]
            x[i].status=!x[i].status;
            setArr([...arr])
      }
      function acd(i){
        var x=[...arr]
        x[i].status=!x[i].status;
        setArr([...arr])
      }

return(

  <div>
    <input type="text" id="i" />
    <button onClick={abc}>add task</button>

    {
      arr.map(function(s,i){
        return(
          <div className="todo">
            <ul >
            <li style={s.status===true ?{backgroundColor:'red'}:{backgroundColor:'green'}}>{s.title} <button onClick={()=>{abd(i)}}>done</button><button onClick={()=>{abd(i)}}>undo</button></li>
            
            </ul>
            </div>
        )


      })
    }
  </div>
)

}
export default Todo;