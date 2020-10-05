// React Libraries
import React from 'react';

// Material UI
import {
  Container,
  Box,
  Typography,
} from '@material-ui/core';

// Component
export const NotFound = () => {

  return (
    <Container maxWidth="md" >
      <Box component="span" m={1}>
        <Typography variant="h3" align="center" gutterBottom>404. Page not found</Typography>
      </Box>
    </Container>
  )
}

