import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Projects } from '../components/Projects';
import {
  CssBaseline,
  Container,
  Box,
  Typography,
  Paper,
  Grid
} from '@material-ui/core';

export const Portfolio = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box component="span" m={1}>
          <Typography variant="h3" gutterBottom>Portfolio</Typography>
          <Grid container spacing={3}>
            {
              Projects.map((item, index) => {
                return (
                  <Grid item xs={12} sm={6}>
                    <Paper>
                      <ProjectCard
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        url={item.url}
                        github={item.github}
                        key={index + item}
                      />
                    </Paper>
                  </Grid>
                )
              })
            }
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  )
}

