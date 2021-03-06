import sizes from '../styles/Sizes' //using helper func
export default {
    Navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "6vh"
    },
    logo: {
        marginRight: "15px",
        padding: "0 13px",
        fontSize: "22px",
        backgroundColor: "#eceff1",
        fontFamily: "Roboto",
        height: "100%",
        display: "flex",
        alignItems: "center",
        // Targeting the a tags inside the logo
        "& a": {
            textDecoration: "none",
            color: "black"
        },
        [sizes.down('xs')]: {
            display: 'none'
        },
    },
    slider: {
        width: "340px",
        margin: "0 20px",
        display: "inline-block",
        // targeting the pseudo attr of slider
        "& .rc-slider-track": {
            backgroundColor: "transparent"
        },
        // the following will override the slider from the material UI Styles
        "& .rc-slider-rail": {
            height: "8px"
        },
        "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus,.rc-slider-handle:hover": {
            backgroundColor: "green",
            outline: "none",
            border: "2px solid green",
            boxShadow: "none",
            width: "13px",
            height: "13px",
            marginLeft: "-7px",
            marginTop: "-3px"
        },
        [sizes.down('sm')]: {
            width: '150px'
        },
        [sizes.down('xs')]: {
            width: '150px'
        },
    },
    selectContainer: {
        marginLeft: "auto",
        marginRight: "1rem"
    }
};