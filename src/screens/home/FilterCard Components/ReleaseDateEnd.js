import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

function ReleaseDateEnd(props) {
  const { classes } = props;

  return (
    <FormControl className={classes.formControl}>
      <TextField
        id="date"
        label="Release Date End"
        type="date"
        defaultValue="yyyy-mm-dd"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </FormControl>
  );
}

ReleaseDateEnd.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReleaseDateEnd);