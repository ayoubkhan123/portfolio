import React, { useEffect, useState } from 'react';
import useStyles from "./HomeStyle";
import { Button } from '@material-ui/core';
import img from "../../Assets/DSC_5294.jpg";
import SendIcon from '@material-ui/icons/Send';
import Aos from "aos";
import "aos/dist/aos.css";
import {useNavigate} from "react-router-dom";
import "./Style.css";

const HomePart = () => {
    const classes = useStyles();
    const navigate = useNavigate();
   
    useEffect(() =>{
        Aos.init({duration: 3000,})
    },[]);
   
    return (
        <div className={classes.HomeMain}>

                    <div data-aos="fade-down" className={classes.mainText}>
                    <h1>Hi,I`am Ayyub</h1>
                    <h4>Front-end web developer</h4>
                    <p>High level experience in web design and <br/> development knowledge producing <br/> quality work</p>
                    <Button onClick={() => navigate("/team")} variant="contained" color="primary">
        My Teams <span style={{paddingLeft: "15px"}}><SendIcon/></span>
      </Button>
      

                    </div>


                    <div data-aos="flip-right" className={classes.images}>
                        <img src={img} alt=""/>
                    </div>

         
        </div>
       

    )
}

export default HomePart;
