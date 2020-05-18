import React, { Component } from "react";

//Material Ui Components 
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";

// Needed for styles and passed as props with hoc
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavBarStyles";

class Navbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {/* position static keeps it up top */}
        <AppBar position='static' color='primary'>
          <Toolbar>
            <IconButton className={classes.menuButton} color='inherit'>
              <span>🇫🇷</span>
            </IconButton>
            <Typography className={classes.title} variant='h6' color='inherit'>
              App Title
            </Typography>
            {/* switch provides the toggle button */}
            <Switch />
            <div className={classes.grow} />
            
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder='Search...'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(styles)(Navbar);
