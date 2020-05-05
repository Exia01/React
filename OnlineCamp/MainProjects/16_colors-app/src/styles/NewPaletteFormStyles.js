// if width needs to be in central place, could import it somewhere
import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from './../utils/constants';
const drawerWidth = DRAWER_WIDTH; //using constant
// Takes in theme
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
  
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        display: 'flex',
        alignItems: 'center',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        height: 'calc(100vh - 64px)',
        padding: theme.spacing(0),
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
    drawerContainer: {
        width: '90%',
        height: '100%',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttons: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    button: {
        width: '49%',
    },
}));

export default useStyles