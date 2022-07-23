import styled from "@emotion/styled";
import {
  Alert,
  Box,
  Button,
  Input,
  InputLabel,
  TextareaAutosize,
} from "@mui/material";
import { getAuth, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { NEW_POST, PUBLISH_POST } from "../../gql/mutations/post";
import BlogCards from "../../components/common/BlogCards";
const BlogPostContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AlertContainer = styled(Box)`
  position: fixed;
  z-index: 2000;
  width: 100%;
  display: flex;
  justify-content: center;
  top: 70px;
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

const NewBlogContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  margin-top: 100px;
  gap: 100px;
`;

const BlogPost = () => {
  const [user, setUser] = useState({});
  const [createPost, { data }] = useMutation(NEW_POST);
  const [publishPost, { data: data2 }] = useMutation(PUBLISH_POST);
  const { getValues, register } = useForm();
  const [alert, setAlert] = useState({ message: "", severity: 0 });

  const firebaseConfig = {
    apiKey: "AIzaSyCIl915k-YCdvudI-OMcczyTQy3R7cHE7Y",
    authDomain: "estudio-juridico-palomeque.firebaseapp.com",
    projectId: "estudio-juridico-palomeque",
    storageBucket: "estudio-juridico-palomeque.appspot.com",
    messagingSenderId: "898127281987",
    appId: "1:898127281987:web:583a647ed413c3960a39f6",
    measurementId: "G-DQRLZETLTP",
  };
  const router = useRouter();
  initializeApp(firebaseConfig);
  const auth = getAuth();
  useEffect(() => {
    if (!auth.currentUser) {
      router.push({
        pathname: `/`,
      });
    } else {
      setUser(auth.currentUser);
    }
  }, []);

  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setAlert({ message: "Log Out", severity: 1 });
        router.push({
          pathname: `/`,
        });
      })
      .catch((error) => {
        setAlert({ message: "Error", severity: 2 });
      });
  };

  const handlePostNewBlog = () => {
    try {
      const data = getValues();
      createPost({
        variables: {
          title: data.title,
          blogContent: data.content,
        },
      }).then((data) => {
        console.log(data);
        const id = data.data.createPost.id;

        publishPost({
          variables: {
            id: id,
          },
        });
        setAlert({ message: "Blog Published", severity: 1 });
      });
    } catch (error) {
      console.log(error);
      setAlert({ message: "Error", severity: 2 });
    }
  };

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
      {auth?.currentUser && (
        <>
          <BlogPostContainer
            onSubmit={(e) => {
              e.preventDefault();
              handlePostNewBlog;
            }}
          >
            <TitleContainer>
              <Title>Blog Post</Title>
              <Line />
            </TitleContainer>
            <Button onClick={handleLogOut}>LogOut</Button>
            <NewBlogContainer>
              <InputLabel>Titulo del Blog</InputLabel>
              <Input {...register("title")} />

              <InputLabel>Contenido del blog</InputLabel>
              <TextareaAutosize {...register("content")}></TextareaAutosize>
              <Button onClick={handlePostNewBlog} type="submit">
                Crear nuevo Blog
              </Button>
            </NewBlogContainer>
          </BlogPostContainer>
          <BlogCards></BlogCards>
        </>
      )}
    </>
  );
};

export default BlogPost;
