import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #e4e1dedd;
  height: 500px;
  width: 100%;
`;

const Title = styled.p`
  font-family: "Carrois Gothic SC", sans-serif;
  font-size: 30px;
  text-transform: uppercase;
  align-self: center;
  color: black;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 8px;
`;

const Line = styled.div`
  background-color: #ffb341;
  height: 4px;
  width: 100px;
`;

const Practices = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Areas de Practica</Title>
        <Line />
      </TitleContainer>
    </Container>
  );
};

export default Practices;
