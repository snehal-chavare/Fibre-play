import React, { useEffect, useState } from "react";

import Modal from "../../Feature/Modals/Modals";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";


import tileData from "./tileData";
import "./MainCards.css";
import { ButtonGroup } from "@mui/material";
import { Button } from "react-bootstrap";

const Cards = () => {
  const [showModal, setShowModal] = useState(false);

  // handleOpen
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    // <Box className = 'outer-div'>
    <>
      <div style={{ height: "82%", marginTop: "8%" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <ImageList
            variant="masonry"
            className="image-list"
            sx={{
              columnCount: {
                xs: "1 !important",
                sm: "2 !important",
                md: "2 !important",
                lg: "4 !important",
                xl: "4 !important",
              },
            }}
            gap={90}
          >
            {tileData.map((item) => (
              <ImageListItem key={item.title}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  style={{ height: 300 }}
                />
                <ImageListItemBar title={item.title} position="below" />
                <ButtonGroup className="img-buttongrp">
                  <Button
                    className="img-button"
                    onClick= {handleOpenModal}
                  >
                    Get Details
                  </Button>
                  <Button className="img-button">Call us</Button>
                </ButtonGroup>
              </ImageListItem>
              //
            ))}
          </ImageList>
        </div>
        {showModal ? <Modal
        onClose={handleCloseModal}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
         title= "XYZ"//{item.title}
         img="XYZ.png" //{item.img}
         height="300"
         width="300"
         price="3000"
         bestPrice="2800"
        />: ""}
      </div>
    </> //</Box>
  );
};

export default Cards;
