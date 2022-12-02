import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    colums: 4,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});


 const tileData = [
    {
      img: ``,
      title: 'Image',
    //   release-date: '',
      link: './../details/Details',
    },
    {
          img: '',
          title: 'Image',
        //   release-date: '',
          link: './../details/Details',
    },
    {
          img: '',
          title: 'Image',
        //   release-date: '',
          link: './../details/Details',
    },
    {
          img: '',
          title: 'Image',
        //   releasedDate: '',
          link: './../details/Details',
    },
    {
        img: '',
        title: 'Image',
        releasedDate: '',
        link: './../details/Details',
  },
];

function MainMoviesGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={350} className={classes.gridList}>
        {tileData.map(tile => (
            <GridListTile key={tile.img}>
                <a href= {tile.link}>
                  <img src={tile.img} alt={tile.title} />
                </a>
                <GridListTileBar
                title={tile.title}
                subtitle={<span>Release Date: {tile.releasedDate}</span>}
                />
            </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

MainMoviesGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainMoviesGrid);