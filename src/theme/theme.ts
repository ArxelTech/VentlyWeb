import { extendTheme } from '@chakra-ui/react'

export const colorPallette = {
    brandColor: '#FF406E',
    whiteAccentColor: '#EFEFEF',
    white: '#ffffff',
    black: '#1A1A1A',
    blackAccentColor: '#707070',
    textInputBackgroundColor: '#F5F5F5',
    darkGrey: '#707070',
    deactivatedColor: '#E61648',
    activecolor: "#F8F8F8"
}

const colors = {
    brand: {
        primaryColor: colorPallette.brandColor,
        whiteAccentColor: colorPallette.whiteAccentColor,
        white: colorPallette.white,
        black: colorPallette.black,
        blackAccentColor: colorPallette.blackAccentColor,
        darkGrey: colorPallette.darkGrey,
        textInputBackground: colorPallette.textInputBackgroundColor,
        deactivatedCOlor: colorPallette.deactivatedColor,
        activecolor: colorPallette.activecolor,
    }
}

const fonts = {
    body: 'Heebo',
    header: 'Poppins',
    subHeader: 'Rubik',
    rubik: "Rubik"
}

export const theme = extendTheme({ colors, fonts})