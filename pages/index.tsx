import type { NextPage } from "next";
import Head from "next/head";
import { ApolloProvider } from "react-apollo";
import client from "../apolloClient";
import HomePage from "../components/HomePage";
const Home: NextPage = () => {
  return <HomePage />;
};

export default Home;
