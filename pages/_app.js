import Navigation from '/components/Navigation';
import '@/styles/globals.css';
import { Fragment } from 'react';

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Navigation />
      <Component {...pageProps} />
    </Fragment>
  );
}
