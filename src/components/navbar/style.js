import { makeStyles } from "@mui/styles";
import theme from "../../theme";

const useStyles = makeStyles(() => ({

container:{
   marginTop:theme.spacing(8),
   display:'flex',
   justifyContent:'center',
   alignItems:'center'
},
blackBg:{
   height:200,
       width:1000,
       backgroundColor:'black',
       marginTop:theme.spacing(4),
   [theme.breakpoints.down('sm')]:{
      width:410,
      height:440 ,
   }
},
text:{
   color:'white',
   display:'flex',
   justifyContent:'center',
   alignItems:'center'
},

redBg:{
   color:'white',
   height:160,
   width:1000,
   backgroundColor:'orange',
   marginTop:theme.spacing(4),
[theme.breakpoints.down('sm')]:{
  width:410,
  height:300 ,
},

text2:{
   color:'whitesmoke',
   fontSize:30
}
}

  
}));
export default useStyles;
