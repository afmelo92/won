import type { AppProps /*, AppContext */, NextWebVitalsMetric } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Won</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work with Typescript, React, NextJS ans Styled Components"
        />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}

export default App
