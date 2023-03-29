import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea,Box } from "@mui/material";
import styles from "./styles.module.css";
import getImage from "@/constants/baseURL";
interface Props {
  data?: any;
  handleClick?: () => void;
}
const SubMovieCard = (props: Props) => {
  const { data, handleClick } = props;
  return (
    <Box key={data.id}>
      <Card className={styles.card__wrapper} sx={{ maxWidth: 183 }} >
        <CardActionArea onClick={handleClick}>
          <CardMedia
            className={styles.card__image}
            component="img"
            height="280"
            image={getImage.originalImage(data.poster_path)}
            alt="green iguana"
          />
          <CardContent className={styles.card__content}>
            <Typography className={styles.card__content__title} gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {data.overview}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default SubMovieCard;
