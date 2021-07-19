import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import Header from '../Header';
import ContactsList from '../ContactsList';

import { Container } from './styles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Container>
        <Header />
        <ContactsList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
