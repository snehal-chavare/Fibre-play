import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import './Aboutus.css';
//import './AboutData.js';



const Aboutus = () =>{
    return(
        <>
           <div className='container  com-logo'>
              <form method="">
                 <div className='row'>
                    <div className='col-md-4 col-xs-2'>
                        <img src = '/img/fibre.jpeg' alt="Fibre-Play" />
                    </div>
                    <div className='col-md-4 col-xs-2'>
                       <div className='company-head'>
                          <h5 className='heading'>Fibre Play</h5>
                          <p className='com-profile mt-3 mb-5'>cbjdhcej cdsjc jehbce nc djcheu c befuy3</p>
                       </div>
                    </div>
                 </div>
                 <div className='row'>
                    <div className=' p-3 com-about'>
                        <table>
                           <tr>
                              <td>Company Name</td>
                              <td>Fibre Play</td>
                           </tr>
                           <tr>
                              <td>Owner Name</td>
                              <td>Fibre Play</td>
                           </tr>
                           <tr>
                              <td>Email Id</td>
                              <td>Fibre Play</td>
                           </tr>
                           <tr>
                              <td>Contact No.</td>
                              <td>Fibre Play</td>
                           </tr>
                           <tr>
                              <td>Address</td>
                              <td>Fibre Play</td>
                           </tr>
                           <tr>
                              <td>GST No.</td>
                              <td>Fibre Play</td>
                           </tr>
                        </table>
                    </div>
                 </div>
              </form>
           </div>
        </>
    );
}

export default Aboutus;