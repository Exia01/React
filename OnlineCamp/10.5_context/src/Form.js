import React, { Component } from 'react';
import { LanguageContext } from './contexts/LanguageContext';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles/FormStyles';

const words = {
  //could move to a utils file
  english: {
    signIn: 'Sign In',
    email: 'Email Address',
    password: 'Password',
    remember: 'Remember Me',
  },
  french: {
    signIn: 'Se Connecter',
    email: 'Adresse Électronique',
    password: 'Mot de Passe',
    remember: 'Souviens-toi De Moi',
  },
  spanish: {
    signIn: 'Registrarse',
    email: 'Correo Electrónico',
    password: 'Contraseña',
    rememberMe: 'Recuérdame',
  },
};

class Form extends Component {
  static contextType = LanguageContext; // grabbing from context
  render() {
    const { language, changeLanguage } = this.context;
    const { classes } = this.props;
    const { email, signIn, password, rememberMe } = words[language]; //words[spanish]
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant='h5'>{signIn}</Typography>
          {/* passing value with the on change */}
          <Select value={language} onChange={changeLanguage}> 
            <MenuItem value='english'>English</MenuItem>
            <MenuItem value='french'>French</MenuItem>
            <MenuItem value='spanish'>Spanish</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='email'>{email}</InputLabel>
              <Input id='email' name='email' autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='password'>{password}</InputLabel>
              <Input id='password' name='password' autoFocus />
            </FormControl>
            <FormControlLabel
              control={<Checkbox color='primary' />}
              label={rememberMe}
            />
            <Button
              variant='contained'
              type='submit'
              fullWidth
              color='primary'
              className={classes.submit}
            >
              {signIn}
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}
export default withStyles(styles)(Form);

// Any component that consumes a context will re-render when the context provider's value changes.  This includes components where you are using contextType.  This is from the React docs: contextType lets you consume the nearest current value of that Context type using this.context.  When a component uses contextType, it is still consuming a context, and it will re-render when the context value changes.  Does that help?
