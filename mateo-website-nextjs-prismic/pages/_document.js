import Document, { Html, Head, Main, NextScript } from 'next/document'
import { hotjar } from 'react-hotjar';

export default class MyDocument extends Document {

  render() {
      hotjar.initialize(2279371, 6);
    return (
      <Html lang="en">
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-CF3DTMKFR4"></script>
          <script src="scripts/ga.js" async></script>
          <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/8830851.js"></script>

        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
