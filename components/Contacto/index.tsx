import styled from "@emotion/styled";
import {
  Alert,
  Box,
  Button,
  Input,
  InputLabel,
  Modal,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import emailjs from "emailjs-com";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

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

const MessageTextArea = styled(TextareaAutosize)`
  :focus {
    outline: none;
  }
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

const AlertContainer = styled(Box)`
  position: fixed;
  z-index: 2000;
  width: 100%;
  display: flex;
  justify-content: center;
  top: 70px;
`;

const Contacto = () => {
  const [alert, setAlert] = useState({ message: "", severity: 0 });

  const enviarEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_v2jk8od",
        "template_eynqj9s",
        e.target,
        "user_nT40zrToC43ymio91MwmK"
      )
      .then(
        function (response) {
          console.log(response);
          setAlert({ message: "Mensaje enviado", severity: 1 });
          setValue("name", "");
          setValue("mail", "");
          setValue("message", "");
        },
        function (error) {
          console.log(error);
          setAlert({
            message: "Error al enviar el mensaje, intente nuevamente",
            severity: 2,
          });
        }
      );
  };

  const {
    register,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    let closeAlert: any;
    if (alert)
      closeAlert = setTimeout(() => {
        setAlert({ message: "", severity: 0 });
      }, 5000);
    return () => clearTimeout(closeAlert);
  }, [alert]);

  return (
    <>
      {alert?.message && (
        <AlertContainer>
          <Alert severity={alert.severity == 1 ? "success" : "error"}>
            {alert.message}
          </Alert>
        </AlertContainer>
      )}
      <form onSubmit={enviarEmail}>
        <ContactoContainerWrapper>
          <ContactoContainer>
            <ImageContainer>
              <ImageContacto src={"/images/slidebar1.jpg"}></ImageContacto>
            </ImageContainer>
            <FormContainer>
              <StyledLabel>Nombre y Apellido:</StyledLabel>
              <Input {...register("name")} name={"name"} />
              <StyledLabel>Mail:</StyledLabel>
              <Input {...register("mail")} name={"mail"} />
              <StyledLabel>Escribinos tu consulta:</StyledLabel>
              <MessageTextArea
                {...register("message")}
                name={"message"}
                style={{
                  background: "transparent",
                  maxWidth: "600px",
                  maxHeight: "100px",
                  borderColor: "transparent",
                  borderBottomColor: "#423d3d",
                }}
              ></MessageTextArea>
              <SendButton type="submit">
                <ButtonText>Enviar</ButtonText>
              </SendButton>
            </FormContainer>
          </ContactoContainer>
        </ContactoContainerWrapper>
      </form>
    </>
  );
};

export default Contacto;
