import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3}}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class Tabcontainer extends React.Component {
  state = {
    value: 0,
    showPassword: false,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="LOGIN" />
            <Tab label="REGISTER" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>
                            <TextField
                                required
                                id="standard-required"
                                label="Username"
                                defaultValue=""
                                className={classes.textField}
                                margin="normal"
                            /><br/>
                            <TextField
                                required
                                id="filled-adornment-password"
                                className={classNames(classes.margin, classes.textField)}
                                type={this.state.showPassword ? 'text' : 'password'}
                                label="Password"
                                value={this.state.password}
                                margin="normal"
                            />
                            <br/>
                            <Button variant="contained" color="primary" className={classes.button}>LOGIN</Button>
                            </TabContainer>}
        {value === 1 && <TabContainer>
                            <TextField
                                required
                                id="standard-required"
                                label="First Name"
                                defaultValue=""
                                className={classes.textField}
                                margin="normal"
                            /><br/>
                            <TextField
                                required
                                id="standard-required"
                                label="Last Name"
                                defaultValue=""
                                className={classes.textField}
                                margin="normal"
                            /><br/>
                            <TextField
                                required
                                id="standard-required"
                                label="Email"
                                defaultValue=""
                                className={classes.textField}
                                margin="normal"
                            /><br/>
                            <TextField
                                required
                                id="standard-required"
                                label="Password"
                                defaultValue=""
                                className={classes.textField}
                                margin="normal"
                            /><br/>
                            <TextField
                                required
                                id="standard-required"
                                label="Contact No"
                                defaultValue=""
                                className={classes.textField}
                                margin="normal"
                            /><br/>
                            <Button variant="contained" color="primary" className={classes.button}>REGISTER</Button>
                        </TabContainer>}
      </div>
    );
  }
}

Tabcontainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tabcontainer);
