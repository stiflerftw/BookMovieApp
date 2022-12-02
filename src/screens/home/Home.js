import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Header from './../../common/header/Header';
import FilterCard from './FilterCard';
import HorizontalMoviesGrid from './HorizontalMoviesGrid';
import MainMoviesGrid from './MainMoviesGrid';
import './Home.css';

const styles = theme => ({
    root: {
      flexWrap: 'flexwrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    titleBar: {
      background:
        'linear-solid(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
});


function Home() {
        return(
            <div>
              <Header />
              <div className='heading-upcomingMovies'>
                    Upcoming Movies
              </div>
              <div className='horizontalMoviesGrid'>
                <HorizontalMoviesGrid />
              </div>
              <div className='flex-container'>
                <div className='movieBlock'>
                  <MainMoviesGrid />
                </div>
                <div className='filterBlock'>
                  <FilterCard />
                </div><br/>
              </div>
            </div>
        )
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);