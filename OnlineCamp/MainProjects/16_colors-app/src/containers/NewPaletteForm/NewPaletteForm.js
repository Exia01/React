import React, { useState, useEffect } from 'react';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Button } from '@material-ui/core/';

//importing the react-color picker
import { ChromePicker } from 'react-color';

import DraggableColorList from './../../components/draggableColorList/DraggableColorList';

// Importing Form Validator
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

//Needed for draggable color box
import arrayMove from 'array-move';
// Sets width
const drawerWidth = 500;

// Takes in theme
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
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
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: 'calc(100vh - 64px)',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function NewPaletteForm(props) {
  //we add pairs to state. variable and a method
  const [currentColor, setColor] = React.useState('#5e4b5e');
  const [colors, setColors] = useState([]);
  const [name, setName] = useState({
    colorName: '',
    paletteName: '',
  });

  // using useState hook
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  // since no class component, using hook.
  useEffect(() => {
    // when component first renders or updates runs functions
    ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
      // checking make sure every value is unique
      return colors.every(
        // extracting name
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });

    ValidatorForm.addValidationRule('isColorUnique', (value) => {
      return colors.every(
        ({ color }) => color.toLowerCase() !== currentColor.toLowerCase()
      );
    });
  }, [colors, currentColor]);
  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
      return props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const updateCurrentColor = (newColorObj) => {
    setColor(newColorObj.hex);
  };
  const addNewColor = () => {
    const newColorObj = { color: currentColor, name: name.colorName };
    setColors([...colors, newColorObj]);
    setName({ ...name, colorName: '' });
  };

  const handleChange = (e) => {
    //handles color name or palette name changes
    setName({ ...name, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    let newName = name.paletteName;
    let newPaletteOBj = {
      name: newName,
      colors,
      // Replacing the name and spaces with a dash
      id: newName.toLowerCase().replace(/ /g, '-'),
    };
    props.savePalette(newPaletteOBj);
    props.history.push('/');
  };

  const removeColor = (colorName) => {
    let newColorsArr = colors.filter((color) => {
      return color.name !== colorName;
    });
    setColors(newColorsArr);
  };

  // function for sorting ColorBoxes
  let onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
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
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            Persistent drawer
          </Typography>
          <ValidatorForm onSubmit={handleSubmit}>
            <TextValidator
              label='Palette Name'
              value={name.paletteName}
              name='paletteName'
              onChange={handleChange}
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={['Enter Palette Name', 'Name already used']}
            ></TextValidator>
            <Button variant='contained' color='primary' type='submit'>
              Save Palette
            </Button>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
      {/* Drawer component takes the props that defines the way it functions */}
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {/* Top part of the drawer */}
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <div className={classes.drawerHeader} />
        {/* onChangeComplete,comes with the component, fires after picking color */}
        <Divider />
        {/* Acts like a styling for 'h4' */}
        <Typography variant='h4'>Design your Palette</Typography>
        <div>
          <Button variant='contained' color='secondary'>
            Clear Palette
          </Button>
          <Button variant='contained' color='primary'>
            Random Color
          </Button>
        </div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={updateCurrentColor}
        />

        <ValidatorForm onSubmit={addNewColor} instantValidate={false}>
          <TextValidator
            onChange={handleChange}
            value={name.colorName}
            name='colorName'
            // Order matters, required goes in 0 position
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={[
              'this field is required',
              'Color name must be unique',
              'Color already used!',
            ]}
          ></TextValidator>
          <Button
            variant='contained'
            color='primary'
            type='submit'
            style={{ backgroundColor: currentColor }}
          >
            Add Color
          </Button>
        </ValidatorForm>
      </Drawer>
      <main
        //module => give it the the classes content and give it the name contentshift if open is true
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Toolbar />
        {/* axis enables dragging feature across the x and y axis */}
        <DraggableColorList
          colors={colors}
          removeColor={removeColor}
          axis='xy'
          onSortEnd={onSortEnd}
        />
      </main>
    </div>
  );
}
export default NewPaletteForm;
