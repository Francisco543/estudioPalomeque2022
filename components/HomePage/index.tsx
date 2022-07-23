import styled from "@emotion/styled";
import gql from "graphql-tag";
import { useEffect, useState } from "react";
import { ApolloProvider } from "react-apollo";
import client from "../../apolloClient";
import AboutMe from "../AboutMe";
import Blog from "../Blog";

import Background from "../common/Background";
import CarouselComp from "../common/Carousel";
import Contacto from "../Contacto";
import Footer from "../Footer";
import NavBarTop from "../NavBarTop";
import Practices from "../Practices";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 0;
`;

const HomePage = () => {
  return (
    <Container>
      <Background />
      <NavBarTop />
      <CarouselComp />
      <AboutMe />
      <Practices />
      <Blog />
      <Contacto />
      <Footer />
    </Container>
  );
};

export default HomePage;
