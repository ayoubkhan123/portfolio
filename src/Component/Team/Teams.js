import React, { useEffect }from 'react';
import Carousel from 'react-bootstrap/Carousel';
import useStyles from './TeamStyle';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeamData from "./TeamData";
import img1 from "../../Assets/DSC_5399.jpg";
import Aos from "aos";
import "aos/dist/aos.css";



const Teams = () => {
    const classes = useStyles();
    useEffect(() =>{
      Aos.init({duration: 2000})
  },[]);
  return(
        <div className={classes.teamMain}>
        <div data-aos="fade-down"className={classes.Teamtext}>
            <h1>My Teams</h1>
            <h5> - Who with me -</h5>
        </div>
        <Carousel variant="dark">

        {/* FIRST CAROUSAL */}


  <Carousel.Item>
    {/* <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=f5f5f5"
      alt="First slide"
    /> */} 
     <div className={classes.flexx}>
            {
                TeamData.map((elem) =>{
                    return(
                        <>
                        <Card data-aos="zoom-in" className={classes.root}>
      <CardActionArea>
        <CardMedia
      
        />
     <div className={classes.images}> <img src={elem.img}/></div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {elem.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {elem.head}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>


                        </>
                    )
                })
            }
                    {/* extraaaa */}



    <Card className={classes.root3}>
      <CardActionArea>
        <CardMedia
      
        />
     <div className={classes.images}> <img src={img1}/></div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {/* {elem.title} */}-AYub-
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {/* {elem.head} */}
           Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>

    
            </div>
    <Carousel.Caption>
      {/* <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    


    </Carousel.Caption>
  </Carousel.Item>

  {/* SECOND CAROUSAL */}


  <Carousel.Item>
    {/* <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=e5e5e5"
      alt="Third slide"
    /> */} 
    <div className={classes.flexx}>
            {
                TeamData.map((elem) =>{
                    return(
                        <>
                        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
      
        />
     <div className={classes.images}> <img src={elem.img}/></div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {elem.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {elem.head}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>


                        </>
                    )
                })
            }

            {/* extraaaa */}



    <Card className={classes.root3}>
      <CardActionArea>
        <CardMedia
      
        />
     <div className={classes.images}> <img src={img1}/></div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {/* {elem.title} */}-AYub-
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {/* {elem.head} */}
           Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
            </div>
    <Carousel.Caption>
      {/* <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


</div>




  )
};

export default Teams;
