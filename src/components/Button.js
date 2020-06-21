import styled, { css } from 'styled-components';
import { computeColor, colorCodes, transitions, borders, shadowValues, computeShadow } from '../constants';

export const ButtonContent = styled.span`
    align-items: center;
    background-color: ${props => props.style.backgroundColor};
    border: ${props => props.style.border};
    border-radius: ${props => props.style.borderRadius};
    color: ${props => props.style.color};
    display: inline-flex;
    font-size: ${props => props.style.fontSize};
    height: ${props => props.style.height};
    justify-content: center;
    padding: ${props => props.style.padding};
    transition: ${props => props.style.transition};
    user-select: inherit;
    width: 100%;

    &:focus {
        outline: none;
    }
`;

ButtonContent.defaultProps = {
    style: {
        backgroundColor: 'transparent',
        border: borders.buttonDefaultBorder,
        borderRadius: '0.375em',
        color: 'inherit',
        fontSize: '1em',
        height: '2.125em',
        padding: '0.5em 0.75em',
        transition: transitions.buttonDefaultTransition
    }
}

export const StyledButton = styled.button`
    align-items: center;
    background: ${props => props.cancelButton ? computeColor(colorCodes.black.light) : computeColor(colorCodes.white.light)};
    border: ${props => props.style.main.border};
    border-radius: ${props => props.cancelButton ? '1em' : props.style.main.borderRadius};
    box-shadow: ${computeShadow(shadowValues.defaultButton.light, shadowValues.defaultButton.shadow, colorCodes.white.lightest, colorCodes.black.dark, 1, 0.25)};
    color: ${props => props.cancelButton ? computeColor(colorCodes.white.light) : computeColor(colorCodes.black.light)};
    display: inline-flex;
    font-weight: ${props => props.style.main.fontWeight};
    justify-content: center;
    outline: ${props => props.style.main.outline};
    padding: ${props => props.cancelButton ? '0.25em 0.5em' : props.style.main.padding};
    position: relative;
    transition: ${transitions.buttonDefaultTransition};
    user-select: none;


    ${p =>
        p.theme === 'dark' &&
        css`
            background: ${props => props.cancelButton ? computeColor(colorCodes.gold.light) : computeColor(colorCodes.black.light)};
            box-shadow: ${computeShadow(shadowValues.defaultButton.light, shadowValues.defaultButton.shadow, colorCodes.black.lightest, colorCodes.black.dark, 1, 1)};
            color: ${props => props.cancelButton ? computeColor(colorCodes.black.light) : computeColor(colorCodes.gold.light)};
        `}

    &:after, &:before {
        border-radius: ${props => props.style.borderRadius};
        content: '';
        height: 100%;
        left: ${props => props.style.afterAndBefore.left};
        position: absolute;
        top: ${props => props.style.afterAndBefore.top};
        transition: ${transitions.buttonDefaultTransition};
        width: 100%;
        z-index: 2;
    }

    &:before {
        background-color: transparent;
    }

    &:hover {
        cursor: pointer;

        &:before {
            background-color: ${p =>
                p.theme === 'dark' ? computeColor(colorCodes.white.lightest, 0.02) : computeColor(colorCodes.black.dark, 0.02)
            };
        }
    
    &:focus {
        outline: none;
    }

    &:active {
        box-shadow: 0 0.9375em 1.25em ${computeColor(colorCodes.black.dark, 0.02)};

        &:after {
            box-shadow: ${computeShadow(shadowValues.afterActiveButton.light, shadowValues.afterActiveButton.shadow, colorCodes.white.lightest, colorCodes.black.dark, 1, 0.15)};
        }

        &:before {
            background-color: transparent;
        }

        ${p =>
            p.theme === 'dark' && 
            css`
                &:after {
                    box-shadow: ${computeShadow(shadowValues.afterActiveButton.light, shadowValues.afterActiveButton.shadow, colorCodes.black.lightest, colorCodes.black.regular, 1, 1)};
                }
            `}
    }
`;

StyledButton.defaultProps = {
    style: {

        main: {
            border: 'none',
            borderRadius: '0.75em',
            fontWeight: '600',
            outline: 'none',
            padding: '0',
        },
        
        afterAndBefore: {
            left: '0',
            top: '0'
        }
        
    }
}