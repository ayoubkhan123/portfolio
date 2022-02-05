import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {NavDropdown,Button,FormControl,Form,Nav,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
// import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles,} from '@material-ui/core/styles';
import img1 from "../../Assets/elrond-logo@logotyp.us.svg";


const useStyles = makeStyles((theme) =>({
    links:{
      marginLeft: "30px", 
     
    },
    link:{
      "&:hover":{
        color: "black",
        borderBottom: "2px solid red",
        paddingBottom: "5px",
      },
      color: "orange",
      fontWeight: "bold",
        padding: "0px 20px",
        textDecoration: "none", 
        [theme.breakpoints.down("sm")]:{
            display: "block",
            "&:hover":{
              color: "black",
            border: "none",
              paddingBottom: "5px",
            },
        },
    },

}))

const Navbar1 = () => {
    const classes = useStyles();
    return (
        <div className="main-navbar">

<Navbar bg="light" expand="lg" sticky="top">
  <Container fluid>
    <Navbar.Brand href="#" style={{fontSize: "25px",fontWeight: "bold"}}>AYYub khan 
    <img src={img1} style={{width: "50px",height: "auto"}}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
      <nav className={classes.links}>
            <Link className={classes.link} to="/">Home</Link>
            <Link className={classes.link} to="/about">About</Link>
            <Link className={classes.link} to="/skill">Skills</Link>
            <Link className={classes.link} to="/services">Services</Link>
            <Link className={classes.link} to="/portfolio">Portfolio</Link>

            <Link className={classes.link} to="/contact">Contact me</Link>
            </nav>
   
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-primary">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
    )
}

export default Navbar1;
