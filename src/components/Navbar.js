import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { styles } from './Navbar.style';

export default function ButtonAppBar() {
  const classes = styles();
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Anna Chong
        </Typography>
        <Button href="/" color="inherit">About</Button>
        <Button href="/portfolio" color="inherit">Portfolio</Button>
      </Toolbar>
    </AppBar>
  );
}
