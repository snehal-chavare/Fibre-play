import * as React from 'react';
//import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import tileData from './tileData';
import './MainCards.css';


// const Img = styled('img')({
//   margin: 'auto',
//   display: 'block',
//   maxWidth: '100%',
//   maxHeight: '100%',
// });

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const Cards = () => {
  return (
    
    // <Box className = 'outer-div'>
     <div style={{height:'82%', marginTop: '8%'}}>
      <div style={{display: "flex", flexDirection: "column", }}>
      <ImageList variant="masonry" className = 'image-list' sx={{
    columnCount: {
      xs: '1 !important',
      sm: '2 !important',
      md: '2 !important',
      lg: '4 !important',
      xl: '4 !important',
    },
   
  }}
  gap={90}>
    
      {tileData.map((item) => (
          <ImageListItem  key={item.title}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            style={{height : 300}}
          />
          <ImageListItemBar
            title={item.title}
            position="below"
          />
        </ImageListItem>
      
      ))}
    
    </ImageList>
    </div>
     </div>
      
    // </Box>
  
  );
}

export default Cards;