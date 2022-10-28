import { ThemeProvider } from './src/components/ContextProviders/ThemeProvider';
import { GlobalStyle } from './src/components/Layout/sharedStyles/globalStyles';
import './src/styles/global.css';

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyle />
    <ThemeProvider>{element}</ThemeProvider>
  </>
);
