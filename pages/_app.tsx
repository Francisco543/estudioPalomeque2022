import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../components/NavBarTop/navStyles.css";
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
