import styled from "@emotion/styled";
import AboutMe from "../AboutMe";

import Background from "../common/Background";
import CarouselComp from "../common/Carousel";
import NavBarTop from "../NavBarTop";

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
    </Container>
  );
};

export default HomePage;
