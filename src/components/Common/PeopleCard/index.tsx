import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styles from "./styles.module.css";
const PeopleCard = (props: any) => {
  const { data } = props;
  return (
    <div>
      <Card
        className={styles.card__wrapper}
        sx={{ maxWidth: 290 }}
        key={data.id}
      >
        <CardActionArea>
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
    </div>
  );
};

export default PeopleCard;
