import React, { useEffect, useContext } from "react";


import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Drawer from "@mui/material/Drawer";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Button from '@mui/material/Button';
import List from "@mui/material/List";


const SideBar = ({
   
    handleDrawerClose,
    SideBarOpen,
    drawerWidth,
  
   
}) => {

    // const location = useLocation();
    // const { dashboardData, setDashboardData } = useContext(DashboardContext)

    const DrawerHeader = styled("div")(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",
    }));

    // useEffect(() => {
    //     const id = location.pathname.split('/')
    //     setDashboardData({ ...dashboardData, dashboardId: parseInt(id[2]) })
    // }, [location])

    // const OpenDeleteModal = (e, Id) => {
    //     setDashboardData({ ...dashboardData, dashboardId: Id })
    //     seIsDeleteModalOpen(true)
    // }

    return (
        <>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
                variant="temporary"
                anchor="left"
                open={SideBarOpen}
                className="leftDrawerPanel"
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose} className="sideBarTopIcon">
                        <img className="" src="/assets/img/back-drawer.png" />
                    </IconButton>
                </DrawerHeader>

                <List sx={{ overflow: "auto" }}>
                    <div className="overflowScroll">
                        
                                  
                                    <NavLink to={`/`}>
                                        <ListItem className="dashboardListCls">
                                            <ListItemText primary="Animals"/>
                                        </ListItem>
                                    </NavLink>

                                   

                          
                    </div>
                   
                </List>
            </Drawer>
            
           
        </>
    )

}

export default SideBar