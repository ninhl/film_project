import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.css";
import Box from "@mui/material/Box";
import { filmData } from "@/constants/fakeData";
import MovieCard from "../Common/MovieCard";
import SubCarousel from "../SubCarousel";
interface Data {
  id?: number;
  banner?: string;
  name?: string;
  desc?: string;
  img?: string;
}
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2500,
};
const MainCarousel = () => {
  return (
    <Box>
      <Slider {...settings}>
        {filmData.map((film) => (
          <Box key={film.id}>
            <Box
              style={{ backgroundImage: "url(" + film.banner + ")" }}
              className={styles.main__carousel}
            >
              <Box className={styles.carousel__content}>
                <h1>{film.name}</h1>
                <h3>{film.desc}</h3>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
      <SubCarousel movieData={filmData}/>
    </Box>
  );
};

export default MainCarousel;
