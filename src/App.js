import React,{ useEffect, useState }  from 'react';

import { Route, Routes, useNavigate } from 'react-router-dom';

import Header from './Components/Layout/Header/Header';
import Cards from './Components/Layout/MainCards/MainCards';
import Footer from './Components/Layout/Footer/Footer';
import Contactus from './Components/Feature/Contactus/Contactus';
import Aboutus from './Components/Feature/Aboutus/Aboutus';

import './App.css';





const App =()=>{

  return (
    <div id="App">
       <Header
        pageWrapId={"page-wrsap"} 
        outerContainerId={"App"}
       />
      {/* <Cards /> */}
    

       <Routes>
          <Route path='/' element = { <Cards />}/>
          <Route path='/Aboutus' element = {<Aboutus />}/>
          <Route path='/Contactus' element = {<Contactus />} />
        </Routes>
        <Footer style={{height:"8%"}} />
    </div>
      
         
  )
};


export default App;
