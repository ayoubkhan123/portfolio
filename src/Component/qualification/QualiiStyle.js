import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) =>({
    main:{
        // width: "100%",
        height: "auto",
        display: "grid",
        justifyContent: "center",
        padding: "40px 0px",
        overflow: "hidden",
        marginBottom: "10px",
        [theme.breakpoints.down("sm")]:{
                height: "auto",
                marginBottom: "40px",

        },
    },
    
    root: {
        flexGrow: 1,
        // width: "100%",
        // height: "auto",
        height: "400px",
        backgroundColor: theme.palette.background.paper,
        display: "grid",
        justifyContent: "center",
        // alignItems: "center",
      },
      root1: {
        height: 300,
        position: "relative",
        marginLeft: "30px",
        [theme.breakpoints.down("xs")]:{
            width: "315px",
            margin: "0px -41px",
            padding: "0px 0px",
        },
        "& h4":{
            position: "absolute",
            top: "0px",
            left: "50px",
            right: "300px",
            fontSize: "15px",
            fontWeight: "bold",

        },
        "& h5":{
            position: "absolute",
            top: "65px",
            left: "170px",
            right: "0px",
            fontSize: "15px",
            fontWeight: "bold",


        },
        "& h6":{
            position: "absolute",
            top: "165px",
            left: "50px",
            right: "40px",
            fontSize: "15px",
            fontWeight: "bold",


        },
        "& h3":{
            position: "absolute",
            top: "270px",
            left: "170px",
            right: "0px",
            fontSize: "15px",
            fontWeight: "bold",

        },
      },



}))

export default useStyles;