import { Grid, makeStyles, Typography } from "@material-ui/core";
import video from "./video2.mp4";
import img from "./job.png";
const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: 900,
  },
}));
const Welcome = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <video
        className="videoTag"
        autoPlay
        loop
        muted
        style={{
          minWidth: "100%",
          minHeight: "100vh",
          maxWidth: "100%",
          maxHeight: "100vh",
          objectFit: "cover",
          zIndex: "-1",
          boxSizing: "border-box",
          backgroundColor: "rgba(35,45,57,0.8)",
        }}
      >
        <source src={video} type="video/mp4" />
      </video>
      <div
        class="caption header-text"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          bottom: "7px",
          width: "100%",
        }}
      >
        <div
          style={{
            textAlign: "center",
            position: "absolute",
            width: "60%",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            background: "rgba(255,255,255,0.5)",
            borderRadius: "11px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <Grid item>
            <Typography>
              <img src={img} width="130px" height="auto" alt="title"></img>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              className={classes.title}
              style={{
                marginTop: "20px",
                marginBottom: "15px",
                textTransform: "uppercase",
                color: "#1C98E3",
                letterSpacing: "1px",
              }}
            >
              FIND THE PERFECT JOB{" "}
              <em
                style={{
                  fontStyle: "normal",
                  color: "#FF425D",
                }}
              >
                HERE
              </em>
            </Typography>
          </Grid>
        </div>
      </div>
    </Grid>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
