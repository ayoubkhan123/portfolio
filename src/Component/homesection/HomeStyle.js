import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) =>({
HomeMain:{
    width: "100%",
    height: "90vh",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]:{
        height: "auto",
        // paddingBottom: "50px",
        // background: "green",

        },
},
mainText:{
    padding: "90px 0px",

    [theme.breakpoints.down("xs")]:{
        // width: "80%",
        textAlign: "center",
        },
    "& button":{
        width: "200px",
        height: "40px",
    },
    "& h1":{
        fontSize: "45px",
        fontWeight: "bold",
        paddingBottom: "10px",
    },
    "& h4":{
        // paddingBottom: "2px",
    },
},
images:{
    width: "400px",
    height: "340px",
    background: "linear-gradient(113.49deg, #984D38 -30.3%, #181E41 58.12%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    borderRadius: "50%",
    margin: "0px 10px",
    "& img":{
        width: "350px",
        height: "300px",
        borderRadius: "50%",
        [theme.breakpoints.down("xs")]:{
        width: "80%",
        },

    },
   
},

}))

export default useStyles;