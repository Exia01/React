import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core/';

// Importing Form Validator
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import PaletteMetaForm from '../PaletteMetaForm/PaletteMetaForm';

const drawerWidth = 400;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // positions it in one row separates content
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '64px',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  navBtns: {},
}));

const PaletteFormNav = (props) => {
  const { open, palettes, handleSubmit } = props;
  // Enables use of styles
  const classes = useStyles();

  const onSubmitHandler = (name) => {
    handleSubmit(name); //paletteName
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* what we see uptop */}
      <AppBar
        position='fixed'
        color='default'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          {/* IconButton doesnt have button, you have to choose what it renders */}
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={props.handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            Create A Palette
          </Typography>
        </Toolbar>
        <div className={classes.navBtns}>
          <PaletteMetaForm
            palettes={palettes}
            onSubmitHandler={onSubmitHandler}
          />
          <Link to='/'>
            <Button variant='contained' color='secondary'>
              {' '}
              Go back
            </Button>
          </Link>
        </div>
      </AppBar>
    </div>
  );
};

export default PaletteFormNav;
