import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Container } from './Container';
import { GlobalStyle } from './GlobalStyle';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
      <GlobalStyle />
    </Container>
  );
};
