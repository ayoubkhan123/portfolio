import {makeStyles} from "@material-ui/core";
const useStyles = makeStyles((theme) =>({
boxMain:{
height: "auto",
display: "flex",
justifyContent: "center",
alignItems: "center",
background: "#f4f2ff",
padding: "50px 0px",
background: "linear-gradient(to left, #8f94fb, #4e54c8) !important",

},
insideBox:{
        height: "400px",
        width: "80%",
        [theme.breakpoints.down("sm")]:{
                minHeight: "650px",
                width: "90%",
                textAlign: "center",
                padding: "10px 0px",
                margin: "0px auto",
                display: "grid",
                "& h1":{
                        display: "flex",
                        justifyContent: "center",
                },
                justifyContent: "center",
        },
        background: "#301e1e",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        color: "white",
        "& button":{
            background: "primary",
                fontWeight: "bold",
                marginTop: "30px",
                height: "50px",
        },
        "& h1":{
            display: "flex",
            alignItems: "center",
            },
        "& h5":{
            paddingTop: "20px",
        },
          "& img":{
            borderRadius: "10px",
            width: "290px",
            height: "260px",
              [theme.breakpoints.down("xs")]:{
                width: "80%",

              },
            },
                
        
},


}))

export default useStyles;