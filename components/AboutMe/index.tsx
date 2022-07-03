import styled from "@emotion/styled";
import { Avatar } from "@mui/material";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f3efefe4;
  height: 500px;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1441px) {
    height: 650px;
    justify-content: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 710px) {
    height: 700px;
    justify-content: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ImageDiv = styled.div`
  @media (max-width: 1441px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 90px;
    width: 100%;
  }
`;

const ImageFooter = styled.p`
  color: #070606da;
  font-family: "Montserrat" !important;
  font-weight: bold;

  font-size: 30px;
  margin-left: -50px;
  margin-top: 20px;
  @media (max-width: 1441px) {
    margin-top: 0;
    margin-left: 0;
  }
`;

const NavItemSection = styled.div`
  height: 90%;
  width: 40%;
  border-radius: 15px;
  margin-left: 60px;

  @media (max-width: 710px) {
    width: 90%;
  }
`;

const DescripcionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 50%;

  justify-content: center;
  align-items: center;
  @media (max-width: 1441px) {
    width: 100%;
  }
  @media (max-width: 710px) {
    flex-direction: column;
    width: 90%;
    justify-content: center;
  }
`;

const TituloDescripcion = styled.h4`
  font-family: "Montserrat" !important;
  font-weight: bold;
  color: orange;
`;
const Descripcion = styled.p`
  font-size: 18px;
  font-family: "Montserrat";
  color: black;
  font-weight: bold;
`;
const DescripcionColumn2 = styled.p`
  font-size: 20px;
  font-family: "Montserrat" !important;
  font-weight: bold;
  color: black;
`;
const AboutMe = () => {
  return (
    <MainContainer>
      <ImageDiv>
        <Avatar
          style={{ width: 200, height: 200 }}
          src={"/images/eugenia.jpg"}
        ></Avatar>
        <ImageFooter>Eugenia Palomeque</ImageFooter>
      </ImageDiv>
      <DescripcionContainer>
        <NavItemSection>
          <TituloDescripcion>
            Estudio Juridico Palomeque & Asociados
          </TituloDescripcion>
          <Descripcion>
            Estudio Jurídico especializado en Prevención del Lavado de Activos y
            la Financiación del Terrorismo.
            <br />
            Revisor Externo Independiente, acreditada ante la Unidad de
            Información Financiera (UIF)
          </Descripcion>
        </NavItemSection>
        <NavItemSection>
          <ul>
            <li>
              <Descripcion>Medidas contra el lavado de dinero</Descripcion>
            </li>
            <li>
              {" "}
              <Descripcion>Mercado de capitales</Descripcion>
            </li>
            <li>
              <Descripcion>Planificacion estrategica</Descripcion>
            </li>
            <li>
              <Descripcion>Finanzas corporativas</Descripcion>
            </li>
            <li>
              <Descripcion>Riesgo financiero</Descripcion>
            </li>
          </ul>
        </NavItemSection>
      </DescripcionContainer>
    </MainContainer>
  );
};

export default AboutMe;
