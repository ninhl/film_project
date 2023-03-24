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
import DefaultButton from "@/components/Common/DefaultButton";
import Banner from "@/components/Common/Banner";
import React, { useRef, useState } from "react";
import { SliceArr } from "../../utils/SliceArr";
const HomePage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [toggleShow, setToggleShow] = useState({
    isShowMore: false,
    buttonName: "Show more",
  });
  console.log(toggleShow);

  const [numberToShow, setNumberToShow] = useState<number>(6);
  const onShowMore = (ref: any) => {
    setToggleShow({ isShowMore: !toggleShow.isShowMore, buttonName: "Hide" });
    if (!toggleShow.isShowMore) {
      setNumberToShow(numberToShow * 2);
    } else {
      setNumberToShow(numberToShow / 2);
      setToggleShow({
        isShowMore: !toggleShow.isShowMore,
        buttonName: "Show more",
      });
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box>
      <DefaultHeader />
      <MainCarousel />
      <DefaultHeaderBlock className={styles.profile__block}>
        <h1 ref={ref} className={styles.headerBlock__title}>
          MARKETS WE SERVE
        </h1>
        <p className={styles.headerBlock__desc}>
          Swank brings more movies to more people in more places than anyone.
        </p>
        <Box className={styles.listCard}>
          {SliceArr(filmData, numberToShow).map((film: any) => (
            <PeopleCard data={film} />
          ))}
        </Box>
        <DefaultButton
          handleClick={() => {
            onShowMore(ref);
          }}
          buttonName={toggleShow.buttonName}
        />
      </DefaultHeaderBlock>
      <Banner backgroundImg="https://swank.azureedge.net/swank/prod-media/1547/01_copyright2_1920x1080_pi.jpg?width=1920&height=1080&mode=crop&format=webp" />
      <DefaultHeaderBlock>
        <h1 className={styles.headerBlock__title}>NEW & UPCOMING RELEASES</h1>
        <ListMovieTab />
      </DefaultHeaderBlock>
      <Banner backgroundImg="https://swank.azureedge.net/swank/prod-media/13021/01_experience1920x1080_pi.jpg?width=1920&height=1080&mode=crop&format=webp" />
      <Quote quote={quoteData[0]} />
      <Banner backgroundImg="https://swank.azureedge.net/swank/prod-media/13021/01_experience1920x1080_pi.jpg?width=1920&height=1080&mode=crop&format=webp" />
      <Quote quote={quoteData[1]} />
      <DefaultFooter />
    </Box>
  );
};

export default HomePage;
