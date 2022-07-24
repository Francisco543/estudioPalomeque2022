import styled from "@emotion/styled";
import {
  Alert,
  Box,
  Button,
  Input,
  InputLabel,
  TextareaAutosize,
} from "@mui/material";
import emailjs from "emailjs-com";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const ContactoContainerWrapper = styled.div`
  height: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #e4e1dedd;
  @media (max-width: 1000px) {
    height: 1000px;
  }
`;

const ContactoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 85%;
  height: 450px;
  border-bottom: 2px solid orange;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
    height: 50%;
  }
`;

const StyledLabel = styled(InputLabel)`
  font-family: "Lora", serif;
  font-size: 16px;
  text-transform: uppercase;
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
  :hover {
    background-color: orange;
  }
`;

const ImageContacto = styled.img`
  width: 70%;
  height: 20%;
  margin-bottom: 100px;
`;

const AlertContainer = styled(Box)`
  position: fixed;
  z-index: 2000;
  width: 100%;
  display: flex;
  justify-content: center;
  top: 70px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 8px;
`;

const Title = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  align-self: center;
  color: black;
`;

const Line = styled.div`
  background-color: #ffb341;
  height: 4px;
  width: 100px;
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
        <ContactoContainerWrapper id={"contacto"}>
          <TitleContainer>
            <Title>Contacto</Title>
            <Line data-aos="fade-right" />
          </TitleContainer>
          <ContactoContainer>
            <ImageContainer>
              <ImageContacto src={"/images/logoimagen2.png"}></ImageContacto>
            </ImageContainer>
            <FormContainer>
              <StyledLabel>Nombre y Apellido:</StyledLabel>
              <Input {...register("name")} name={"name"} />
              <StyledLabel>E-Mail:</StyledLabel>
              <Input {...register("mail")} name={"mail"} />
              <StyledLabel>Mandanos tu consulta:</StyledLabel>
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
