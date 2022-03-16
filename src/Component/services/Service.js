import React, { useEffect }from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './ServiceStyle';
import ServiceData from "./ServiceData";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Aos from "aos";
import "aos/dist/aos.css";


 function Service() {
  const classes = useStyles();
  return (
      <div className={classes.mainService}>
      <div data-aos="zoom-in"  style={{textAlign: "center",padding: "40px"}}><h1>Services</h1><h5>What i offer</h5></div>
      <div className={classes.mainData}>
        {
          ServiceData.map((elem) =>{
            return(
              <Card data-aos="zoom-in" className={classes.root}>
      <CardActionArea>
        {/* <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {elem.icon}
          </Typography>
          <Typography variant="h4" color="textSecondary" component="p" style={{paddingTop: "20px"}}>
           {elem.title}
           <h3 style={{paddingTop: "10px"}}>{elem.head}</h3>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        <Button size="small" color="primary">
          View More <ArrowForwardIcon style={{fontSize: "20px",paddingBottom: "2px",paddingLeft: "5px"}}/>
        </Button>
      </CardActions>
    </Card>
            )
          })
        }
        </div>
    </div>
  );
}
export default Service;
