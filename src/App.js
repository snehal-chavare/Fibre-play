import React,{ useEffect, useState }  from 'react';

import Header from './Components/Layout/Header/Header';
import Cards from './Components/Layout/MainCards/MainCards';

import './App.css';





const App =()=>{

  //const navigate = useNavigate();
  
  const [SideBarOpen, setSideBarOpen] = useState(false); 
  //setSideBarOpen(true);

  return (
    <div id="App">
       <Header
        pageWrapId={"page-wrap"} 
        outerContainerId={"App"}
        />
      
      <Cards />
    
    </div>
      
         
  )
};


export default App;
