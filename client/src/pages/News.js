import React from "react";
import { news } from "../assets/info";
import { newsGridContainer, newsGridItem, NewsLink } from "../assets/styles";
import { Typography, Grid, IconButton } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import { Link } from "react-router-dom";
import svg from "../images/soji-svg.png";
import { svgSmallStyles } from "../assets/styles";

const News = () => {
  const newsToDisplay = news.map((newsItem, i) => ({
    ...newsItem,
    id: i + 1,
  }));

  const iconStyle = {
    "&:hover": {
      borderRadius: "none",
    },
    margin: 1,
  };
  return (
    <div>
      <Link to="/">
        <IconButton sx={iconStyle}>
          <ArrowBackIos color="secondary" />
        </IconButton>
      </Link>

      <Typography variant="h4" align="center" mt={-5}>
        Latest News
      </Typography>
      <img src={svg} alt="" style={svgSmallStyles} />

      <Grid container sx={newsGridContainer}>
        {newsToDisplay.map((newsItem) => (
          <Grid item key={newsItem.id} sx={newsGridItem}>
            <Typography variant="h6" color="secondary" fontWeight={600} mb={4}>
              {newsItem.title}
            </Typography>
            <Typography fontSize={16} mb={3}>
              {newsItem.newsContent} <NewsLink>Read more</NewsLink>
            </Typography>
            <Typography color="secondary">{newsItem.date}</Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default News;
