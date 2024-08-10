import React from 'react';
import {news} from '../data/info';
import {newsGridContainer, newsGridItem, NewsLink} from '../data/styles';
import {Typography, Grid, IconButton, Paper} from '@mui/material';
import {ArrowBackIos} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import svg from '../images/soji-svg.png';
import {svgSmallStyles} from '../data/styles';
import Handles from '../components/Handles';
import useFadeInView from '../hooks/useFadeInView';

const News = () => {
  const {containerRef, GrowEl} = useFadeInView();
  const newsToDisplay = news.map((newsItem, i) => ({
    ...newsItem,
    id: i + 1
  }));

  const iconStyle = {
    '&:hover': {
      borderRadius: 'none'
    },
    margin: 1
  };
  return (
    <div>
      <Link to='/'>
        <IconButton sx={iconStyle}>
          <ArrowBackIos color='secondary' />
        </IconButton>
      </Link>

      <Typography variant='h4' align='center' mt={-5}>
        Latest News
      </Typography>
      <img src={svg} alt='' style={svgSmallStyles} className='no-bg-color' />

      <Grid container sx={newsGridContainer} ref={containerRef}>
        {newsToDisplay.map((newsItem, i) => (
          <GrowEl key={newsItem.id} i={i}>
            <Grid item sx={newsGridItem} component={Paper} elevation={10}>
              <Typography
                variant='h6'
                color='secondary'
                fontWeight={600}
                mb={4}>
                {newsItem.title}
              </Typography>
              <Typography fontSize={16} mb={3}>
                {newsItem.newsContent} <NewsLink>Read more</NewsLink>
              </Typography>
              <Typography color='secondary'>{newsItem.date}</Typography>
            </Grid>
          </GrowEl>
        ))}
      </Grid>
      <div style={{background: '#c5c5c526', padding: '20px 0 10px'}}>
        <Handles />
      </div>
    </div>
  );
};

export default News;
