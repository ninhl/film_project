import Button from '@mui/material/Button';
import styles from "./styles.module.css";
interface Props {
    buttonName?: string;
    isWhiteBtn?: boolean;
    handleClick?: () => void;
}
const DefaultButton = (props: Props) => {
    const { buttonName , handleClick ,isWhiteBtn} = props;
    return ( 
    <div>
       <Button onClick={handleClick} className={`${styles.button} ${isWhiteBtn ? styles.whiteBtn : styles.blackBtn}`} variant="outlined">{buttonName}</Button>
    </div> 
    );
}
 
export default DefaultButton;