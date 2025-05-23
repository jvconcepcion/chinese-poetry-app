import { appWithTranslation } from 'next-i18next';
import { ParallaxProvider } from 'react-scroll-parallax';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Chinese Poetry Collection</title>
        <meta name='description' content='Chinese Poetry collection web app built with Next.js 14, TypeScript, and Tailwind CSS.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </>
  );
};

export default appWithTranslation(App);
