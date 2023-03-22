import styles from "./styles.module.css";
import DefaultButton from "../DefaultButton";
import { Box } from "@mui/material";
interface Props {
  backgroundImg: string;
}
const Banner = (props: Props) => {
  const { backgroundImg } = props;
  return (
    <Box className={styles.banner__container}
    style={{ backgroundImage: "url(" + backgroundImg + ")" }}
    >
      <Box
        className={styles.banner__wrapper}
      >
        <h2 className={styles.banner__subTitle}>entertainment</h2>
        <h1 className={styles.banner__mainTitle}>
        Entertainment Available Anywhere. Extraordinary Everywhere.
        </h1>
        <p className={styles.banner__desc}>
        Movies to motivate. Titles to thrill. Even entertainment to enlighten. Explore the movies and TV shows that unite an audience with your event’s purpose. Browse everything from the most talked about movies to timeless TV classics. 
        </p>
        <DefaultButton buttonName="read more" isWhiteBtn />
      </Box>
    </Box>
  );
};

export default Banner;
