
import './Admin_update';
import './Calendar_main';
import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Adminupdate from'./Admin_update';
import Calendar_main from  './Calendar_main'
import Main from './Main'





function App() {

  
  return(
    
         <Router>
          <Routes>
          <Route path="/EventScheduler_web" element={<Calendar_main/>}/>
            <Route path="/admin" element={<Adminupdate/>}/>
          
          </Routes>
        </Router>
    
     
       
  );
}
  
  
export default App;