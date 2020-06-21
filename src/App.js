import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './modeThemes';
import { useDarkMode } from './useDarkMode';
import { GlobalStyles } from './globalStyles';
import { StyledButton, ButtonContent } from './components/Button';

const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <FlexContainer>
          <div style={{ marginRight: 20 }}>
            <StyledButton theme={theme} onClick={toggleTheme}>
              <ButtonContent tabIndex='-1'>Toggle Theme</ButtonContent>
            </StyledButton>
          </div>
          <div style={{ marginRight: 20 }}>
            <StyledButton theme={theme}>
              <ButtonContent tabIndex='-1' style={{height: '10em'}}>Just a button</ButtonContent>
            </StyledButton>
          </div>
          <div style={{ marginRight: 20 }}>
            <StyledButton cancelButton theme={theme}>
              <ButtonContent tabIndex='-1' style={{borderRadius: '50%'}} >&times;</ButtonContent>
            </StyledButton>
          </div>
        </FlexContainer>
      </>
    </ThemeProvider>
  );
}

export default App;