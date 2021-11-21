import React from "react";
import Image from "../images/Image";
import { Typography } from "@material-ui/core";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import useStyles from "./style";
import Navbars from "../navbar/Navbar";

const Content = () => {
  <Navbars />;
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <Zoom>
          <Typography variant="h2">Hello I am MERN Developer</Typography>
        </Zoom>
      </div>

      <Image />

      <div className={classes.blackBg}>
        <Fade>
          <Typography variant="h4" className={classes.text}>
            I build intelligent and impactful websites that work.
          </Typography>
          <Typography variant="body2" className={classes.text}>
            Get the best fast working websites for your business
          </Typography>
        </Fade>
        <Typography variant="body1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
          dolore repudiandae non obcaecati, corrupti eligendi optio voluptatibus
          numquam sint perspiciatis dolorum consectetur pariatur voluptas
          provident veniam maxime ratione nisi enim dolor? Provident deleniti
          quidem amet iusto necessitatibus totam culpa quae.
        </Typography>
      </div>

      <div className={classes.redBg}>
        <Typography variant="body2" className={classes.text}>
          A DIFFERENT APPROACH
        </Typography>
        <Zoom>
          <Typography variant="body1" className={classes.text2}>
            My goal is to design and develop websites that drive
            traffic,engagement,and conversion by researching into a clear set of
            action items to meet the goals of industry leading brands around the
            globe.
          </Typography>
        </Zoom>
      </div>
    </>
  );
};

export default Content;
