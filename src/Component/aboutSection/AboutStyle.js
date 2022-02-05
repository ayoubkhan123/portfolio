import {makeStyles} from "@material-ui/core";
const useStyles = makeStyles((theme) =>({
mainAbout:{
    width: "100%",
    height: "100vh",
    // padding: "100px 0px",
    // paddingBottom: "60px",
    // paddingBottom: "60px",
   [theme.breakpoints.down("sm")]:{
            height: "auto !important",
   },

},
aboutText:{
    textAlign: "center",
    paddingBottom: "40px",
    paddingTop: "30px",
    [theme.breakpoints.down("xs")]:{
        "& h1":{
            fontSize: "40px",
        },
},
    "& h1":{
        fontWeight: "bold",
       
    },
},
aboutLeft:{
    margin: "0px 10px",

    "& img":{
        width: "300px",
        height: "360px",
        borderRadius: "5px",
        [theme.breakpoints.down("xs")]:{
            width: "100%",
            },
    },
},
aboutRight:{
    // width: "380px",
    textTransform: "capitalize",
    margin: "0px 10px",
    "& button":{
            marginBottom: "60px",
    },

},

flexWrap:{
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap-reverse",
    // padding: "50px 0px",
},
numsWrap:{
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "25px",
    // gap: "20px",
},


}))

export default useStyles;