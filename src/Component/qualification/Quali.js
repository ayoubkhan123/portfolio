import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useStyles from './QualiiStyle';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import Slider from '@material-ui/core/Slider';




const marks = [
  {
    value: 0,
    // label: '0°C',
  },
  {
    value: 20,
    // label: '20°C',
  },
  {
    value: 37,
    // label: '37°C',
  },
  {
    value: 100,
    // label: '100°C',
  },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function valuetext(value: number) {
  return `${value}°C`;
}
function Quali() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
      <div className={classes.main}>
      <div style={{textAlign: "center"}}>
        <h1>Qualification</h1>
        <h5>My Personal Journey</h5>
      </div>
    <div className={classes.root}>
      <AppBar position="static" style={{height: "50px",padding: "0px 50px"}}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Education"  {...a11yProps(0)} />
          <Tab label="Work" {...a11yProps(1)} />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Typography id="vertical-slider" gutterBottom>
        {/* Education */}
      </Typography>
      <div className={classes.root1}>
      <h4>Ui/Ux</h4>
      <h4 style={{fontSize: "12px",paddingTop: "26px"}}>codeacedamy<br/><br/>2019-2022</h4>
      <h5>Frontend Developer</h5>
      <h5 style={{fontSize: "12px",paddingTop: "26px"}}>codecedamy <br/><br/>2019 - 2022</h5>

      <h6>Web design</h6>
      <h6 style={{fontSize: "12px",paddingTop: "26px"}}>codecedamy <br/><br/>2019 - 2022</h6>

      <h3>Web development</h3>
      <h3 style={{fontSize: "12px",paddingTop: "26px"}}>codecedamy <br/><br/>2019 - 2022</h3>

        <Slider style={{marginLeft: "138px"}}
        disabled
          orientation="vertical"
          defaultValue={[100, 70, 35, 0]}
          aria-labelledby="vertical-slider"
          getAriaValueText={valuetext}
          marks={marks}
        />
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className={classes.root1}>
      <h4>Frontend</h4>
      <h4 style={{fontSize: "12px",paddingTop: "26px"}}>codeacedamy<br/><br/>2019-2022</h4>
      <h5 style={{paddingTop: "20px"}}>Software engineer</h5>
      <h5 style={{fontSize: "12px",paddingTop: "45px"}}>codecedamy <br/><br/>2019 - 2022</h5>

      <h6 style={{paddingTop: "20px"}}>Ui designer</h6>
      <h6 style={{fontSize: "12px",paddingTop: "45px"}}>codecedamy <br/><br/>2019 - 2022</h6>

      {/* <h3>Web development</h3>
      <h3 style={{fontSize: "12px",paddingTop: "26px"}}>codecedamy <br/><br/>2019 - 2022</h3> */}
      <Slider style={{marginLeft: "138px"}}
        disabled
          orientation="vertical"
          defaultValue={[100, 70, 35, 0]}
          aria-labelledby="vertical-slider"
          getAriaValueText={valuetext}
          marks={marks}
        />
      </div>
      </TabPanel>
     
    </div>
    </div>
  );
}

export default Quali;