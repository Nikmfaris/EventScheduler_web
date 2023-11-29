import React, { useState } from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
function App() {
  const [date, setDate] = useState(new Date())
 
 
 return (
  <div className="app">
    <h1 className="header">Select a Date using React Calendar</h1>
    <div className="calendar-container">
      <Calendar onChange={setDate} value={date}/>
    </div>
    <div className="text-center">
       Your selected date: {date.toDateString()}
    </div>
  </div>
   )
 
}export default App;