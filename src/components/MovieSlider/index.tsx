import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.css";
import SubMovieCard from "../Common/SubMovieCard";
import Box from "@mui/material/Box";
interface MovieSliderProps{
  movieData: any;
}
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2500,
};
const MovieSlider = (props: MovieSliderProps) => {
  const {movieData} = props;
  return (
    <Box className={styles.slider__container}>
      <Slider {...settings}>
        {movieData?.map((film: any) => (
          <SubMovieCard data={film} key={film.id}/>
        ))}
      </Slider>
    </Box>
  );
};

export default MovieSlider;
