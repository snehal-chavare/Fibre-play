import React, { useState, useRef } from "react";
import { Container } from "react-bootstrap";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "react-bootstrap";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
//import Modal from '@mui/material/Modal';
import "./Modals.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Modal = (props) => {
  const sliderRef = useRef(null);
  const scrollAmount = 50;
  const images = [
    {
      id: 1,
      url: "https://source.unsplash.com/300x300/?perth,australia",
    },
    {
      id: 2,
      url: "https://source.unsplash.com/300x300/?west-australia",
    },
    {
      id: 3,
      url: "https://source.unsplash.com/300x300/?perth",
    },
    {
      id: 4,
      url: "https://source.unsplash.com/300x300/?quokka,perth",
    },
    {
      id: 5,
      url: "https://source.unsplash.com/300x300/?margaretriver,australia",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
  ];

  const handleCloseModal = () => {
    props.onClose();
  };

  return (
    <>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Product Details
        </Typography>
        <div className="App">
          <button
            className="nav-btn"
            onClick={() => {
              const container = sliderRef.current;
              container.scrollLeft -= scrollAmount;
            }}
          >
            <ChevronLeftIcon />
          </button>

          <div className="images-container" ref={sliderRef}>
            {images.map((image) => {
              return (
                <img
                  className="image"
                  alt="sliderImage"
                  key={image?.id}
                  src={image?.url}
                />
              );
            })}
          </div>
          <button
            className="nav-btn"
            onClick={() => {
              const container = sliderRef.current;
              container.scrollLeft += scrollAmount;
            }}
          >
            <ChevronRightIcon />
          </button>
        </div>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {props.imageData.title}
        </Typography>

        <Button className="img-close-button" onClick={handleCloseModal}>
          Close
        </Button>
      </Box>
    </>
  );
};

export default Modal;
