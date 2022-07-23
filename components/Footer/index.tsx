import styled from "@emotion/styled";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(26, 22, 32, 0.966);
  width: 100%;
  height: 100px;
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
`;

const HLine = styled.div`
  height: 70%;
  width: 1px;
  background-color: #d1b519;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Section>
        <FooterItem>Eugenia Palomeque Abogados</FooterItem>
        <FooterItem>Todos los derechos reservados</FooterItem>
      </Section>
      <HLine />
      <Section>
        <FooterItem>Telefono: 11 3309-7174 </FooterItem>
        <FooterItem>Direccion: Buenos Aires, CapitalFederal</FooterItem>
      </Section>
    </FooterContainer>
  );
};

export default Footer;
