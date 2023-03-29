import DefaultHeader from "@/components/Common/DefaultHeader";
import DefaultHeaderBlock from "@/components/Common/DefaultHeaderBlock";
import MovieCard from "@/components/Common/MovieCard";
import SubMovieCard from "@/components/Common/SubMovieCard";
import MainCarousel from "@/components/MainCarousel";
import styles from "./styles.module.css";
import { Grid } from "@mui/material";
import { DEFAULT_QUERY_OPTIONS } from "@/constants/query";
import { apiClient } from "@/services/serviceFetch";
import Box from "@mui/material/Box";
import { useQuery } from "react-query";
import { filmData } from "../../constants/fakeData";
import Observer from "@researchgate/react-intersection-observer";

const UpComingPage = () => {
  const {
    isLoading: isUpComingLoading,
    isError,
    data: upComing,
    error,
  } = useQuery("upComing", apiClient.fetchApiMovieUpcoming, {
    ...DEFAULT_QUERY_OPTIONS,
  });
  const handleChange = () => {};
  return (
    <Box className={styles.container}>
      <DefaultHeader />
      <MainCarousel movieData={filmData} />
      <DefaultHeaderBlock className={styles.header__block}>
        <h1 className={styles.headerBlock__title}>MARKETS WE SERVE</h1>
      </DefaultHeaderBlock>
      <Box className={styles.listMovie}>
        {upComing?.data.results.map((data: any) => (
          <SubMovieCard data={data} />
        ))}
      </Box>
      <Observer onChange={(e) => (console.log(e))}>
        <Box className={styles.loadMore}></Box>
      </Observer>
    </Box>
  );
};

export default UpComingPage;
