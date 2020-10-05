// React Libraries
import React from 'react';

// Material UI
import {
  Container,
  Box,
  Typography,
  Grid
} from '@material-ui/core';

// Custom
import { ProjectCard } from '../../components';
import { ProjectData } from '../../components/Projects';
import { styles } from './Portfolio.styles';

export const Portfolio = () => {
  const classes = styles();

  return (
    <Container className={classes.container}>
      <Box component="span" m={1}>
        <Typography variant="h3" align="center" gutterBottom>Portfolio</Typography>
        <Grid container spacing={3}>
          {
            ProjectData.map((item, index) => {
              return (
                <Grid item xs={12} sm={6} key={index + item}>
                  <ProjectCard
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    url={item.url}
                    github={item.github}
                  />
                </Grid>
              )
            })
          }
        </Grid>
      </Box>
    </Container>
  )
}

