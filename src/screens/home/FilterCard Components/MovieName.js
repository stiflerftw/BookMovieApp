import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: '100%',
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class MovieName extends React.Component {
    state = {
        name: '',
    };


  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-dense"
          label="Movie Name"
          onChange={this.handleChange('name')}
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
        />
      </form>
    );
  }
}

MovieName.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieName);