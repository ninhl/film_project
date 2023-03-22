import DefaultHeader from "@/components/Common/DefaultHeader";
import MovieCard from "@/components/Common/MovieCard";
import { filmData } from "../../constants/fakeData";
import styles from "@/styles/Home.module.css"
import MainCarousel from "@/components/MainCarousel";
const HomePage = () => {
  return (
    <>
      <DefaultHeader />
      <MainCarousel/>
      <div className={styles.cardWrapper}>
        {filmData.map((data: any) => (
          <MovieCard data={data} key={data.id} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
