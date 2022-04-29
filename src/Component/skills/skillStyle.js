import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles((theme) =>({
    skill_main:{
        width: "100%",
        height: "auto",
        paddingTop: "40px",
        [theme.breakpoints.down("sm")]:{
              height: "auto",
        },
        
    },
    heading:{
        color: "white !important",
    },
    skill_text:{
        textAlign: "center",
        paddingBottom: "20px",
    "& h1":{
    fontWeight: "bold",
    },
    },
    Accordion2:{
        width: "90%",
        textTransform: "capitalize", 
        background: "linear-gradient(to left, #8f94fb, #4e54c8) !important",

        "& h5":{
              
                "& span":{
                    display: "flex",
                    justifyContent: "flex-end",
                    fontSize: "18px",
                },
        },

    },
    flexWraps:{
        width: "100%",
        overflow: "hidden",
        display: "flex",
        // gridTemplateColumns: "repeat(2, 300px)",
        justifyContent: "center",
        alignItems: "center",

    },


}))

export default useStyles;