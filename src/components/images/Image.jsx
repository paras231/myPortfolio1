import React from "react";
import useStyles from "./style";
import RubberBand from "react-reveal/RubberBand";

const Image = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.imgcontainer}>
        <RubberBand>
          <img
            className={classes.img}
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="img"
          />
        </RubberBand>
        <RubberBand>
          <img
            className={classes.img}
            src="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="img"
          />
        </RubberBand>
        <RubberBand>
          <img
            className={classes.img}
            src="https://images.unsplash.com/photo-1536148935331-408321065b18?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="img"
          />
        </RubberBand>
      </div>
    </>
  );
};

export default Image;
