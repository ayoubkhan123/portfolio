import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) =>({
mainFooter:{
    width: "100%",
    // height: "30rem",
    background: "gray",
    paddingTop: "40px",
    [theme.breakpoints.down("xs")]:{
            height: "auto",
    },
//     display: "flex",
// justifyContent: "center",
// alignItems: "center",

},
footerBase:{
textAlign: "center",
color: "white",

},

icons:{
    height: "120px",
    padding: "0px 50px",
    display: "flex",
    justifyContent: "space-around",
    // gap: "30px",
    alignItems: "center",
    // margin: "0px 30px",
    [theme.breakpoints.down("sm")]:{
        width: "100%",

    },
    width: "50%",
    margin: "0px auto",
   
},
footerLast:{
        // width: "100%",
        color: "white",
        textAlign: "center",
        height: "80px",
        padding: "30px 0px",
        background: "black",
},



}))



export default useStyles;