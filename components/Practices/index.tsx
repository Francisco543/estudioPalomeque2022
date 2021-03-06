import styled from "@emotion/styled";
import { ReactElement, useEffect } from "react";
import AOS from "aos";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #e4e1dedd;
  height: "fit-content";
  width: 100%;
`;

const Title = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
  font-weight: bold;
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
const LineEnd = styled.div`
  background-color: #ffb341;
  height: 4px;
  width: 100px;
  align-self: flex-end;
  justify-self: flex-end;
`;
const LineBlueEnd = styled.div`
  background-color: #101055;
  height: 4px;
  width: 100px;
  align-self: flex-end;
`;

const PracticasContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: "fit-content";
`;
const PracticasCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 30px;
  flex-direction: column;
  background-color: #fff;
  width: 400px;
  height: 450px;
`;

const TituloPractica = styled.p`
  font-family: "Montserrat";
  font-size: 30px;
  text-transform: uppercase;
  align-self: center;
  color: black;
`;

const TextoPractica = styled.p`
  font-family: "Lora", serif;
  font-size: 15px;
  line-height: 1.875;
  letter-spacing: 1.5px;
  align-self: center;
  color: black;
  max-width: 80%;
`;

const StyledIcon = styled.img`
  width: 90px;
  height: 90px;
`;

const Practices = (): ReactElement => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container id={"areas"}>
      <TitleContainer>
        <Title>Areas de Practica</Title>
        <Line data-aos="fade-right" />
      </TitleContainer>
      <PracticasContainer>
        <PracticasCard data-aos="fade-up">
          <TituloPractica>Dise??o de Procesos</TituloPractica>
          <StyledIcon src="/images/proceso-de-diseno.png"></StyledIcon>
          <TextoPractica>
            Elaboraci??n y Adecuaci??n de Pol??ticas y Procedimientos para su
            Implementaci??n y Cumplimiento Normativo. Manuales. C??digos.
            Lineamientos
          </TextoPractica>
          <LineEnd />
        </PracticasCard>
        <PracticasCard data-aos="fade-up">
          <TituloPractica>REI</TituloPractica>
          <StyledIcon src="/images/capacitacion.png"></StyledIcon>
          <TextoPractica>
            Revisor Externo Independiente: Unidad de Informaci??n Financiera
            (UIF). Emisi??n y presentaci??n ante la UIF de informes de revisi??n
            externa independiente vinculadas al cumplimiento, por su parte de
            los Sujetos Obligados
          </TextoPractica>
          <LineBlueEnd />
        </PracticasCard>
        <PracticasCard data-aos="fade-up">
          <TituloPractica>Capacitacion</TituloPractica>
          <StyledIcon src="/images/capacitacion.png"></StyledIcon>
          <TextoPractica>
            Dise??o y Elaboracion de Programas de Capacitaci??n para los distintos
            niveles de recursos humanos
          </TextoPractica>
          <LineEnd />
        </PracticasCard>
        <PracticasCard data-aos="fade-up">
          <TituloPractica>Auditoria</TituloPractica>
          <StyledIcon src="/images/auditoria2.png"></StyledIcon>
          <TextoPractica>
            Control interno global de identificaci??n, evaluaci??n, migraci??n y
            monitoreo de Riesgos de LA/FT. Revisiones integrales para la
            identificaci??n de deficiencias o mejoras a aplicar
          </TextoPractica>
          <LineBlueEnd />
        </PracticasCard>
        <PracticasCard data-aos="fade-up">
          <TituloPractica>Comite</TituloPractica>
          <StyledIcon src="/images/entrevista.png"></StyledIcon>
          <TextoPractica>
            Participaci??n en Comit?? de Compliance o PLA&FT Redacci??n de Minutas.
            Seguimiento de temas tratados.
          </TextoPractica>
          <LineEnd />
        </PracticasCard>
        <PracticasCard data-aos="fade-up">
          <TituloPractica>Requerimientos</TituloPractica>
          <StyledIcon src="/images/archivo.png"></StyledIcon>
          <TextoPractica>
            Asistencia en Requerimientos o Procesos de Supervisi??n de Organismos
            de Control/Reguladores
          </TextoPractica>
          <LineBlueEnd />
        </PracticasCard>
      </PracticasContainer>
    </Container>
  );
};

export default Practices;
