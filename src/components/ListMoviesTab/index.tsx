import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./styles.module.css";
import { filmData } from "../../constants/fakeData";
import MovieSlider from "../MovieSlider";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
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
        <Box>
          <Typography component="div" className={styles.tab__center}>
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

// function a11yProps(index: number) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

export default function ListMoviesTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className={styles.tabContainer}>
      <Box sx={{ width: "100%", maxWidth: "1240px" }}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="College Campus" className={styles.tab}/>
            <Tab label="On-Board Movies"  />
            <Tab label="Parks & Recreation"  />
            <Tab label="Religious Organizations" />
            <Tab label="More" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <MovieSlider movieData={filmData} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MovieSlider movieData={filmData} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <MovieSlider movieData={filmData} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <MovieSlider movieData={filmData} />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <p>aa</p>
        </TabPanel>
      </Box>
    </Box>
  );
}
