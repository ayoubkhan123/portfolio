import {makeStyles} from "@material-ui/core";
const useStyles = makeStyles((theme) =>({
mainService:{
    width: "100%",
    height: "46rem",
    display: "grid",
    justifyContent: "center",
    paddingBottom: "20px",
    [theme.breakpoints.down("sm")]:{
        height: "auto",
    },
    alignItems: "center",
    // background: "green",
},
  root: {
    width: "345px",
    height: "300px",
    display: "grid",
    alignItems: "flex-end",
    [theme.breakpoints.down("xs")]:{
        width: "80%",
    },
    
    boxShadow: "1px 2px 6px 1px",
  },
  media: {
    height: 140,
  },
  mainData:{
    // width: "100%",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "30px",
    // padding: "50px 0px",
  },


}))

export default useStyles;