import React from 'react';
import useStyles from "./FooterStyle";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';
import CopyrightIcon from '@material-ui/icons/Copyright';

const Footer = () => {
    const classes = useStyles();
  return (
    <div className={classes.mainFooter}>
        <div className={classes.footerBase}>
        <div>
            <h1>Code Opacity</h1>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, <br/> eum? adipisicing elit.</h5>

            <div className={classes.icons}>
            <a href="https://www.facebook.com/ayub.khanhunzai"><FacebookIcon style={{cursor: "pointer",fontSize: "35px"}}/></a>
            <TwitterIcon style={{cursor: "pointer",fontSize: "35px"}}/>
            <a href="https://www.instagram.com/ayub_khan011/"><InstagramIcon style={{cursor: "pointer",fontSize: "35px"}}/></a>
            <PersonIcon style={{cursor: "pointer",fontSize: "35px"}}/>
            <MessageIcon style={{cursor: "pointer",fontSize: "35px"}}/>
            </div>
            </div>

        </div>
        <div className={classes.footerLast}>

       <h5>Copyright <CopyrightIcon/>CodeOpacity. Designed by <span style={{color: "gray"}}>AYYub khan</span></h5>

        </div>





    </div>
  )
}

export default Footer;