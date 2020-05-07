import sizes from '../styles/Sizes'
const styles = {
    root: {
        width: '20%',
        // // if we're showing the full palette, meaning all  colors  set to 25%
        height: '25%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        // this add the 'Hover' action to the svg icon inside the root div,
        '&:hover svg': {
            color: 'white',
            transform: 'scale(1.2)',
        },
        [sizes.down('lg')]: {
            width: '25%',
            height: '20%',
        },
        [sizes.down('md')]: {
            width: '50%',
            height: '10%',
        },
        [sizes.down('sm')]: {
            width: '100%',
            height: '5%',
        },
    },
    boxContent: {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'absolute',
        width: '100%',
        left: '0px',
        bottom: '0px',
        padding: '10px',
        color: 'rgba(0,0,0,0.5)',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px',
    },
    deleteIcon: {
        transition: 'all 0.4s ease-in-out',
    },
};

export default styles