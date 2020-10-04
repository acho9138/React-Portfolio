import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles({
  grid: {
    flexGrow: 1,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    marginTop: '30'
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href={props.url} size="small" color="primary" target="_blank">
          Link to site
        </Button>
        <Button href={props.github} size="small" color="primary" target="_blank">
          Github repo
        </Button>
      </CardActions>
    </Card>
  );
}