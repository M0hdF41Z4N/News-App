// NewsList.js
import React from "react";
import NewsItem from "./NewsItem";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';

const NewsList = ({ news, isGrid, onNewsClick, onFavoriteClick }) => {
//   return(
//   <div className={isGrid ? "grid-view" : "list-view"}>
//     {news.map((article,i) => (
//       <NewsItem
//         key={article.id}
//         article={article}
//         onClick={() => onNewsClick(i+1)}
//         onNewsClick={onNewsClick}
//         onFavoriteClick={() => onFavoriteClick(article.id)}
//       />
//     ))}
//   </div>
// )

  return (
    <>
    <Container maxWidth="sm">
    {!isGrid ? 
    <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>
      {news.map((article,i) => (
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={`/static/images/avatar/${i}.jpg`} />
        </ListItemAvatar>
        <ListItemText
          primary={article.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {article.author}
              </Typography>
              { `  ${article?.description?.slice(0,30)} ...`}
            </React.Fragment>
          }
        />
        </ListItem>
      ))}
    </List>
    : <Grid container spacing={2}>
    <Grid item xs={8}>
    {news.map((article,i) => (
      <Card sx={{ width: '100%'}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {article?.author?.slice(0,1)}
            </Avatar>
          }
          title={article.title}
          subheader="September 14, 2016"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          { `  ${article?.description} ...`}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Button size="small">Read More</Button>
        </CardActions>
      </Card>
      ))}
    </Grid>
    </Grid> }
    </Container>
    </>
  )

};

export default NewsList;
