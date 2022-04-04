import React,{useRef,useEffect, useState} from 'react';
import useStyles from "./ContactStyle";
import {Formik,Form,Field,ErrorMessage,FieldArray,FastField} from "formik";
import * as Yup from "yup"; 
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import {Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import emailjs from "emailjs-com";
import Aos from "aos";
import SendIcon from '@material-ui/icons/Send';
import "aos/dist/aos.css";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const Contact = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  //   const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
const onSubmit = (values, onSubmitProps) => {
  console.log("Form data", values)
  console.log("submit props", onSubmitProps)
  onSubmitProps.setSubmitting(false)
  onSubmitProps.resetForm()
}
  const handleOpen = () => {
    setOpen(true);   
  };
  const handleClose = () => {
    setOpen(false);
  };
    useEffect(() =>{
        Aos.init({duration: 2000})
    },[]);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_c9ol0er', 'template_f8ug3fe', form.current,
        'ZwVSUMz1u5z74S1AS')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
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
                    <div> <h3>Email</h3><h5>ayubbkhan05<br/>@gmail.com</h5></div>
                </div>

                <div className={classes.DataFlex}>
                <div> <h4><LocationOnIcon style={{fontSize: "50px"}}/></h4></div>
                    <div> <h3>Location</h3><h5>Rawalpindi pakistan</h5></div>
                </div>

                </div>






                <div  className={classes.InputFlex}>
                <form method="GET" ref={form} onSubmit={sendEmail} data-aos="fade-down">
                <div className={classes.root}>
      <TextField style={{marginBottom: "10px",}} required  id="filled-basic" label="Name" type="name" name="name" variant="filled" fullWidth/>
      
      <TextField id="filled-basic" type="email" name="email" label="Email" required variant="filled" fullWidth />  
    </div>
      <div className={classes.root1} >
      <TextField required style={{marginBottom: "20px"}} id="filled-basic" label="Project" type="message" variant="filled" />

    <TextField id="outlined-multiline-static" label="Message" name="message" required multiline rows={10} variant="outlined"/>

      <div>
       <Button color="primary" variant="outlined" type="submit" value="Send" className={classes.btn_last}>Submit<SendIcon style={{marginLeft: "10px",color: "black"}}/></Button>
  
      {/* <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Successfully</h2>
            <p id="transition-modal-description">We will contact you very soon.Thanks</p>
          </div>
        </Fade>
      </Modal> */}
    </div>
    
                </div>
</form>
                </div>
           </div>


      </div>
  )
};

export default Contact;
