import React,{useRef,useEffect} from 'react';
import useStyles from "./ContactStyle";
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import {Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import emailjs from "emailjs-com";
import Aos from "aos";
import SendIcon from '@material-ui/icons/Send';
import "aos/dist/aos.css";

const Contact = () => {
    const classes = useStyles();
    useEffect(() =>{
        Aos.init({duration: 2000})
    },[]);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_2mx54nf', 'template_clsn8xe', form.current,
        'ZwVSUMz1u5z74S1AS')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
      const Submit = () =>{
          alert("Successfully Submmitted We Will Contact You Very Soon")
      }
    
  return(
      <div className={classes.contactMain}>
            <div data-aos="zoom-in-right" className={classes.contactText}><h1>Contact Me</h1>
            <h5>Get in touch</h5>
            </div>

            <div  className={classes.contactFlex}>
                <div data-aos="flip-right">
                <div  className={classes.DataFlex}>
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






                <div  className={classes.InputFlex}>
                {/* <div> */}
                <form ref={form} onSubmit={sendEmail} data-aos="fade-down">
                <div className={classes.root}>
                {/* <form className={classes.root} noValidate autoComplete="off"> */}
      <TextField style={{marginBottom: "10px",}} required  id="filled-basic" label="Name" name="name" variant="filled" fullWidth/>
      <TextField id="filled-basic" label="Email" required  name="email" variant="filled" fullWidth />
    {/* </form> */}
    </div>
                {/* </div> */}
                <div className={classes.root1} >
                {/* <form className={classes.root1} noValidate autoComplete="off"> */}
                <TextField required style={{marginBottom: "20px"}} id="filled-basic" label="Project" name="message"  variant="filled" />

    <TextField
    id="outlined-multiline-static"
    label="Message"
    name="message"
    required 
    multiline
    rows={10}
    //   defaultValue="Default Value"
    variant="outlined"
      />
                <Button color="primary" variant="outlined" type="submit" value="send" className={classes.btn_last}>Submit<SendIcon style={{marginLeft: "10px",color: "black"}}/></Button>

    {/* </form> */}
    
                </div>
</form>
                </div>
           </div>


      </div>
  )
};

export default Contact;
