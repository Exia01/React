import chroma from 'chroma-js';
import sizes from '../styles/Sizes' //using helper func
// exporting obj as unnamed
export default {
    ColorBox: {
        width: '20%',
        // // if we're showing the full palette, meaning all  colors  set to 25%
        height: (props) => (props.showingFullPalette ? '25%' : '50%'),
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        // this add the 'Hover' action the the button within the Colorbox class, its okay since it is only one button
        '&:hover button': {
            opacity: 1,
        },
        // lg sizes and below
        [sizes.down('lg')]: {
            width: '25%',
            // props to determine which pallete we are using
            height: (props) => (props.showingFullPalette ? '20%' : '33.33%'),
        },
        // md sizes and below
        [sizes.down('md')]: {
            width: '50%',
            height: (props) => (props.showingFullPalette ? '10%' : '20%'),
        },
        [sizes.down('xs')]: {
            width: '100%',
            height: (props) => (props.showingFullPalette ? '5%' : '10%'),
        },

        // [sizes.up('sm')]:{//helper function
        // }
        // '@media(max-width:900px)': {//0-500px
        //     width: '50%'
        // },

    },
    copyText: {
        color: (props) =>
            // creating a luminance range to change text, could also move to a func
            chroma(props.background).luminance() >= 0.7 ? 'black' : 'white',
    },
    colorName: {
        color: (props) =>
            chroma(props.background).luminance() <= 0.08 ? 'white' : 'black',
        // c
    },
    seeMore: {
        color: (props) =>
            // checking if it is a light color
            chroma(props.background).luminance() >= 0.07
                ? 'rgba(0,0,0,0.6)'
                : 'white',
        background: ' rgba(255, 255, 255, 0.3)',
        position: 'absolute',
        border: 'none',
        right: '0px',
        bottom: '0px',
        width: '60px',
        height: '30px',
        textAlign: 'center',
        lineHeight: '30px',
        textTransform: 'uppercase',
    },
    copyButton: {
        // Checking if it is a light color ternary
        color: (props) =>
            chroma(props.background).luminance() >= 0.7 ? 'rgba(0,0,0,0.6)' : 'white',
        width: '100px',
        height: '30px',
        position: 'absolute',
        display: 'inline-block',
        top: '50%',
        left: '50%',
        marginLeft: '-50px',
        marginTop: '-15px',
        textAlign: 'center',
        outline: 'none',
        background: 'rgba(255, 255, 255, 0.3)',
        fontSize: '1rem',
        lineHeight: '30px',
        textTransform: 'uppercase',
        border: 'none',
        textDecoration: 'none',
        opacity: 0,
    },
    boxContent: {
        position: 'absolute',
        width: '100%',
        left: '0px',
        bottom: '0px',
        padding: '10px',
        color: 'black',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px',
    },
    copyOverlay: {
        opacity: '0',
        zIndex: '0',
        width: '100%',
        height: '100%',
        transition: 'transform 0.6s ease-in-out',
        transform: 'scale(0.1)',
    },
    showOverlay: {
        opacity: '1',
        transform: 'scale(50)',
        zIndex: '10',
        position: 'absolute',
    },
    copyMessage: {
        position: 'fixed',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        fontSize: '4rem',
        transform: 'scale(0.1)',
        opacity: '0',
        color: 'white',
        // Targeting h1 inside copyMessage class
        '& h1': {
            fontWeight: '400',
            textShadow: '1px 2px black',
            background: 'rgba(255, 255, 255, 0.2)',
            width: '100%',
            textAlign: 'center',
            marginBottom: '0',
            padding: '1rem',
            textTransform: 'uppercase',
            [sizes.down('xs')]: {
                fontSize: '5rem',
            },
        },
        // Targetting all P tags inside copyMessage
        '& p': {
            fontSize: '2rem',
            fontWeight: '100',
        },
    },
    showMessage: {
        opacity: '1',
        transform: 'scale(1)',
        zIndex: '25',
        transition: 'all 0.4s ease-in-out',
        transitionDelay: '0.3s',
    },
};