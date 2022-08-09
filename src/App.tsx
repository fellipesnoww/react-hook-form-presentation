import React from 'react';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme'
import NormalForm from './pages/NormalForm';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <NormalForm/>
    </ThemeProvider>
  );
}

export default App;
