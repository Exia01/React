import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core/';

//importing the react-color picker
import { ChromePicker } from 'react-color';
// Importing Form Validator
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const useStyles = makeStyles((theme) => ({
  picker: {
    width: '100% !important',
    marginTop: '2rem',
  },
  addColor: {
    width: '100%',
    padding: '1rem',
    marginTop: '1rem',
    fontSize: '2rem',
  },
  colorNameInput: {
    width: '100%',
    height: '70px',
  },
}));

const ColorPickerForm = (props) => {
  const [currentColor, setColor] = React.useState('#5e4b5e');
  const [newColor, setNewColor] = useState({
    name: '',
  });
  const classes = useStyles();

  const { isPaletteFull, addNewColor, colors } = props;

  useEffect(() => {
    // this Validator could be put in the parent 'container' and it would still apply to this component
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

  const updateCurrentColor = (newColorObj) => {
    setColor(newColorObj.hex);
  };

  const handleChange = (e) => {
    setNewColor({ [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const newColorObj = { color: currentColor, name: newColor.name };
    addNewColor(newColorObj);
    setNewColor({ name: '' });
  };

  return (
    <div>
      <ChromePicker
        color={currentColor}
        onChangeComplete={updateCurrentColor}
        className={classes.picker}
      />

      <ValidatorForm onSubmit={handleSubmit} instantValidate={false}>
        <TextValidator
          className={classes.colorNameInput}
          placeholder='Color Name'
          onChange={handleChange}
          value={newColor.name}
          name='name'
          variant='filled'
          margin='normal'
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
          disabled={isPaletteFull}
          className={classes.addColor}
          style={{ backgroundColor: isPaletteFull ? 'grey' : currentColor }}
        >
          {isPaletteFull ? 'Palette Full' : 'Add Color'}
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default ColorPickerForm;
