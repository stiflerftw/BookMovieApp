import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import MovieName from './FilterCard Components/MovieName';
import Genres from './FilterCard Components/Genres';
import Artists from './FilterCard Components/Artists';
import ReleaseDateStart from './FilterCard Components/ReleaseDateStart';
import ReleaseDateEnd from './FilterCard Components/ReleaseDateEnd';

const styles = theme => ({
  root: {
    color: theme.palette.primary.light,
    width: 500,
  },
  card: {
    minWidth: 275,
  },
  pos: {
    marginBottom: 12,
  },
});

function FilterCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.root}> 
            FIND MOVIES BY:
        </Typography>
        <MovieName />
        <Genres />
        <Artists />
        <ReleaseDateStart />
        <ReleaseDateEnd />
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" className={classes.button}>APPLY</Button>
      </CardActions>
    </Card>
  );
}

FilterCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilterCard);