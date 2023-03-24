import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import styles from "./styles.module.css";
interface PeopleCardProps {
  data: any;
}
const PeopleCard = (props: PeopleCardProps) => {
  const { data } = props;
  return (
    <Box className={styles.card__container}>
      <Card
        className={styles.card__wrapper}
        sx={{ maxWidth: 290 }}
        key={data.id}
      >
        <CardActionArea sx={{width: "100%", height: "100%"}}>
          <CardMedia
            className={styles.card__image}
            component="img"
            height="200"
            image={data.img}
            alt="green iguana"
          />
          <CardContent className={styles.card__content}>
            <Typography className={styles.card__content__title} gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography  className={styles.card__content__desc} variant="body2" color="text.secondary">
              {data.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default PeopleCard;
