import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles((theme) =>({
    skill_main:{
        width: "100%",
        height: "40rem",
        paddingTop: "40px",
        [theme.breakpoints.down("sm")]:{
              height: "auto",
        },
        
    },
    skill_text:{
        textAlign: "center",
    "& h1":{
    fontWeight: "bold",
    },
    },
    Accordion2:{
        width: "90%",
        textTransform: "capitalize",
      
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