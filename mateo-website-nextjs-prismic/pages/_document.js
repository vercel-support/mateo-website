import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-CF3DTMKFR4"></script>
          <script src="scripts/ga.js" async></script>
          <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=e2787f68-6b11-460d-9abd-9eedd5587844"> </script>

        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
