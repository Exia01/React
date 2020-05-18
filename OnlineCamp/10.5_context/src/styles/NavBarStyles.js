import { fade } from "@material-ui/core/styles/colorManipulator"; // fill fade color by certain amount

// exporting as func expression
const styles = theme => ({
  root: {
    width: "100%",
    marginBottom: 0
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    // not show up 320px
    display: "none",
    // similar to bootstrap display from from 576px and 'up'
    [theme.breakpoints.up("sm")]: { //baked into the material ui theme
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius, //comes with theme
    backgroundColor: fade(theme.palette.common.white, 0.15),//
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25) //when hovering search
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,///default spacing unit
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 12,//
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200 //when focusing expand
      }
    }
  }
});

export default styles;
