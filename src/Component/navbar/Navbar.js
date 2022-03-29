import React,{useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {NavDropdown,Button,FormControl,Form,Nav,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
// import MenuIcon from '@material-ui/icons/Menu';
import {useNavigate} from "react-router-dom";
import { makeStyles,} from '@material-ui/core/styles';
import img1 from "../../Assets/kisspng-def-con-logo-gray-wolf-5b01f8e1d0fce7.676530041526855905856.jpg";


const useStyles = makeStyles((theme) =>({
    
    mainNavbar:{
      zIndex: "1000",
      position: "relative",
      top: "0",

    },
  
    link:{
      fontSize: "18px",
      position: "relative",
      width: "100%",
      "&:hover":{ 
        color: "orange",
      },
      color: "black",
      fontWeight: "bold",
        padding: "0px 25px",
        textDecoration: "none", 
        [theme.breakpoints.down("sm")]:{
            display: "block",
            fontSize: "25px",
            paddingBottom: "30px",
            overFlow: "hidden",
            "&:hover":{
              // color: "black",
            border: "none",
            },
        },
    },
    navbar2:{
      position: "fixed",
      top: "0",
      left: "0",
      fontSize: "25px",
      fontWeight: "bold",
      //  color: "white !important",
       "& :link":{
        // color: "white !important",
       },
       zIndex: "10000",
       transition: "0.8s all ease-in-out",
       background: "#4B79A1 !important",
      width: "100%",
    },
    navbar_bg:{
        position: "sticky",
        top: "0",
        left: "0",
        fontSize: "25px",
        fontWeight: "bold",
        //  color: "red !important",
         zIndex: "10000",
        width: "100%",
        background: "linear-gradient( 262deg , #c2cfe3, #f8f9fc) !important",
        "& links":{

        "& :link":{
        color: "black !important",
      //   '& > *' : {
      //     color: 'red !important',
      //     fontWeight: 600
      // }
       }
      },

    },

}))

const Navbar1 = () => {
    const classes = useStyles();
    const navigate = useNavigate()

      const [color, setColor] = useState(false)
      const changeColor = () =>{
          if(window.scrollY >= 90){
              setColor(true)
          }
          else{
            setColor(false)
          }
      }
      console.log(window.scrollY)
      window.addEventListener("scroll", changeColor)
    
    return (
        <header className="mainNavbar">

<Navbar id="menu" className={`${classes.navbar2}  ${!color && classes.navbar_bg}`} bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#" style={{color: "white"}}>AYYub
    <img src={img1} alt="" style={{width: "80px",height: "auto", borderRadius: "50%",marginLeft: "20px"} }/></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
    
   
      </Nav>
      <Form>
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
            <Button onClick={() => {navigate("/contact")}} variant="warning" color="primary">Hire Me</Button>
            </nav>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

        </header>
    )
}

export default Navbar1;
