import { ThemeProvider } from 'styled-components';

import GlobalStyle from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>My Contacts</h1>
    </ThemeProvider>
  );
}

export default App;
