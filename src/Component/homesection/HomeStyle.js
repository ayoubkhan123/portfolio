import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) =>({
HomeMain:{
    width: "100%",
    height: "35rem",
    // paddingTop: "100px",
    // background: "linear-gradient( 262deg , #c2cfe3, #f8f9fc)",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]:{
        height: "auto !important",
        paddingBottom: "30px",

        },
},
mainText:{
    padding: "90px 0px",
            textShadow: "0.025em 0.025em 0 yellow, 0.05em 0.05em 0 blue, 0.075em 0.075em 0 red, 0.1em 0.1em 0 black",
    "& button":{
        width: "200px",
        height: "40px",
        fontWeight: "bold",
        color: "white",
    },
    "& h1":{
        fontSize: "45px",
        fontWeight: "bold",
        paddingBottom: "10px",
        textShadow: "0.025em 0.025em 0 yellow, 0.05em 0.05em 0 blue, 0.075em 0.075em 0 red, 0.1em 0.1em 0 black",
    },
    "& h4":{
        textShadow: "0.025em 0.025em 0 yellow, 0.05em 0.05em 0 blue, 0.075em 0.075em 0 red, 0.1em 0.1em 0 black",

    },
},

images:{
    width: "400px",
    animationName: "example",
    height: "340px",
    clipPath: "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)",
    background: "linear-gradient(113.49deg, #984D38 -30.3%, #181E41 58.12%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    borderRadius: "50%",
    margin: "0px 10px",
    "& img":{
        width: "350px",
        height: "300px",
        clipPath: "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)",
        borderRadius: "50%",
        [theme.breakpoints.down("xs")]:{
        width: "80%",
        },
    },
   
},

}))

export default useStyles;