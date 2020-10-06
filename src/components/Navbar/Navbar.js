// React Libraries
import React from 'react';
import { Link } from "react-router-dom";

// Material UI
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'

// Custom Styles
import { styles } from './Navbar.style';

// Component
export const NavBar = () => {
  const classes = styles();

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Anna Chong
        </Typography>
        <Button color="inherit"><Link className={classes.linkButton} to="/">About</Link></Button>
        <Button color="inherit"><Link className={classes.linkButton} to="portfolio">Portfolio</Link></Button>
      </Toolbar>
    </AppBar>
  );
}