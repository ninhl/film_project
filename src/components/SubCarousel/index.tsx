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
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

const SubCarousel = (props: SubCarouselProps) => {
  const {movieData} = props;
  return (
    <Box className={styles.slider__container}>
      <Slider {...settings}>
        {movieData?.map((film: any) => (
          <MovieCard data={film}/>
        ))}
      </Slider>
    </Box>
  );
};

export default SubCarousel;
