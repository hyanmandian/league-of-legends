import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from '@league-of-legends/design-system';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Head>
        <title>League of Legends</title>
      </Head>

      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
