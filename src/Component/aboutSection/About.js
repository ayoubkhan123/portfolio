import React from 'react';
import useStyles from "./AboutStyle";
import img1 from "../../Assets/DSC_5399.jpg";
import {Button} from "@material-ui/core";
import GetAppIcon from '@material-ui/icons/GetApp';

const About = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainAbout}>
        <div className={classes.aboutText}>
            <h1>About Me</h1>
            <h5>My introduction</h5>
        </div>
        <div className={classes.flexWrap}>
                <div className={classes.aboutLeft}>
                    <img src={img1}/>
                </div>

                <div className={classes.aboutRight}>
        <p>web developer, with extension knowledge <br/>and years of experience working in web<br/>technologies and Ui / Ux design devlivering<br/> quality work.</p>
              <div className={classes.numsWrap}>
              <div>
                  <h2>08+</h2>
                  <h6>years <br/> experience</h6>
              </div>
              <div>
                  <h2>20+</h2>
                  <h6>completed <br/>projects</h6>
              </div>
              <div>
                  <h2>08+</h2>
                  <h6>companies<br/> worked</h6>
              </div>


              </div>
              <Button variant="contained" color="primary">Download Cv <GetAppIcon/></Button>
                </div>

        </div>



            
        </div>
    )
}

export default About;
