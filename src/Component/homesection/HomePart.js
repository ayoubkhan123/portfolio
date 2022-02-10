import React from 'react';
import useStyles from "./HomeStyle";
import { Button } from '@material-ui/core';
import img from "../../Assets/DSC_5399.jpg";
import SendIcon from '@material-ui/icons/Send';

const HomePart = () => {
    const classes = useStyles();
    return (
        <div className={classes.HomeMain}>
                    <div className={classes.mainText}>
                    <h1>Hi,I`am Ayyub</h1>
                    <h4>Frontend developer</h4>
                    <p>High level experience in web design and <br/> development knowledge producing <br/> quality work</p>
                    <Button variant="contained" color="primary">
        Primary <span style={{paddingLeft: "15px"}}><SendIcon/></span>
      </Button>
      

                    </div>


                    <div className={classes.images}>
                        <img src={img}/>
                    </div>
        </div>
    )
}

export default HomePart;
