import * as React from 'react';
import { useNavigate } from "react-router-dom"
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




import './Header.css'
import { BorderAllRounded, Height, MarginTwoTone } from '@mui/icons-material';

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
  const theme = useTheme();
 const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const goToHome = () => {
     navigate(`/`)
  }
  const aboutUs = () => {
    navigate(`/Aboutus`);
  }
  const contactUs =() =>{
    navigate(`/Contactus`);
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
          {['Home', 'About us', 'contact us'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                
                  {index === 0 ? <HomeIcon /> : index === 1 ? <Person2Icon /> : <ContactPhoneIcon /> }
                </ListItemIcon>
                <ListItemText primary={text} onClick ={index === 0 ? goToHome : index === 1 ? aboutUs : contactUs}
                 className='text-style' /> 
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* <Divider /> */}
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      {/* <Main open={open}>
        <DrawerHeader />
      
      </Main> */}
    </Box>
  );
}

export default Header;
