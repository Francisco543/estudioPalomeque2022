import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "../apolloClient";
import "../components/NavBarTop/navStyles.css";
import "../styles/normalize.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
