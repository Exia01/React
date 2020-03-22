// Sample of what color obj is being passed
// {
//     paletteName: "Flat UI Colors Dutch",
//     id: "flat-ui-colors-dutch",
//     emoji: "🇳🇱",
//     colors: [
//       { name: "Sunflower", color: "#FFC312" },
//       { name: "Energos", color: "#C4E538" },
//       { name: "BlueMartina", color: "#12CBC4" },
//       { name: "LavenderRose", color: "#FDA7DF" },
//       { name: "BaraRose", color: "#ED4C67" },
//       { name: "RadiantYellow", color: "#F79F1F" },
//       { name: "AndroidGreen", color: "#A3CB38" },
//       { name: "MediterraneanSea", color: "#1289A7" },
//       { name: "LavenderTea", color: "#D980FA" },
//       { name: "VerryBerry", color: "#B53471" },
//       { name: "PuffinsBill", color: "#EE5A24" },
//       { name: "PixelatedGrass", color: "#009432" },
//       { name: "MerchantMarineBlue", color: "#0652DD" },
//       { name: "ForgottenPurple", color: "#9980FA" },
//       { name: "HollyHock", color: "#833471" },
//       { name: "RedPigment", color: "#EA2027" },
//       { name: "TurkishAqua", color: "#006266" },
//       { name: "20000LeaguesUnderTheSea", color: "#1B1464" },
//       { name: "CircumorbitalRing", color: "#5758BB" },
//       { name: "MagentaPurple", color: "#6F1E51" }
//     ]
//   }

import chroma from 'chroma-js'

//Different levels
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const generatePalette = starterPalette => {
    // passing color palette, creating new one with added shade levels for each color
    let newPalette = {
        palette: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {}
    }

    // first loop through the colors and make key with empty array 
    for (const level of levels) {
        //creating key with number and setting val to arr 
        newPalette.colors[level] = []
    }

    // second top loop generate scale
    for (const color of starterPalette.colors) {
        // Generate a scale with all shades

        let scale = generateScale(color.color, 10).reverse() //from light to dark

        // third loop loop through the scale and push the new obj color into each 

        for (const i in scale) {
            //add in to our new palette
            newPalette.colors[levels[i]].push({
                name: `${color.name} ${levels[i]}`,
                id: color.name.toLowerCase().replace(/ /g, '-'), //replace s[ace globally with a dash
                hex: scale[i],
                rgb: chroma(scale[i]).css(),
                rgba: chroma(scale[i]).css().replace('rgb', 'rgba').replace(')', ',1.0)'),
            })
            console.log(scale, newPalette.colors[levels[i]]);
        }
    }

    return newPalette
}
function getRange(hexColor) {
    // Takes hex color and return an array that goes from input color
    const end = "#fff";
    // If using black, gets too many black colors, using white instead
    return [
        // from darker color to our hex color to white
        chroma(hexColor).darken(1.4).hex(), hexColor, end
    ];
}


function generateScale(hexColor, numberOfColors) {
    // gives 10 colors based on input colors
    return chroma.scale(getRange(hexColor)).mode('lab').colors(numberOfColors) //creates a scale from dark to light


}

export { generatePalette } 