import React, { useEffect, useState } from 'react';
import useStyles from "./HomeStyle";
import { Button } from '@material-ui/core';
import img from "../../Assets/DSC_5399.jpg";
import SendIcon from '@material-ui/icons/Send';
import Aos from "aos";
import "aos/dist/aos.css";

const HomePart = () => {
    const classes = useStyles();
    const purple = "linear-gradient( 262deg , #c2cfe3, #f8f9fc)";
    const [color, changeColor] = useState(purple);
    const bgChange = () =>{
            let newG = "white";
            changeColor(newG);
    };
    const bgChanges = () =>{
        let newG = "linear-gradient( 262deg , #c2cfe3, #f8f9fc)";
        changeColor(newG);
};
    useEffect(() =>{
        Aos.init({duration: 3000,})
    },[]);
   
    return (
        <div className={classes.HomeMain} style={{background: color}}>
                    <div data-aos="fade-down" className={classes.mainText}>
                    <h1>Hi,I`am Ayyub</h1>
                    <h4>Frontend developer</h4>
                    <p>High level experience in web design and <br/> development knowledge producing <br/> quality work</p>
                    <Button onClick={bgChange} onMouseEnter={bgChanges} variant="contained" color="primary">
        Primary <span style={{paddingLeft: "15px"}}><SendIcon/></span>
      </Button>
      

                    </div>


                    <div data-aos="flip-right" className={classes.images}>
                        <img src={img} alt=""/>
                    </div>
        </div>
    )
}

export default HomePart;