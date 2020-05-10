import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import { green } from '@material-ui/core/colors';
import { grey } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
// 3rd party library to handle transitions
import MiniPalette from '../MiniPallette/MiniPalette';
import styles from '../../styles/PaletteListStyles';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDeleteDialog: false,
      deletingId: '',
    };
    this.goToPalette = this.goToPalette.bind(this);
    this.openDeleteDialog = this.openDeleteDialog.bind(this)
    this.closeDeleteDialog = this.closeDeleteDialog.bind(this)
    this.deleteConfirm = this.deleteConfirm.bind(this)
  }

  // shouldComponentUpdate() {
  //   return false;
  // }

  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  //could also implement a toggle
  openDeleteDialog(id) {
    this.setState({ openDeleteDialog: true, deletingId: id });
  };
  closeDeleteDialog() {
    this.setState({ openDeleteDialog: false, deletingId: '' });
  };
  deleteConfirm() {
    this.props.deletePalette(this.state.deletingId);
    this.closeDeleteDialog();
  };

  render() {
    const { palettes, classes } = this.props;
    const { openDeleteDialog } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.heading}>React Colors</h1>
            <Link to='/palette/new'>Create Palette</Link>
          </nav>

          {/* wrapper */}
          <TransitionGroup className={classes.palettes}>
            {palettes.map((palette) => {
              return (
                // can pass multiple classes to this trasitions via the classNames
                <CSSTransition
                  key={palette.paletteName}
                  timeout={500}
                  classNames='fade'
                >
                  <MiniPalette
                    {...palette}
                    handleClick={this.goToPalette}
                    // deletePalette={deletePalette}
                    openDialog={this.openDeleteDialog}
                    key={palette.id}
                  />
                </CSSTransition>
              );
              /* Spreading or "extracting" props in palette */
            })}
          </TransitionGroup>
        </div>
        <Dialog
          open={openDeleteDialog}
          aria-labelledby='delete-dialog-title'
          onClose={this.closeDeleteDialog}
        >
          <DialogTitle id='delete-dialog-title'>Delete Palette?</DialogTitle>
          <List>
            <ListItem button onClick={this.deleteConfirm}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: green[200], color: green[600] }}
                >
                  <CheckCircleIcon
                    style={{ display: 'block', margin: 'auto' }}
                  />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Delete</ListItemText>
            </ListItem>
            <ListItem button onClick={this.closeDeleteDialog}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: grey[500], color: grey[800] }}
                >
                  <CloseIcon style={{ display: 'block', margin: 'auto' }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Cancel</ListItemText>
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

// Passing styles to PaletteList
export default withStyles(styles)(PaletteList);
