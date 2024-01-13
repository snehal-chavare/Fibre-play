import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import { Button } from "react-bootstrap";
//import Modal from '@mui/material/Modal';
import './Modals.css';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Modal = (props) =>{
   

    const handleCloseModal = () => {
       props.onClose();
   };


    return(
        <>
           <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Product Details
          </Typography>
             <div id="modal-img-div">
                <img 
                 src="/img/fibre.jpeg"
                 alt="product"
                 loading="lazy"
                 style={{ height: "100%", width: "100%" }}
                 ></img>
             </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>

          <Button
                    className="img-close-button"
                    onClick= {handleCloseModal}
                  >
                   Close
                  </Button>

        </Box>
        </>
    )
}

export default Modal;