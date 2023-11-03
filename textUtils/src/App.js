import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/textForm';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  

  
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enable or not

  const [alert, setAlert] = useState(null)

  const showAlert= (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === "light") {
    setMode ("dark");
    document.body.style.backgroundColor = '#042743';
    showAlert(" Dark Mode has been enabled","success "); 
    document.title ="TextUtils - Dark Mode"

    //For giving title which change in some interval

    // setInterval(()=>{
    //   document.title="TextUtils is amazing";}, 2000
    // );

    // setInterval(()=>{
    //   document.title=" Install TextUtils Now";}, 1500
    // );

  }
  else {
    setMode ("light");
    document.body.style.backgroundColor = 'white';
    showAlert(" Light Mode has been enabled","success "); 
    document.title ="TextUtils - Light Mode"
  }
}
  return (
    
    <>
  <BrowserRouter>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}  />
<Alert alert={alert}/>


<Routes>
          <Route  path="/" element=
          {<TextForm showAlert={showAlert} heading="Enter the Text to analyze below" mode={mode} />}/>
             

          <Route  path="/about" element =
            {<About mode={mode}/>}/>
          
      
        </Routes> 
        
        </BrowserRouter>
 </>
  
  );
}

export default App;
