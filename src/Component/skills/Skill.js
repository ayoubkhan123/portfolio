import React from 'react';
import useStyles from "./skillStyle";
import { Accordion,Typography,AccordionDetails,AccordionSummary,CircularProgress} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CodeIcon from '@material-ui/icons/Code';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import SkillData from "./SkillData";



const Skill = () => {
    const classes = useStyles();
    return (
        <div className={classes.skill_main}>
        <div className={classes.skill_text}>
            <h1>Skills</h1>
            <h5>My technical level</h5>
        </div>
        <div className={classes.flexWraps}>
        <div className={classes.Accordion2}>
        {
            SkillData.map((elem) =>{
                return(
                    <>
                    <Accordion style={{marginBottom: "50px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><CodeIcon/> <span style={{fontWeight: "bold"}}>{elem.title}</span><br/>
          <span style={{color: "gray",fontSize: "15px",paddingLeft: "30px"}}>{elem.years}</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{width: "100%"}}>
        <h5>{elem.html}<span>90%</span></h5>
        <ProgressBar now={90} />
                <br/>
        <h5>{elem.css}<span>85%</span></h5>
        <ProgressBar now={85} />
        <br/>
        <h5>{elem.js}<span>60%</span></h5>
        <ProgressBar now={60} />
        <br/>
        <h5>{elem.react}<span>70%</span></h5>
        <ProgressBar now={70} />

          </Typography>
        </AccordionDetails>
      </Accordion>
                    </>

                )
            })
        }

        </div>

      
        </div>
        </div>
    )
}

export default Skill;
