import sizes from '../styles/Sizes'


import bg from './bg.svg'
export default {
    '@global': {
        // anything defined inside here will not get unique prefixes. Stays global css meaning unchanged
        '.fade-enter': {
            opacity: 0,
            transform: 'scale(0.9)',
            height: '2300px'
        },
        '.fade-enter-active': {
            opacity: 1,
            transform: ' translateX(0)',
            transition: 'opacity 300ms, transform 300ms',
        },
        '.fade-exit': {
            opacity: 1,
        },
        '.fade-exit-active ': {
            opacity: 0,
            transform: ' scale(0.9)',
            transition: ' opacity 500ms, transform 300ms ease-out',
        }

    },
    root: {
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        /* background by SVGBackgrounds.com */
        backgroundColor: '#0b7',
        backgroundImage: `url(${bg})`,
        // when overflowing, changes to scrolling
        overflow: 'scroll'
    },
    heading: {
        fontSize: '2rem'
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [sizes.down('xl')]: {
            width: '80%'
        },
        [sizes.down('xs')]: {
            width: '70%'
        },
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: 'center',
        color: 'white',
        '& a': {
            color: 'white',
            textDecoration: 'none',
            transition: '1s',
        },
        '& a:hover': {
            cursor: 'pointer',
            transform: 'scale(1.1)',
            color: 'orange'
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "1.5rem",

        [sizes.down('md')]: {
            gridTemplateColumns: "repeat(2, 1fr)",
        },
        [sizes.down('xs')]: {
            gridTemplateColumns: "repeat(1, 1fr)",
            gridGap: "1.5rem",
        },
    }
};