import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Projects } from '../components/Projects';
import {
  Container,
  Box,
  Typography,
  Grid
} from '@material-ui/core';

export const Portfolio = () => {
  return (
    <Container maxWidth="sm">
      <Box component="span" m={1}>
        <Typography variant="h3" align="center" gutterBottom>Portfolio</Typography>
        <Grid container spacing={3}>
          {
            Projects.map((item, index) => {
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

