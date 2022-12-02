import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

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

const movieList = [
    {
    //   img: '/static/images/grid-list/breakfast.jpg',
      title: 'The Godfather',
      author: 'jill111',
      cols: 2,
      featured: true,
    },
    {
    //   img: '/static/images/grid-list/burgers.jpg',
      title: 'The Dark Knight',
      author: 'director90',
    },
    {
    //   img: '/static/images/grid-list/camera.jpg',
      title: 'Inception',
      author: 'Danson67',
    },
    {
    //   img: '/static/images/grid-list/morning.jpg',
      title: 'Interstellar',
      author: 'fancycrave1',
      featured: true,
    },
    {
    //   img: '/static/images/grid-list/hats.jpg',
      title: 'Shahid',
      author: 'Hans',
    },
    {
    //   img: '/static/images/grid-list/honey.jpg',
      title: 'The Nun',
      author: 'fancycravel',
    },
  ];

function HorizontalMoviesGrid(props) {
        const { classes } = props;
        return(
            <div>
                
                <div className={classes.props}>
                        <GridList className={classes.gridList} cols={2.5}>
                            {movieList.map(tile => (
                                <GridListTile key={tile.img}>
                                  <img src={tile.img} alt={tile.title} />
                                <GridListTileBar
                                title={tile.title}
                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title,
                                }}
                                />
                                </GridListTile>
                            ))}
                        </GridList>
                </div>
            </div>
        )
}

HorizontalMoviesGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HorizontalMoviesGrid);