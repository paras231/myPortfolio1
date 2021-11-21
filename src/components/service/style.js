import { makeStyles } from "@mui/styles";
import theme from '../../theme';

const useStyles = makeStyles(() => ({
   
heading:{
    marginTop:theme.spacing(15),
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
},


card:{
    marginTop:theme.spacing(4)
},
  
info:{
    marginTop:theme.spacing(4),
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
},



}));
export default useStyles;
