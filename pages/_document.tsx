import Document, { Html, Head, Main, NextScript } from "next/document";
import CssBaseline from "@mui/material/CssBaseline";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://api.tiles.mapbox.com/mapbox-gl-js/v2.7.1/mapbox-gl.css"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Cinzel&family=Syncopate&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Carrois+Gothic+SC&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Lora&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/aos@next/dist/aos.css"
          />
          <link rel="canonical" href="https://estudiojuridicopalomeque.com/" />
          <title>{`Estudio Juridico Palomeque`}</title>
          <meta
            name="description"
            content="Estudio juridico Palomeque, Eugenia Palomeque, abogada especializada en Compliance. Revisor Externo Independiente, Auditoria, Diseño de procesos, Comite. "
          />
          <meta name="description" content="Estudio juridico Palomeque" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, user-scalable=yes, viewport-fit=cover"
          />
          <meta
            name="google-site-verification"
            content="y8KQAQmEDZVbhW1eJHqxwxu1gGZOLH5ufdhevFN8FpM"
          />
          <meta
            name="keywords"
            content="Derecho, Abogados, Eugenia Palomeque, Estudio Juridico, Compliance, Law Firm, Palomeque, Abogado"
          ></meta>
          <link rel="icon" href="/images/logo.png" />
          <meta name="robots" content="index, follow" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
