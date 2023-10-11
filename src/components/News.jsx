import React from 'react';
import {Link} from 'react-router-dom';
import {svgSmallStyles, NewsLink} from '../data/styles';
import {newsGridItem, newsGridContainer} from '../data/styles';
import {news} from '../data/info';
import svg from '../images/soji-svg.png';
import {Typography, Grid, Box, Paper} from '@mui/material';

const NewsMini = () => {
  const newsToDisplay = news.slice(0, 6).map((newsItem, i) => ({
    ...newsItem,
    id: i + 1
  }));

  const newsBox = {
    bgcolor: '#c5c5c526',
    paddingBottom: 5,
    mb: 5
  };
  return (
    <div>
      <Typography variant='h4' align='center' mt={5}>
        Latest News
      </Typography>
      <img src={svg} alt='' style={svgSmallStyles} className='no-bg-color'/>
      <Typography align='center' mb={5}>
        As a non-governmental firm, Sojitade has taken a few <br />
        steps in the following areas.
      </Typography>
      <Box sx={newsBox}>
        <Grid container sx={newsGridContainer}>
          {newsToDisplay.map(news => (
            <Grid
              item
              key={news.id}
              sx={newsGridItem}
              component={Paper}
              elevation={10}>
              <Typography
                variant='h6'
                color='secondary'
                fontWeight={600}
                mb={4}>
                {news.title}
              </Typography>
              <Typography fontSize={16} mb={3}>
                {news.newsContent} <NewsLink to='/news'>Read more</NewsLink>
              </Typography>
              <Typography color='secondary'>{news.date}</Typography>
            </Grid>
          ))}
        </Grid>
        <Link className='showLink' to='/news'>
          Show All
        </Link>
      </Box>
    </div>
  );
};

export default NewsMini;
