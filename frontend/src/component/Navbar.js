import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import isAuth, { userType } from "../lib/isAuth";
import img from "./logo.png";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: "clamp(1rem, 4vw, 2.5rem)",
    fontWeight: 800,
  },
  menu: {
    fontSize: "clamp(0.8rem, 2vw, 1rem)",
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  return (
    <AppBar position="fixed" style={{ backgroundColor: "#1C98E3" }}>
      <Toolbar style={{ minHeight: "80px" }}>
        <Typography className={classes.title}>
          <img src={img} width="30px" height="auto" alt="title"></img>
          Job Hunter
        </Typography>
        <div style={{ marginTop: "20px" }}>
          {isAuth() ? (
            userType() === "recruiter" ? (
              <>
                <Button color="inherit" onClick={() => handleClick("/")}>
                  <Typography className={classes.menu}>Home</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/addjob")}>
                  <Typography className={classes.menu}>Add Jobs</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/myjobs")}>
                  <Typography className={classes.menu}>Posted</Typography>
                </Button>
                <Button
                  color="inherit"
                  onClick={() => handleClick("/employees")}
                >
                  <Typography className={classes.menu}>Employees</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/profile")}>
                  <Typography className={classes.menu}>Profile</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/logout")}>
                  <Typography className={classes.menu}>Logout</Typography>
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" onClick={() => handleClick("/")}>
                  <Typography className={classes.menu}>Home</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/job")}>
                  <Typography className={classes.menu}>Job</Typography>
                </Button>
                <Button
                  color="inherit"
                  onClick={() => handleClick("/applications")}
                >
                  <Typography className={classes.menu}>Applied</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/profile")}>
                  <Typography className={classes.menu}>Profile</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/logout")}>
                  <Typography className={classes.menu}>Logout</Typography>
                </Button>
              </>
            )
          ) : (
            <>
              <Button color="inherit" onClick={() => handleClick("/login")}>
                <Typography className={classes.menu}>Login</Typography>
              </Button>
              <Button color="inherit" onClick={() => handleClick("/signup")}>
                <Typography className={classes.menu}>SignUp</Typography>
              </Button>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
