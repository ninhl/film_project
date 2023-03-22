import DefaultHeader from "@/components/Common/DefaultHeader";
// import MovieCard from "@/components/Common/MovieCard";
import { filmData } from "../../constants/fakeData";
import styles from "@/styles/Home.module.css"
import MainCarousel from "@/components/MainCarousel";
import PeopleCard from "@/components/Common/PeopleCard";
import DefaultButton from "@/components/Common/DefaultButton";
const HomePage = () => {
  return (
    <>
      <DefaultHeader />
      <MainCarousel/>
      {filmData.map((film)=>(
        <PeopleCard data={film}/>
      ))}
    </>
  );
};

export default HomePage;
