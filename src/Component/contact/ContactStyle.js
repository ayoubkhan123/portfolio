import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) =>({
contactMain:{
    height: "auto",
    width: "100%",
    paddingTop: "60px",
    [theme.breakpoints.down("sm")]:{
        height: "auto",
    },
},
InputFlex:{
paddingTop: "60px",
},
contactText:{
    textAlign: "center",
    // width: "200px",
    // color: "white",
    fontWeight: "bold",
},
root: {
    // display: "block !important",
    display: "block",
    width: "456px",
    color: "white !important",
    margin: "10px 0px",
    [theme.breakpoints.down("xs")]:{
        width: "90% !important",
        // display: "block",
        margin: "0px auto",
        // justifyContent: "center",
        marginBottom: "10px",
        '& > *': {
          // margin: theme.spacing(1),
          // width: '30ch',
          
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
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      '& > *': {
        // margin: theme.spacing(1),
        width: '90% !important',
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
    paddingBottom: "50px",
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
btn_last:{
    // textAlign: "center",
    marginTop: "10px",
    width: "160px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]:{
      width: "160px !important",

    },
    
},
modal: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},
paper: {
  backgroundColor: theme.palette.background.paper,
  border: '2px solid #000',
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2, 4, 3),
},



}))

export default useStyles;