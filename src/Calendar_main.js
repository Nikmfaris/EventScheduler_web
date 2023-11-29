import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar_main.css';
import { BrowserRouter as Router,Route,Routes,useNavigate } from 'react-router-dom';




function Calendar_main() {

  function MyComponent() {
    const navigate = useNavigate();
  
    const handleButtonClick = () => {
      navigate('/Admin'); 
    };
  
    return (
      <div>
        <button className="butnext"onClick={handleButtonClick}>Go to About Page</button>
      </div>
    );
}
  const [date, setDate] = useState(new Date())
 
 
 return (
  


  <div className="container">
    
    <h1 className="header">IIUM event Scheduler</h1>
    <div className="calendar-container">
      <Calendar onChange={setDate} value={date}/>
    </div>
    <div className="text-center">
       Your selected date: {date.toDateString()}
       
    </div>
    
   
    
  </div>
   )
 
}
export default Calendar_main;