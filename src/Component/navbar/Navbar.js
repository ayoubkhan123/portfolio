import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {NavDropdown,Button,FormControl,Form,Nav,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
// import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles,} from '@material-ui/core/styles';
import img1 from "../../Assets/kisspng-def-con-logo-gray-wolf-5b01f8e1d0fce7.676530041526855905856.jpg";


const useStyles = makeStyles((theme) =>({
    links:{
      // marginLeft: "30px", 
      color: "white",
     
    },
    mainNavbar:{
      background: "#4B79A1",  /* fallback for old browsers */
      background: "linear-gradient(to right, #283E51, #4B79A1)",  /* Chrome 10-25, Safari 5.1-6 */
      /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      
    },
    link:{
      fontSize: "18px",
      "&:hover":{
        color: "orange",
        // borderBottom: "3px solid blue",
      },
      color: "white",
      fontWeight: "bold",
        padding: "0px 25px",
        textDecoration: "none", 
        [theme.breakpoints.down("sm")]:{
            display: "block",
            fontSize: "25px",
            paddingBottom: "30px",
            overFlow: "hidden",
            "&:hover":{
              color: "black",
            border: "none",
            },
        },
    },

}))

const Navbar1 = () => {
    const classes = useStyles();
    return (
        <div className="mainNavbar">

<Navbar bg="light" expand="lg" style={{background: "linear-gradient(to right, #283E51, #4B79A1)"}}>
  <Container fluid>
    <Navbar.Brand href="#" style={{fontSize: "25px",fontWeight: "bold", color: "white"}}>AYYub khan 
    <img src={img1} style={{width: "80px",height: "auto", borderRadius: "50%",marginLeft: "20px"}}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
    
   
      </Nav>
      <Form className="d-flex">
        {/* <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-primary">Search</Button> */}
        <nav className={classes.links}>
            <Link className={classes.link} to="/">Home</Link>
            <Link className={classes.link} to="/about">About</Link>
            <Link className={classes.link} to="/skill">Skills</Link>
            <Link className={classes.link} to="/services">Services</Link>
            <Link className={classes.link} to="/portfolio">Team</Link>

            <Link className={classes.link} to="/contact">Contact me</Link>
            <Button variant="warning" color="primary">Hire Me</Button>
            </nav>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
    )
}

export default Navbar1;
