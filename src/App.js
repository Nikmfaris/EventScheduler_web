import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  
  const [number=0, setNumber] = useState(0);
  
  const handleSpeed = () => {
    console.log(number)
    const logoElement = document.getElementById('App-logo');
    if (number >= 1) {
      logoElement.style.animationDuration = `${"0."+number}s`;
    }
    if(number < 0){
      logoElement.style.animationDuration = `${-(number)}s`;
    }
    if(number == 0){
      logoElement.style.animationDuration = "0s";
    }
    
  };
  const increase = () => {
    handleSpeed();
    setNumber(number + 1);  
  };

  const decrease = () => {  
    handleSpeed();
    setNumber(number - 1);
  };
  const reset = () => {
    
    setNumber(0);
    handleSpeed();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" id="App-logo" alt="logo" />

        <div className='plus-minus'>
          <div className='button'>
            <button className='but plus' onClick={increase}>
              +
            </button>
            <button className='but minus' onClick={decrease}>
              -
            </button>
            <button className='but reset' onClick={reset}>
              reset
            </button>
          </div>
          <p>{number}</p>
        </div>
      </header>
    </div>
  );
}

export default App;