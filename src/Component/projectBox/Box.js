import React, { useEffect}from 'react';
import {useNavigate} from "react-router-dom";
import useStyles from './BoxStyle';
import img1 from "../../Assets/photo-1481437642641-2f0ae875f836.jpg"
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Aos from "aos";
import "aos/dist/aos.css";


const Box = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    useEffect(() =>{
      Aos.init({duration: 2000})
  },[]);
  return(
        <div className={classes.boxMain}>
            <div data-aos="zoom-in" className={classes.insideBox}> 
              <div> <h1>You Have A New Project</h1>
                <h5>Contact me now and get a 30% discount on your <br/> new project </h5>
                <Button variant="contained" color="primary" onClick={() => {navigate("/contact")}}>
        Contact Me<span style={{paddingLeft: "15px"}}><SendIcon/></span>
      </Button>
      
                </div> 
                <div className={classes.image}>
                    <img src={img1}/>
                </div>


            </div>


        </div>
  )
};

export default Box;
