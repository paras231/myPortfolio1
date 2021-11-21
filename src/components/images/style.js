import { makeStyles } from "@mui/styles";
import theme from '../../theme';

const useStyles = makeStyles(() => ({
    imgcontainer:{
display:'flex',
justifyContent:'space-evenly',
marginTop:theme.spacing(4)
   },
   img:{
       height:300,
       width:300,
   [theme.breakpoints.down('sm')]:{
      width:140,
      height:140 
   }
   
   }

  
}));
export default useStyles;
