import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';
function App() {
  const [date, setDate] = useState(new Date())
 
 
 return (
  <div className="container">
    <h1 className="header">IIUM event Scheduler
    </h1>
    <div className="calendar-container">
      <Calendar onChange={setDate} value={date}/>
    </div>
    <div className="text-center">
       Your selected date: {date.toDateString()}
    </div>
    <h1>test</h1>
  </div>
   )
 
}export default App;