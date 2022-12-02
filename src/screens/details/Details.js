import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Header from './header/Header';
import Button from '@material-ui/core/Button';
import MovieDescription from './MovieDescription';
import MovieRatings from './MovieRatings';
import './Details.css';

const styles = theme => ({
    button: {
        leftMargin: '24px',
        topMargin: '8px',
        bottomMargin: '0px',
        height: '24px',
    },
    input: {
        display: 'none',
    },
});

function Details (props) {
    const { classes } = props;
    return (
        <div className='mainBody'>
            <Header />
            <label htmlFor="text-button-file">
                <Button href={'./../'} className={classes.button}>{"< Back to Home"}</Button>
            </label>
            <div className='flex-container'>
                <div className='leftBlock'>
                    <img src="" alt="image_name"></img>
                </div>
                <div className='middleBlock'>
                    <MovieDescription />
                </div>
                <div className='rightBlock'>
                    <MovieRatings />
                </div>
            </div>
        </div>
    );
}

Details.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Details);