import App, {Container} from 'next/app';
import React from 'react';
import {Provider} from 'react-redux';
import withRedux from 'next-redux-wrapper';
import Head from 'next/head';
import initStore from '../store';

class MyApp extends App {
  static async getInitialProps({Component, router, ctx}) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps (ctx);
    }

    return {
      pageProps,
    };
  }

  render () {
    const {Component, pageProps, store} = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Head>
            <title> resume-creator</title>
          </Head>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}
export default withRedux (initStore, {
  debug: typeof window !== 'undefined' && process.env.NODE_ENV !== 'production',
}) (MyApp);
