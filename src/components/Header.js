import React, { useState } from 'react';
import {AppBar, Tabs, Tab, Toolbar, Typography} from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { NavLink } from "react-router-dom";

const Header = () => {
    const [value, setValue] = useState();
  return (
    <div>
        <AppBar sx={{backgroundColor:"#8967B3"}} position='sticky'>
            <Toolbar>
                <Typography><AutoStoriesIcon/></Typography>
                <Tabs sx={{ml: "auto"}} textColor='inherit' indicatorColor='secondary' value={value} onChange={(e,val)=>setValue(val)}>
                    <Tab LinkComponent={NavLink} to="/add" label="Add Books" />
                    <Tab LinkComponent={NavLink} to="books" label="Books" />
                    <Tab LinkComponent={NavLink} to="/about" label="About Us" />
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header