import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Global } from '@emotion/react';
import React from 'react';
import { render } from 'react-dom';

import { Toast } from './components';
import { GlobalStyle } from './global-styles';
import { PageRouter } from './PageRouter';
import { RootStoreProvider } from './stores/RootStore';

/* render(
  <React.StrictMode>
    <Global styles={GlobalStyle} />
    <RootStoreProvider>
      <PageRouter />
      <Toast />
    </RootStoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
); */

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  render(
    <React.StrictMode>
      <Global styles={GlobalStyle} />
      <RootStoreProvider>
        <PageRouter />
        <Toast />
      </RootStoreProvider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
