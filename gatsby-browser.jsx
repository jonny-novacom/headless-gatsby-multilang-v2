import React, { useState, useEffect } from 'react';
import { checkSession } from './src/components/utils/auth';
import { ThemeProvider } from './src/components/ContextProviders/ThemeProvider';
import { GlobalStyle } from './src/components/Layout/sharedStyles/globalStyles';
import './src/styles/global.css';

const SessionCheck = ({ children }) => {
  const [loading, stillLoading] = useState(true);
  useEffect(() => checkSession(() => stillLoading(false)));
  return loading === false && <>{children}</>;
};

export const wrapRootElement = ({ element }) => (
  <SessionCheck>{element}</SessionCheck>
);

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyle />
    <ThemeProvider>{element}</ThemeProvider>
  </>
);
