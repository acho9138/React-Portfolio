// React Libraries
import React from 'react';

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
        <Button href="/" color="inherit">About</Button>
        <Button href="/portfolio" color="inherit">Portfolio</Button>
      </Toolbar>
    </AppBar>
  );
}