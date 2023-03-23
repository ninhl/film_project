import { Grid, Paper } from "@mui/material";
import Link from "next/link";
import styles from "./styles.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { Box, style } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const DefaultFooter = () => {
  return (
    <Box className={styles.footer__container}>
      <Box className={styles.footer__background}>
        <Grid container className={styles.footer__content}>
          <Grid item xs className={styles.footer__title}>
            <Paper className={styles.market}>
              <h2>MARKETS</h2>
              <ul>
                <li>
                  <Link href="/">Businesses</Link>
                </li>
                <li>
                  <Link href="/">Campgrounds</Link>
                </li>
                <li>
                  <Link href="/">College Campus Academic</Link>
                </li>
                <li>
                  <Link href="/">Streaming</Link>
                </li>
                <li>
                  <Link href="/">College Campus Events</Link>
                </li>
                <li>
                  <Link href="/">College Housing & Residence</Link>
                </li>
                <li>
                  <Link href="/">Life</Link>
                </li>
                <li>
                  <Link href="/">Correctional Institutions</Link>
                </li>
                <li>
                  <Link href="/">Cruise Ships</Link>
                </li>
              </ul>
            </Paper>
          </Grid>
          <Grid item xs className={styles.footer__title}>
            <Paper className={styles.market}>
              <h2 style={{ visibility: "hidden" }}>ABOUT US</h2>
              <ul>
                <li>
                  <Link href="/">Hotels</Link>
                </li>
                <li>
                  <Link href="/">K-12 Schools</Link>
                </li>
                <li>
                  <Link href="/">K-12 Streaming</Link>
                </li>
                <li>
                  <Link href="/">Motorcoaches</Link>
                </li>
                <li>
                  <Link href="/">Museums</Link>
                </li>
                <li>
                  <Link href="/">Parks & Recreation Departments</Link>
                </li>
                <li>
                  <Link href="/">Patient Entertainment</Link>
                </li>
              </ul>
            </Paper>
          </Grid>
          <Grid item xs className={styles.footer__title}>
            <Paper className={styles.market}>
              <h2 style={{ visibility: "hidden" }}>ABOUT US</h2>
              <ul>
                <li>
                  <Link href="/">Performing Arts Centers</Link>
                </li>
                <li>
                  <Link href="/">Public Libraries</Link>
                </li>
                <li>
                  <Link href="/">Religious Organizations</Link>
                </li>
                <li>
                  <Link href="/">Restaurants</Link>
                </li>
              </ul>
            </Paper>
          </Grid>
          <Grid item xs className={styles.footer__title}>
            <Paper className={styles.market}>
              <h2>ABOUT US</h2>
              <ul>
                <li>
                  <Link href="/">Join Our Team</Link>
                </li>
                <li>
                  <Link href="/">Swank Gives Back</Link>
                </li>
                <li>
                  <Link href="/">Swank Culture</Link>
                </li>
                <li>
                  <Link href="/">Contact Us</Link>
                </li>
                <li>
                  <Link href="/">Privacy Policy</Link>
                </li>
              </ul>
            </Paper>
          </Grid>
          <Grid
            item
            xs
            className={`${styles.footer__title} ${styles.followUs__wrapper}`}
          >
            <Paper className={styles.followUs__content}>
              <h2>Follow us</h2>
              <ul>
                <li>
                  <LinkedInIcon />
                </li>
                <li>
                  <InstagramIcon />
                </li>
                <li>
                  <TwitterIcon />
                </li>
                <li>
                  <FacebookIcon />
                </li>
              </ul>
              <Box className={styles.image__wrapper}>
                <img
                  src="https://swank.azureedge.net/swank/prod-media/50427/swank-logo.png?height=91&mode=crop&format=webp"
                  alt=""
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DefaultFooter;
