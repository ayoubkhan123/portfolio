import React,{ useEffect} from 'react';
import useStyles from "./AboutStyle";
import img1 from "../../Assets/DSC_5.JPG";
import {Button} from "@material-ui/core";
import GetAppIcon from '@material-ui/icons/GetApp';
import Aos from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import Mypdf from "../../Assets/ABIGAIL STANFORD.pdf";

const About = () => {
    const classes = useStyles();
    useEffect(() =>{
        Aos.init({duration: 2000})
    },[]);
    return (
        <div className={classes.mainAbout}>
        <div data-aos="fade-down" className={classes.aboutText}>
            <h1>About Me</h1>
            <h5>My introduction</h5>
        </div>
        <div className={classes.flexWrap}>
                <div className={classes.aboutLeft}>
                    <img data-aos="flip-up" src={img1}/>
                </div>

                <div data-aos="fade-up" className={classes.aboutRight}>
        <p>web developer, with extension knowledge <br/>and years of experience working in web<br/>technologies and Ui / Ux design devlivering<br/> quality work.</p>
              <div className={classes.numsWrap}>
              <div>
                  <h2><CountUp start={0} end={2} duration={5} startOnMount={false} />+</h2>
                  <h6>years <br/> experience</h6>
              </div>
              <div>
                  <h2><CountUp start={0} separator={0} end={65} duration={5} startOnMount={false} />+</h2>
                  <h6>completed <br/>projects</h6>
              </div>
              <div>
                  <h2><CountUp start={0} separator="." end={4} duration={5} startOnMount={false} />+</h2>
                  <h6>companies<br/> worked</h6> 
              </div>


              </div>
              <a href={Mypdf} className={classes.download} download="My_File.pdf"><Button variant="contained" color="primary">Download Cv<GetAppIcon/></Button></a>
                </div>

        </div>



            
        </div>
    )
}

export default About;
