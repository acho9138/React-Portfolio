// React Libraries
import React from 'react';

// Material UI
import { Grid, Container, Typography } from '@material-ui/core';

// Custom Styles
import { styles } from './Footer.styles';


export const Footer = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Grid container spacing={3}>
          <Grid item xs={12} align="center">
            <Typography variant="h5" gutterBottom>
              Contact Information
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} align="center">
            <Typography variant="body1" gutterBottom>
              <i className="fas fa-map-marker-alt fa-lg"></i>&nbsp;&nbsp;Sydney, Australia
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} align="center">
            <Typography variant="body2" gutterBottom>
              <i className="fas fa-mobile-alt fa-lg"></i>&nbsp;&nbsp;0433 586 311
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} align="center">
            <Typography variant="body2" gutterBottom>
              <i className="far fa-envelope fa-lg"></i>&nbsp;&nbsp;anna.s.chong@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <Typography variant="body1" gutterBottom>
              <a href="https://github.com/acho9138" target="_blank" rel="noopener noreferrer" className={classes.icons}><i className="fab icons fa-github fa-3x"></i></a>
              <a href="https://www.linkedin.com/in/anna-chong-199167191/" target="_blank" rel="noopener noreferrer" className={classes.icons}><i
                className="fab icons fa-linkedin fa-3x"></i></a>
              <a href={process.env.PUBLIC_URL + "/assets/resume.pdf"} target="_blank" rel="noopener noreferrer" className={classes.icons}><i className="fas icons fa-portrait fa-3x"></i></a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div >
  );
}
