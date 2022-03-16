import {makeStyles} from "@material-ui/core";
const useStyles = makeStyles((theme) =>({
mainAbout:{
    width: "100%",
    height: "45rem",
    background: "linear-gradient( 262deg , #e6fffb, #e1f9f8)",
   [theme.breakpoints.down("sm")]:{
            height: "auto",
            padding: "40px 0px",
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
        marginTop: "40px",
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
download:{
    textDecoration: "none",
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