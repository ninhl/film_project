import { Grid, Paper } from "@mui/material";
import Link from "next/link";
import styles from "./styles.module.css";
import SearchIcon from "@mui/icons-material/Search";
const DefaultHeader = () => {
  return (
    <Grid container className={styles.header__container}>
      <Grid item xs className={styles.header__logo__wrapper}>
        <Paper className={styles.header__logo}>
          <div className={styles.logo__wrapper}>
            <Link href="/">
              <img
                src="https://swank.azureedge.net/swank/prod-media/1001/swank-logo.png?height=91&mode=crop&format=webp"
                alt=""
              />
            </Link>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={10} className={styles.header__menu__wrapper}>
        <Paper className={`${styles.header__menu} ${styles.hover}`}>
          <ul>
            <li>
              <Link href="/">MARKETS</Link>
            </li>
            <li>
              <Link href="/">BROWSE ENTERTAINMENT</Link>
            </li>
            <li>
              <Link href="/">NEWS</Link>
            </li>
            <li>
              <Link href="/">ABOUT US</Link>
            </li>
            <li>
              <Link href="/">JOIN OUR TEAM</Link>
            </li>
          </ul>
        </Paper>
      </Grid>
      <Grid item xs className={styles.header__srearch__wrapper}>
        <Paper className={styles.header__srearch}>
          <SearchIcon className={styles.header__srearch__icon} />
          <p>Search</p>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default DefaultHeader;
