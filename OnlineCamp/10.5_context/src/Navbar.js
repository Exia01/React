import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/NavBarStyles';

//importing the context to consume the provider wrapping in app
import { ThemeContext } from './contexts/ThemeContext';
import { withLanguageContext } from './contexts/LanguageContext';

const content = {
  english: {
    search: 'Search',
    flag: '🇬🇧',
  },
  french: {
    search: 'Chercher',
    flag: '🇫🇷',
  },
  spanish: {
    search: 'Buscar',
    flag: '🇪🇸',
  },
};
class Navbar extends Component {
  // Can't use more than one context only get one type. Would have consume the context more than one way

  // could wrap as a Context.Consumer
  static contextType = ThemeContext; //tells the component to go up and find the provider for this context
  render() {
    const { isDarkMode, toggleTheme } = this.context; //extracting from context for consuming
    const { classes } = this.props;
    const { language } = this.props.languageContext; //extracting from hoc
    const { search, flag } = content[language];
    return (
      <div className={classes.root}>
        <AppBar position='static' color={isDarkMode ? 'default' : 'primary'}>
          <Toolbar>
            <IconButton className={classes.menuButton} color='inherit'>
              <span>{flag}</span>
            </IconButton>
            <Typography className={classes.title} variant='h6' color='inherit'>
              App Title
            </Typography>
            {/* clicking calls the func on the themeProvider */}
            <Switch onChange={toggleTheme} />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder={`${search}...`}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withLanguageContext(withStyles(styles)(Navbar));
//wrapping withStyles, returns a component, then wrapping with the WithLanguage HOC
