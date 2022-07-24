import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { RiMailFill, RiMapPinFill, RiPhoneFill } from "react-icons/ri";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(26, 22, 32, 0.966);
  width: 100%;
  height: 150px;
  @media (max-width: 800px) {
    flex-direction: column;
    height: 300px;
  }
`;

const FooterItem = styled.p`
  font-size: 11px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 1px;
  word-break: normal;
  font-family: "Lora", serif;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const HLine = styled.div`
  height: 70%;
  width: 1px;
  background-color: #d1b519;
  @media (max-width: 800px) {
    height: 1px;
    width: 70%;
  }
`;

const ItemContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Section>
        <FooterItem>María Eugenia Palomeque Abogados</FooterItem>
        <FooterItem>Todos los derechos reservados</FooterItem>
      </Section>
      <HLine />
      <Section>
        <ItemContainer>
          <RiPhoneFill color="white" />
          <FooterItem>Teléfono: +54 911 11 3309-7174 </FooterItem>
        </ItemContainer>

        <ItemContainer>
          <RiMapPinFill color="white" />
          <FooterItem>Dirección: Buenos Aires, Argentina</FooterItem>
        </ItemContainer>
        <ItemContainer>
          <RiMailFill color="white" />
          <FooterItem>E-Mail: estudiojuridicopalomeque@gmail.com </FooterItem>
        </ItemContainer>
      </Section>
    </FooterContainer>
  );
};

export default Footer;
