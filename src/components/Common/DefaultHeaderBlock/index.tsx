import Box from "@mui/material/Box";
import styles from "./styles.module.css";

interface HeaderBlockProps {
    children?: React.ReactNode;
    className?: string;
 
  }
const DefaultHeaderBlock = (props: HeaderBlockProps) => {
    const { children } = props;
    return ( 
        <Box className={styles.headerBlock__container}>
            {children}
        </Box>
     );
}
 
export default DefaultHeaderBlock;