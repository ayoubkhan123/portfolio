import React from 'react';
import useStyles from "./ContactStyle";
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
const Contact = () => {
    const classes = useStyles();
  return(
      <div className={classes.contactMain}>
            <div className={classes.contactText}><h1>Contact Me</h1>
            <h5>Get in touch</h5>
            </div>

            <div className={classes.contactFlex}>
                <div>
                <div className={classes.DataFlex}>
                <div> <h4><CallIcon style={{fontSize: "50px"}}/></h4></div>
                    <div> <h3>Call Me</h3><h5>+923465066304</h5></div>
                </div>

                <div className={classes.DataFlex}>
                <div> <h4><EmailIcon style={{fontSize: "50px"}}/></h4></div>
                    <div> <h3>Email</h3><h5>khan@gmail.com</h5></div>
                </div>

                <div className={classes.DataFlex}>
                <div> <h4><LocationOnIcon style={{fontSize: "50px"}}/></h4></div>
                    <div> <h3>Location</h3><h5>Rawalpindi pakistan</h5></div>
                </div>

                </div>






                <div className={classes.InputFlex}>
                {/* <div> */}
                <form className={classes.root} noValidate autoComplete="off">
      <TextField style={{margin: "0px 10px 15px 0px",}} id="filled-basic" label="Name" variant="filled" fullWidth/>
      <TextField id="filled-basic" label="Email" variant="filled" fullWidth />
    </form>
                {/* </div> */}
                <div>
                <form className={classes.root1} noValidate autoComplete="off">
                <TextField style={{marginBottom: "40px"}} id="filled-basic" label="Project" variant="filled" />

    <TextField
    id="outlined-multiline-static"
    label="Message"
    multiline
    rows={10}
    //   defaultValue="Default Value"
    variant="outlined"
      />
    </form>
                </div>

                </div>


            </div>



      </div>
  )
};

export default Contact;
