import * as React from 'react';
//import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import tileData from './tileData';
import './MainCards.css';
import { Height } from '@mui/icons-material';

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
    <div className='main-div'>
    {/* <div className='Divclass'> */}
    <Box className = 'outer-div' sx={{ flexGrow: 1 }}>
      {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {tileData.map((tile, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Grid>
            <Img alt={tile.title} src={tile.img} />
            </Grid>
            <Item className = 'inner-item'>xs=2</Item>
          </Grid>
        ))}
      </Grid> */}
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
            style={{height : 550}}
          />
          <ImageListItemBar
            title={item.title}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Box>
    </div>
    // </div>
  );
}

export default Cards;