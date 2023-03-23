import { Box, Grid } from "@mui/material";
import DefaultButton from "../DefaultButton";
import styles from "./styles.module.css";
interface Props{
    quote: any;
}
const Quote = (props: Props) => {
    const {quote} = props;
  return (
    <Grid container className={styles.quote__container}>
      <Grid item xs={6}>
        <Box className={styles.quote__borderBox}>
          <Box className={styles.quote__image}>
            <img
              src={quote.img}
              alt=""
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6} className={styles.quote__content}>
        <Box className={styles.quote__content__wrapper}>
            <h1>“</h1>
            <h2>{quote.title}</h2>
            <h3>{quote.author}</h3>
            <p>{quote.desc}</p>
            <DefaultButton buttonName="Read more"/>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Quote;
