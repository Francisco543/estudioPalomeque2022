import styled from "@emotion/styled";
import {
  Button,
  Input,
  InputLabel,
  Modal,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { maxWidth } from "@mui/system";
import { useState } from "react";

const ContactoContainerWrapper = styled.div`
  height: 550px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e4e1dedd;
  @media (max-width: 1000px) {
    height: 900px;
  }
`;

const ContactoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 85%;
  height: 450px;
  background-color: #ca9737;

  @media (max-width: 1000px) {
    flex-direction: column;
    height: 800px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 40px;
  @media (max-width: 1000px) {
    width: 90%;
  }
`;
const ImageContainer = styled.div`
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
    height: 50%;
  }
`;

const StyledLabel = styled(InputLabel)`
  font-family: "Lora", serif;
  font-size: 16px;
  line-height: 1.875;
  letter-spacing: 1.5px;
  color: black;
  margin-top: 15px;
`;

const ButtonText = styled.p`
  font-family: "Lora", serif;
  font-size: 13px;
  line-height: 1.875;
  letter-spacing: 1.5px;
  color: #ffffff;
  margin-top: 15px;
`;

const SendButton = styled(Button)`
  background-color: rgba(26, 22, 32, 0.966);
  border-radius: 5px;
  width: 100px;
  height: 40px;
  margin-top: 15px;
  align-self: flex-end;
`;

const ImageContacto = styled.img`
  width: 100%;
  height: 100%;
`;

const MenuModalContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Contacto = () => {
  return (
    <ContactoContainerWrapper>
      <ContactoContainer>
        <ImageContainer>
          <ImageContacto src={"/images/slidebar1.jpg"}></ImageContacto>
        </ImageContainer>
        <FormContainer>
          <StyledLabel>Nombre:</StyledLabel>
          <Input></Input>
          <StyledLabel>Apellido:</StyledLabel>
          <Input></Input>
          <StyledLabel>Escribinos tu consulta:</StyledLabel>
          <TextareaAutosize
            style={{
              background: "transparent",
              maxWidth: "600px",
              maxHeight: "100px",
            }}
          ></TextareaAutosize>
          <SendButton>
            <ButtonText>Enviar</ButtonText>
          </SendButton>
        </FormContainer>
      </ContactoContainer>
    </ContactoContainerWrapper>
  );
};

export default Contacto;
