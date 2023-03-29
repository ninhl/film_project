import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./styles.module.css";
import { filmData } from "../../constants/fakeData";
import MovieSlider from "../MovieSlider";
import { apiClient } from "../../services/serviceFetch";
import { useQuery, QueryClient } from "react-query";
import { DEFAULT_QUERY_OPTIONS } from "../../constants/query";

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

export default function ListMoviesTab() {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const {isLoading:isUpComingLoading ,isError,data: upComing,error,} = useQuery("upComingg", apiClient.fetchApiMovieUpcoming, {...DEFAULT_QUERY_OPTIONS,enabled: value==0});
  const {isLoading: isTopRatedLoading, data: topRated } = useQuery("topRated",apiClient.fetchApiMovieTopRated,{...DEFAULT_QUERY_OPTIONS,enabled: value==1});
  const {isLoading: isPopularLoading, data: popular } = useQuery("Popular",apiClient.fetchApiMoviePopular,{...DEFAULT_QUERY_OPTIONS,enabled: value==2});
  const {isLoading: isNowPlayingLoading, data: nowPlaying } = useQuery("nowPlaying",apiClient.fetchApiMovieNowPlaying,{...DEFAULT_QUERY_OPTIONS, enabled: value==3});
  return (
    <Box className={styles.tabContainer}>
      <Box sx={{ width: "100%", maxWidth: "1240px" }}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Up Comming" className={styles.tab}/>
            <Tab label="Top Rated" />
            <Tab label="Popular" />
            <Tab label="Now Playing"  />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <MovieSlider movieData={upComing?.data.results} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MovieSlider movieData={topRated?.data.results} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <MovieSlider movieData={popular?.data.results} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <MovieSlider movieData={nowPlaying?.data.results} />
        </TabPanel>
      </Box>
    </Box>
  );
}
