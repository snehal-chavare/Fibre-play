import * as React from 'react';
import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import CategoryIcon from '@mui/icons-material/Category';
import DetailsIcon from '@mui/icons-material/Details';
import ArrowRight from '@mui/icons-material/ArrowRight';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';





import './Header.css'
import { BorderAllRounded, Height, MarginTwoTone, Opacity } from '@mui/icons-material';

import { Divider } from '@mui/material';

const drawerWidth = 230;


// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   }),
// );
const data = [
  { 
    icon:  <HomeIcon />,
     label: 'Home', 
    
       },
  { 
    icon: <Person2Icon />,
     label: 'About us',
    
     },
  
  { 
    icon: <DetailsIcon />, 
    label: 'Enquiry',
    
  },
];

const productList = { 
  icon: <CategoryIcon />, 
 label: 'Products' ,
 products:[
  {
    label:'Animals'
  },
  {
    label:'Benches'
  },
  {
    label:'Dustbins'
  },
  {
     label:'Toys'
  }
 ]
}


const AppBar = styled(MuiAppBar, { 
  
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    height: '80vh !important',
    marginTop: '10vh !important'
   
  }),
  ...(open && {
    width:  '100%', //`calc(100% - ${drawerWidth}px)`,
    marginLeft: '0', //`${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
      height: '80vh !important',
      marginTop: '10vh !important'
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 6),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',

}));



const Header = ()=>{

  const [show, setShow] = useState(false);

  const theme = useTheme();
 const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
const menuFunction =(id) =>{
    if(id === 0)
    goToHome()
    else if(id === 1)
    aboutUs()
    else if (id === 3)
      enquiry()
    else{
      goToHome()
    }
}
  const goToHome = () => {
     navigate(`/`)
  }
  const aboutUs = () => {
    navigate(`/Aboutus`);
  }
  const enquiry =() =>{
    navigate(`/enquiry`);
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
          id="hamburgerMenu"
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography id="dashboard-logo" onClick={goToHome} > */}
            {/* <AppLogo /> */}
            <div onClick={goToHome} className='icon-class'>
            <img  alt="Fibre" src ="/img/fibre.jpeg" className='img-class border'/>
            </div>
          {/* </Typography> */}
          <Typography variant="h6" noWrap component="div" style={{"color" :"black" }}>
           Fibre Play
          </Typography>
          <div className="dashboard-icons display-flex">
            <div title="Help" onClick={goToHome} className='icon-class'>
            <img  alt="Help" src ="/img/help.jpg" className='img-class'/>
            </div>
            <div title="Call us" onClick={goToHome} className='icon-class' style={{marginLeft:15}}>
              <img  alt="Call" src ="/img/call.png" className='img-class' />
            </div>
            {/* <div title="User" >
              <UserProfileOptions setIsLogin={setIsLogin} userImage={imageUrl} />
               <img id="user-img" src="assets/img/User.png" alt="User" />
              <DropDownIcon onClick={showOptions} /> 
            </div> */}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        {/* <Divider /> */}
        <List>
          {data.map((item, index) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                {item.icon}
                 
                </ListItemIcon>
                <ListItemText primary={item.label} onClick = {()=>menuFunction(index)}
                 className='text-style' /> 
              </ListItemButton>
            </ListItem>
          ))}
          <Divider sx={{color: 'white'}}/>
          {/* <hr /> */}
          <Box
              sx={{
                bgcolor: show ? 'rgba(71, 98, 130, 0.2)' : null,
                pb: show ? 2 : 0,
              }}
            >
            <ListItemButton
            onClick={() => setShow(!show)}
            sx={{
              px: 2,
              pt: 2.5,
              pb: show ? 0 : 2.5,
              '&:hover, &:focus': { '& svg': { opacity: show ? 1 : 1 } },
            }}>
               <ListItemIcon>
               
                {productList.icon}
                 
                </ListItemIcon>
              <ListItemText
                  primary= {productList.label}
                  className='text-style' 
                  
              />
               <KeyboardArrowDown
                  sx={{
                    mr: 2,
                    opacity: 0,
                    transform: show ? 'rotate(-180deg)' : 'rotate(0)',
                    transition: '0.2s',
                  }}
                />
            </ListItemButton>
           

            {show &&
                productList.products.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 2, px: 10, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                  >
                    {/* <ListItemIcon sx={{ color: 'inherit' }}>
                      {item.icon}
                    </ListItemIcon> */}
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 18, fontWeight: 'bold' }}
                    />
                  </ListItemButton>
                ))} 

           </Box>
        </List>
        
      </Drawer>
     
    </Box>
  );
}

export default Header;
