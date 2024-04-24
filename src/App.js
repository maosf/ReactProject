import logo from './logo.svg';
import { useState,useEffect } from 'react';
import './App.css';
import './FanCard';
import FanCard from './FanCard';
 
const Rooms={
  1:'Bas office',
  22:'Manager office',
  275:'President office',
  13:'room005A',
  14:'room005B'

}
function App() {
  const [temps, setTemps]= useState("...loading ");
  // const getTemps=fetch('localhost:3001/api');
  
  useEffect(()=> {
    fetch ('http://10.224.32.129:3001/api')
      .then((respone)=>respone.json())
      .then((data)=>{ 
        setTemps(data);
        
        console.log("data is" ,data);
        
       } )
     .catch((error)=>console.log(error))
    
    
  },[]);
 
  return (
  <div className="App">
    <h3>temp in the room</h3>
    <ul >
   { 
     temps && Object.entries(temps).map(([key,value]) => (
        
      //console.log(key);
      <li key={key}>{Rooms[key]} temp is : <span style={{color: value < 21 ? 'blue' : value <24 ? 'rgb(3, 223, 3)': 'yellow'}}> {value}</span> C</li>
     ))
    } 
    </ul>
  </div>
  );
}

export default App;
