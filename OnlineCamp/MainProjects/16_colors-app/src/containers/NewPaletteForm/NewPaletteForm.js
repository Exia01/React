import React, { useState } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Button } from '@material-ui/core/';

import DraggableColorList from './../../components/draggableColorList/DraggableColorList';

//Needed for draggable color box
import arrayMove from 'array-move';
import PaletteFormNav from '../../components/PaletteFormNav/PaletteFormNav';
import ColorPickerForm from './../../components/ColorPickerForm/ColorPickerForm';
import seedColors from '../../utils/seedColors';
import useStyles from '../../styles/NewPaletteFormStyles.js';

function NewPaletteForm(props) {
  //we add pairs to state. variable and a method
  //could use react memo for this
  const maxColors = props.maxColors || 20;
  const [colors, setColors] = useState(seedColors[0].colors);
  const [name, setName] = useState({});
  const isPaletteFull = colors.length >= maxColors;
  const { palettes, savePalette } = props;

  // using useState hook
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  // since no class component, using hook.

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addNewColor = (newColorObj) => {
    //newColorObj coming from ColorPickerForm
    setColors([...colors, newColorObj]);
  };

  const handleChange = (e) => {
    //handles color name or palette name changes
    setName({ ...name, [e.target.name]: e.target.value });
  };

  const handleSubmit = (newPalette) => {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, '-');
    newPalette.colors = colors;
    savePalette(newPalette);
    props.history.push('/');
  };

  const removeColor = (colorName) => {
    let newColorsArr = colors.filter((color) => {
      return color.name !== colorName;
    });
    setColors(newColorsArr);
  };

  const clearColors = () => {
    setColors([]);
  };

  const addRandomColor = () => {
    //pick random color from existing palettes
    const allColors = props.palettes
      .map((palette) => {
        return palette.colors;
      })
      .flat(); //pulls the arrs from imbedded;
    // console.log(allColors);
    let isDuplicateColor = true;
    let newRandColor = (() => {
      do {
        let randomColor = ""
        let randomNum = ""
        randomNum = Math.floor(Math.random() * allColors.length); //generating a color up to length of colors
        randomColor = allColors[randomNum];
        isDuplicateColor = colors.some(color => color.name === randomColor.name)
        console.log('running while loop');
        if (!isDuplicateColor) {
          return randomColor
        }
      } while (isDuplicateColor)
    })

    let randomColorResult = newRandColor()
    setColors([...colors, randomColorResult]);
  };

  // function for sorting ColorBoxes
  let onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
  };

  return (
    <div className={classes.root}>
      {/* Passing classes as to not rework the component to hoc */}
      <PaletteFormNav
        open={open}
        palettes={palettes}
        handleSubmit={handleSubmit}
        handleDrawerOpen={handleDrawerOpen}
        handleChange={handleChange}
      />
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
        <div className={classes.drawerContainer}>
          {/* Acts like a styling for 'h4' */}
          <Typography variant='h4' gutterBottom>
            Design your Palette
          </Typography>
          <div className={classes.buttons}>
            <Button
              className={classes.button}
              variant='contained'
              color='secondary'
              onClick={clearColors}
            >
              Clear Palette
            </Button>
            <Button
              className={classes.button}
              variant='contained'
              color='primary'
              onClick={addRandomColor}
              disabled={isPaletteFull}
            >
              Random Color
            </Button>
          </div>
          <ColorPickerForm
            isPaletteFull={isPaletteFull}
            addNewColor={addNewColor}
            colors={colors}
          />
        </div>
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
          // Drag will not be counted if not moved more for than 10pxs
          distance={10}
        />
      </main>
    </div>
  );
}
export default NewPaletteForm;
