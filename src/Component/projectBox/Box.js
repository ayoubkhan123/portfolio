import React from 'react';
import useStyles from './BoxStyle';
import img1 from "../../Assets/photo-1481437642641-2f0ae875f836.jpg"
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';



const Box = () => {
    const classes = useStyles();
  return(
        <div className={classes.boxMain}>
            <div className={classes.insideBox}> 
              <div> <h1>You Have A New Project</h1>
                <h5>Contact me now and get a 30% discount on your <br/> new project </h5>
                <Button variant="contained" color="primary">
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
