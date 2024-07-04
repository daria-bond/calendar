import type { AppProps } from 'next/app';
import React, { ReactElement } from 'react';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
