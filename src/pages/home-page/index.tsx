import DefaultHeader from "@/components/Common/DefaultHeader";
// import MovieCard from "@/components/Common/MovieCard";
import { filmData, quoteData } from "../../constants/fakeData";
import styles from "@/styles/Home.module.css";
import MainCarousel from "@/components/MainCarousel";
import PeopleCard from "@/components/Common/PeopleCard";
import Quote from "@/components/Common/Quote";
import { Box } from "@mui/material";
import DefaultFooter from "@/components/Common/DefaultFooter";
import ListMovieTab from "@/components/ListMoviesTab";
import DefaultHeaderBlock from "@/components/Common/DefaultHeaderBlock";

const HomePage = () => {
  return (
    <Box>
      <DefaultHeader />
      <MainCarousel />

      <Quote quote={quoteData[0]} />
      <DefaultHeaderBlock>
        <h1>NEW & UPCOMING RELEASES</h1>
        <ListMovieTab />
      </DefaultHeaderBlock>
      <DefaultFooter />
    </Box>
  );
};

export default HomePage;
