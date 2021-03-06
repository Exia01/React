import React, { useState, useEffect } from 'react';
// Material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

// Emoji picker and stylesheet
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

export default function PaletteMetaForm({
  palettes,
  onSubmitHandler,
  hideForm,
}) {
  const [open, setOpen] = React.useState(true);
  // used to track wether is in form or emoji picker
  const [stage, setStage] = useState('form');
  const [newPalette, setNewPalette] = useState({
    name: '',
  });

  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
      return palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  }, [newPalette, palettes]);

  const handleChange = (e) => {
    //handles color name or palette name changes
    setNewPalette({ [e.target.name]: e.target.value });
  };
  const showEmojiPicker = () => {
    setStage('emoji');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const savePalette = (emojiObj) => {
    const { native } = emojiObj;
    let tempPaletteOBj = {
      paletteName: newPalette.name,
      emoji: native,
    };

    onSubmitHandler(tempPaletteOBj);
    setStage('');
  };
  return (
    <React.Fragment>
      <Dialog open={stage === 'emoji'} onClose={hideForm}>
        <DialogTitle>Choose a Palette Emooji</DialogTitle>
        <Picker set='apple' title='Pick emoji' onSelect={savePalette} />
      </Dialog>
      {/* onClose will handle outside of the modal click */}
      <Dialog
        open={stage === 'form'}
        onClose={hideForm}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Choose a Palette Name</DialogTitle>
        {/* Could put the func to be handled in another func as a const */}
        <ValidatorForm onSubmit={showEmojiPicker}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new beautiful palette. Make sure it
              is unique.
            </DialogContentText>
            <TextValidator
              fullWidth
              // Built in property for margin
              margin='normal'
              label='Palette Name'
              value={newPalette.name}
              name='name'
              onChange={handleChange}
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={['Enter Palette Name', 'Name already used']}
            ></TextValidator>
          </DialogContent>
          <DialogActions>
            <Button onClick={hideForm} color='primary'>
              Cancel
            </Button>
            <Button variant='contained' color='primary' type='submit'>
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </React.Fragment>
  );
}
