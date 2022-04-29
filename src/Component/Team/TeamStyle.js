import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) =>({
teamMain:{
    width: "100%",
    height: "38rem",
    [theme.breakpoints.down("sm")]:{
        height: "auto",
        // marginTop: "50px",
    },
},
Teamtext:{
    textAlign: "center",
    padding: "50px 0px",
},
root: {
    width: 345,
    height: "auto",
    margin: "50px 20px",
    // boxShadow: "1px 2px 6px 1px",
    textAlign: "center",
    display: "grid",
    background: "#aeb6e1",
    justifyContent: "center",
    color: "white !important",
     alignItems: "center",
    [theme.breakpoints.down("sm")]:{
    display: "none",
},
    "&:hover":{
        background: "cyan",
        
    },
    
  },
  root3: {
    width: 345,
    height: "auto",
    margin: "50px 20px",
    boxShadow: "1px 2px 6px 1px",
    textAlign: "center",
    display: "grid",
    justifyContent: "center",
     alignItems: "center",
         display: "none",
    [theme.breakpoints.down("sm")]:{
    display: "block",
},
    "&:hover":{
        background: "cyan",
        color: "white !important",
    },
    
  },
  flexx:{
display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
  },
  images:{

    "& img":{
            borderRadius: "50%",
            height: "150px",
            width: "160px",
            border: "5px solid orange",
            marginTop: "15px",
            
    },
  },

}))

export default useStyles;