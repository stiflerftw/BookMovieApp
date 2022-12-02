import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import StarBorder from '@material-ui/icons/StarBorder';

const styles = {
  textBold: {
    fontWeight: 'bold',
  },
  Artists: {
    fontWeight: 'bold',
    marginTop: '16px',
  },
};

function MovieRatings(props) {
  const { classes } = props;
  return (
        <div>
            <Typography className={classes.textBold} >
                Rate this movie:
                <br/>
                <StarBorder /><span/><StarBorder /><span/><StarBorder /><span/><StarBorder /><span/><StarBorder />
            </Typography>
            <Typography className={classes.Artists} >
                Artists:
                <br/>
                <img src='' alt="author_image"></img>
            </Typography>
        </div>
  );
}

MovieRatings.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieRatings);