import styled from "@emotion/styled";
import { ReactElement } from "react";

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
const LineEnd = styled.div`
  background-color: #ffb341;
  height: 4px;
  width: 100px;
  align-self: flex-end;
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
  height: 400px;
`;

const TituloPractica = styled.p`
  font-family: "Carrois Gothic SC", sans-serif;
  font-size: 30px;
  text-transform: uppercase;
  align-self: center;
  color: black;
`;

const TextoPractica = styled.p`
  font-family: "Carrois Gothic SC", sans-serif;
  font-size: 15px;
  text-transform: uppercase;
  align-self: center;
  color: black;
  max-width: 80%;
`;

const StyledIcon = styled.img`
  width: 90px;
  height: 90px;
`;

const Practices = (): ReactElement => {
  return (
    <Container>
      <TitleContainer>
        <Title>Areas de Practica</Title>
        <Line />
      </TitleContainer>
      <PracticasContainer>
        <PracticasCard>
          <TituloPractica>Diseño de Procesos</TituloPractica>
          <StyledIcon src="/images/proceso-de-diseno.png"></StyledIcon>
          <TextoPractica>
            Elaboración y Adecuación de Políticas y Procedimientos para su
            Implementación y Cumplimiento Normativo. Manuales. Códigos.
            Lineamientos
          </TextoPractica>
          <LineEnd />
        </PracticasCard>
        <PracticasCard>
          <TituloPractica>REI</TituloPractica>
          <StyledIcon src="/images/capacitacion.png"></StyledIcon>
          <TextoPractica>
            Revisor Externo Independiente: Unidad de Información Financiera
            (UIF). Emisión y presentación ante la UIF de informes de revisión
            externa independiente vinculadas al cumplimiento, por su parte de
            los Sujetos Obligados
          </TextoPractica>
          <LineBlueEnd />
        </PracticasCard>
        <PracticasCard>
          <TituloPractica>Capacitacion</TituloPractica>
          <StyledIcon src="/images/capacitacion.png"></StyledIcon>
          <TextoPractica>
            Diseño y Elaboracion de Programas de Capacitación para los distintos
            niveles de recursos humanos
          </TextoPractica>
          <LineEnd />
        </PracticasCard>
        <PracticasCard>
          <TituloPractica>Auditoria</TituloPractica>
          <StyledIcon src="/images/auditoria2.png"></StyledIcon>
          <TextoPractica>
            Control interno global de identificación, evaluación, migración y
            monitoreo de Riesgos de LA/FT. Revisiones integrales para la
            identificación de deficiencias o mejoras a aplicar
          </TextoPractica>
          <LineBlueEnd />
        </PracticasCard>
        <PracticasCard>
          <TituloPractica>Comite</TituloPractica>
          <StyledIcon src="/images/entrevista.png"></StyledIcon>
          <TextoPractica>
            Participación en Comité de Compliance o PLA&FT Redacción de Minutas.
            Seguimiento de temas tratados.
          </TextoPractica>
          <LineEnd />
        </PracticasCard>
        <PracticasCard>
          <TituloPractica>Requerimientos</TituloPractica>
          <StyledIcon src="/images/archivo.png"></StyledIcon>
          <TextoPractica>
            Asistencia en Requerimientos o Procesos de Supervisión de Organismos
            de Control/Reguladores
          </TextoPractica>
          <LineBlueEnd />
        </PracticasCard>
      </PracticasContainer>
    </Container>
  );
};

export default Practices;
