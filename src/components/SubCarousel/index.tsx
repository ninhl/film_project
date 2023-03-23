import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.css";
import SubMovieCard from "../Common/SubMovieCard";
import Box from "@mui/material/Box";
import MovieCard from "../Common/MovieCard";
interface SubCarouselProps{
  movieData: any;
}
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
};
const SubCarousel = (props: SubCarouselProps) => {
  const {movieData} = props;
  return (
    <Box className={styles.slider__container}>
      <Slider {...settings}>
        {movieData.map((film: any) => (
          <MovieCard data={film}/>
        ))}
      </Slider>
    </Box>
  );
};

export default SubCarousel;
