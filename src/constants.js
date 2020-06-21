export const borders = {
    buttonDefaultBorder: '0.125em solid transparent'
}

export const colorCodes = {

    blue: {
        lightest: '24, 32, 181',
        light: '22, 29, 166',
        regular: '18, 24, 136',
        dark: '14, 19, 106'
    },

    gold: {
        lightest: '240, 180, 46',
        light: '227, 166, 42',
        regular: '202, 141, 34',
        dark: '177, 116, 26'
    },

    black: {
        lightest: '75, 75, 75',
        light: '60, 60, 60',
        regular: '30, 30, 30',
        dark: '0, 0, 0'
    },

    white: {
        lightest: '255, 255, 255',
        light: '240, 240, 240',
        regular: '210, 210, 210',
        dark: '180, 180, 180'
    }
    
}

export const computeColor = (colorCode, alpha=1) => {
    return `rgba(${colorCode}, ${alpha})`;
}

export const computeShadow = (valuesLight, valuesShadow, lightColor, shadowColor, alphaLight, alphaShadow) => {
    return `${valuesLight.join(' ')} ${computeColor(lightColor, alphaLight)}, ${valuesShadow.join(' ')} ${computeColor(shadowColor, alphaShadow)}`
}

export const shadowValues = {

    defaultButton: {
        light: ['-0.375em', '-0.375em', '0.9375em'],
        shadow: ['0.375em', '0.375em', '0.9375em']
    },

    afterActiveButton: {
        light: ['inset', '-0.125em', '-0.125em', '0.625em'],
        shadow: ['inset', '0.125em', '0.125em', '0.625em']
    }

}

export const transitions = {
    buttonDefaultTransition: 'all 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    linearTransition: 'all 0.25s linear'
}
