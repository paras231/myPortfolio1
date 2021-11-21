import React from "react";
import useStyles from "./style";
import { Container } from "@material-ui/core";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
} from "@material-ui/core";
import Pulse from "react-reveal/Pulse";
import Zoom from "react-reveal/Zoom";
import Jello from "react-reveal/Jello";
import { Apps, DeveloperMode, Code, Email, Call } from "@material-ui/icons";

const Service = () => {
  const classes = useStyles();
  return (
    <>
      <Zoom>
        <h1 className={classes.heading}>What You Get</h1>
      </Zoom>

      <Container>
        <Pulse>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGphdmFzY3JpcHR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="mern"
              />
              <CardContent>
                <Zoom>
                <Typography gutterBottom variant="h5" component="div">
                  MERN APP <Apps />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A full stack app/website which has been created by popular
                  MERN stack. A MERN app contains some essential frameworks and
                  database as Mongodb frontEnd library React Js , backend
                  library Express js and node js , which works really fast as
                  compared to other websites.
                </Typography>
                </Zoom>
              </CardContent>
            </CardActionArea>
          </Card>
        </Pulse>

        <Pulse>
          <Card sx={{ maxWidth: 345 }} className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://images.unsplash.com/photo-1599837565318-67429bde7162?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aHRtbCUyRmNzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="React"
              />
              <CardContent>
                <Zoom>
                <Typography gutterBottom variant="h5" component="div">
                  REACT APP <DeveloperMode />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  If you only want a front end user interface then REACT app
                  will be your first choice. The main feature of react is to get
                  a single page application that does not take much time to
                  load.
                </Typography>
                </Zoom>
              </CardContent>
            </CardActionArea>
          </Card>
        </Pulse>

        <Pulse>
          <Card sx={{ maxWidth: 345 }} className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aHRtbCUyRmNzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="website"
              />
              <CardContent>
                <Zoom>
                <Typography gutterBottom variant="h5" component="div">
                  Normal Website <Code />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  If you want a normal page with just basic CSS and JavaScript
                  then can it easily by contacting me.
                </Typography>
                </Zoom>
              </CardContent>
            </CardActionArea>
          </Card>
        </Pulse>
      </Container>

      <Typography className={classes.info} variant="h5" component="div">
        For More Info
      </Typography>

      <Jello>
        {" "}
        <Typography variant="h6" component="div">
          <Email /> sharmaparas553@gmail.com
        </Typography>
        <Typography variant="h6" component="div">
          <Call /> 8949407668
        </Typography>
      </Jello>
    </>
  );
};

export default Service;
