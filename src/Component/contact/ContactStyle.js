import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) =>({
contactMain:{
    height: "44rem",
    width: "100%",
    paddingTop: "60px",
    [theme.breakpoints.down("sm")]:{
        height: "auto",
    },
},
// InputFlex:{
// width: "100%",
// display: "grid",
// justifyContent: "center",
// padding: "0px 50px",
// },
contactText:{
    textAlign: "center",
    // width: "200px",
    // color: "white",
    fontWeight: "bold",
},
root: {
    // display: "block !important",
    display: "flex",
    width: "465px",
    marginBottom: "20px",
    [theme.breakpoints.down("xs")]:{
        width: "30ch !important",
        // display: "block",
        margin: "0px auto",
        // justifyContent: "center",
        // marginBottom: "10px",
        '& > *': {
          margin: theme.spacing(1),
          width: '30ch',
          
        },
    },
    '& > *': {
      margin: theme.spacing(1),
      width: '46ch',
      color: "red",

    },

  },
  root1: {
    width: "400px",
    // marginBottom: "30px",
    [theme.breakpoints.down("xs")]:{
      width: "100% !important",
      display: "flex",
      flexDirection: "column",
      '& > *': {
        // margin: theme.spacing(1),
        width: '30ch !important',
      },
    },
    '& > *': {
      margin: theme.spacing(1),
      width: '53ch',
    },

  },
  MuiInputBaseInput:{
      width: "1000px",
  },
  contactFlex:{
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    alignItems: "center",
    flexWrap: "wrap-reverse",
    margin: "0px auto",
    textAlign: "center",
  },
DataFlex:{
    // width: "300px",
    height: "150px",
    // lineHeight: "60px",
    // background: "pink",
    margin: "20px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
},
input1:{
  width: "200px",
  height: "50px",
  outlined: "none",
},



}))

export default useStyles;