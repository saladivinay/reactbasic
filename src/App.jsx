import logo from './logo.svg';
import './mybox.css';
import Todolist from './Todolist'

function App() {
  return (
    <div className='box'>
    <h1>IPL </h1>
    <Todolist ar={['Rohit','kishan','surya','bhumra']} title={"Mumbai Indians"}></Todolist>
    <Todolist ar={['MS.dhoni','Rayudu','surash raina','Jadeja']} title={"Chennai Super Kings"}></Todolist>
    
    </div>
  );
}

export default App;
