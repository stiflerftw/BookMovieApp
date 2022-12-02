import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  textDecoration: {
    minWidth: 275,
  },
  textBold: {
    fontWeight: 'bold',
  },
  plot: {
    fontWeight: 'bold',
    marginTop: '16px',
  },
  trailer: {
    fontWeight: 'bold',
    marginTop: '16px',
  },
  pos: {
    marginBottom: 12,
  },
};

const details = {
    title: '',
    genres: '',
    duration: '',
    release_date: '',
    critics_rating: '',
    story_line: '',
    wiki_url: ''
}

function MovieDescription(props) {
  const { classes } = props;
  return (
        <div>
            <Typography variant="h5" component="h2">
                {details.title}
            </Typography>
            <Typography className={classes.textBold} >
                Genere: 
            </Typography>
            <Typography className={classes.textBold} >
                Duration: 
            </Typography>
            <Typography className={classes.textBold} >
                Release Date: 
            </Typography>
            <Typography className={classes.textBold} >
                Rating: 
            </Typography>
            <Typography className={classes.plot} >
                Plot: 
            </Typography>
            <Typography className={classes.trailer} >
                Title: 
            </Typography>
        </div>
  );
}

MovieDescription.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieDescription);
