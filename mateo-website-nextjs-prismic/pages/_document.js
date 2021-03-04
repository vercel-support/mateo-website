import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-CF3DTMKFR4"></script>
          <script src="scripts/ga.js" async></script>
          <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/8830851.js"></script>

          <script>
              (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:2279371,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          </script>

        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
