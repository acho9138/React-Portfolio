// React Library
import React from 'react';

// Material UI Components
import { Paper, Typography, Container, Box, Grid } from '@material-ui/core';

// Custom styles
import { styles } from './About.styles';

// Component
export const About = () => {
  const classes = styles();
  return (
    <Container maxWidth="md">
      <Box component="span" m={1}>
        <Typography variant="h3" align="center" gutterBottom>About Me</Typography>
        <Grid container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={7} md={5}>
            <img className={classes.img} alt="Profile" src={process.env.PUBLIC_URL + "/assets/profile.jpeg"} />
          </Grid>
          <Grid item xs={8} md={7}>
            <Paper elevation={3} className={classes.textContainer}>
              <Typography variant="h6" gutterBottom>
                <b>Summary</b>
              </Typography>
              <Typography variant="body1" gutterBottom>
                Former pharmacist, Anna excels with skills in communication, problem solving, time management and perserverance.
                She is knowledgeable and strives to continue learning new languages and technologies.
              </Typography>
              <br />
              <Typography variant="h6" gutterBottom>
                <b>Skills</b>
              </Typography>
              <Typography component={'span'} variant="body1" gutterBottom>
                Anna has experience with:
              <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React.js</li>
                  <li>Material-UI</li>
                  <li>CSS libraries (Bootstrap, MaterializeCSS)</li>
                  <li>jQuery</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>Handlebars</li>
                  <li>API</li>
                </ul>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box >
    </Container >
  )
}