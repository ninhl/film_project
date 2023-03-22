import DefaultHeader from "@/components/Common/DefaultHeader";
// import MovieCard from "@/components/Common/MovieCard";
import { filmData } from "../../constants/fakeData";
import styles from "@/styles/Home.module.css"
import MainCarousel from "@/components/MainCarousel";
import PeopleCard from "@/components/Common/PeopleCard";
import DefaultButton from "@/components/Common/DefaultButton";
import Banner from "@/components/Common/Banner";
import SubMovieCard from "@/components/Common/SubMovieCard";
const HomePage = () => {
  return (
    <>
      <DefaultHeader />
      <MainCarousel/>
      {filmData.map((film)=>(
        <SubMovieCard data={film}/>
      ))}
      <Banner backgroundImg="https://swank.azureedge.net/swank/prod-media/1549/01_entanywhere12_1920x1080_pi.jpg?width=1920&height=1080&mode=crop&format=webp"/>
    </>
  );
};

export default HomePage;
