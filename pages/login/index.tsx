import styled from "@emotion/styled";
import { initializeApp } from "firebase/app";
import { Button, Input, InputLabel } from "@mui/material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
const LoginContainer = styled.form`
  width: "fit-content";
  height: "fit-content";
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginImage = styled.img`
  width: 50%;
  height: 200px;
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Title = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  align-self: center;
  color: black;
`;

const BottomTextAdvertice = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 10px;
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
const Login = () => {
  const router = useRouter();
  const firebaseConfig = {
    apiKey: "AIzaSyCIl915k-YCdvudI-OMcczyTQy3R7cHE7Y",
    authDomain: "estudio-juridico-palomeque.firebaseapp.com",
    projectId: "estudio-juridico-palomeque",
    storageBucket: "estudio-juridico-palomeque.appspot.com",
    messagingSenderId: "898127281987",
    appId: "1:898127281987:web:583a647ed413c3960a39f6",
    measurementId: "G-DQRLZETLTP",
  };

  useEffect(() => {
    initializeApp(firebaseConfig);
  }, []);

  const {
    register,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();

  const handleSignIn = () => {
    const user = getValues();
    console.log("🚀 ~ file: index.tsx ~ line 64 ~ handleSignIn ~ user", user);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("🚀 ~ file: index.tsx ~ line 68 ~ .then ~ user", user);
        router.push({
          pathname: `/blog-post`,
        });
        // ...
        console.log("exitoso");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error");
      });
  };

  return (
    <PageContainer>
      <LoginContainer
        onSubmit={(e) => {
          e.preventDefault();
          handleSignIn();
        }}
      >
        <TitleContainer>
          <Title>Login</Title>
          <Line />
        </TitleContainer>
        <LoginImage src="/images/logoimagen2.png"></LoginImage>
        <InputLabel>Email</InputLabel>
        <Input {...register("email")} />
        <InputLabel>Contraseña</InputLabel>
        <Input {...register("password")} />
        <Button variant="contained" type="submit">
          Login
        </Button>
        <BottomTextAdvertice>Uso solo para administradores</BottomTextAdvertice>
      </LoginContainer>
    </PageContainer>
  );
};
export default Login;
