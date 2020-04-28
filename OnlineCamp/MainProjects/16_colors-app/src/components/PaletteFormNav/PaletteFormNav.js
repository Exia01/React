import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core/';

// Importing Form Validator
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const PaletteFormNav = (props) => {
  const [newPaletteName, setNewPaletteName] = useState({
    paletteName: '',
  });
  const { classes, open, palettes, handleSubmit } = props;

  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
      return palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  }, [newPaletteName, palettes]);

  const handleChange = (e) => {
    //handles color name or palette name changes
    setNewPaletteName({ [e.target.name]: e.target.value });
  };

  const onSubmitHandler = () => {
    handleSubmit(newPaletteName.paletteName);
  };
  return (
    <div>
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
            Persistent drawer
          </Typography>
          <ValidatorForm onSubmit={onSubmitHandler}>
            <TextValidator
              label='Palette Name'
              value={newPaletteName.paletteName}
              name='paletteName'
              onChange={handleChange}
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={['Enter Palette Name', 'Name already used']}
            ></TextValidator>
            <Button variant='contained' color='primary' type='submit'>
              Save Palette
            </Button>
            <Link to='/'>
              <Button variant='contained' color='secondary'>
                {' '}
                Go back
              </Button>
            </Link>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default PaletteFormNav;
