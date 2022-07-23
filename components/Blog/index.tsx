import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Avatar, Box } from "@mui/material";
import AOS from "aos";
import { useEffect } from "react";
import { GET_POSTS } from "../../gql/querys/posts";

const BlogContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: "fit-content";
  width: 100%;
  background-color: #e4e1dedd;
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
  background-color: #101055;
  height: 4px;
  width: 100px;
`;

const BlogArticleContainer = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-evenly;
  width: 100%;
  height: "fit-content";
  background-color: white;
`;

const BlogTextContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const BlogTitle = styled.h4`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  line-height: 1.875;
  letter-spacing: 1.5px;
  color: orange;
`;
const BlogText = styled.p`
  font-family: "Lora", serif;
  max-width: 700px;
  font-size: 16px;
  line-height: 1.875;
  letter-spacing: 1.5px;
  color: black;
`;

const AllBlogsContainer = styled(Box)`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

const Blog = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BlogContainer>
      <TitleContainer>
        <Title>Blog</Title>
        <Line data-aos="fade-right" />
      </TitleContainer>
      <AllBlogsContainer>
        {data?.posts?.map((blog: any, index: number) => {
          return (
            <BlogArticleContainer
              key={index}
              data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
            >
              <Avatar
                src={"images/eugenia.jpg"}
                sx={{ width: "100px", height: "100px" }}
              ></Avatar>
              <BlogTextContainer>
                <BlogTitle>{blog?.title}</BlogTitle>
                <BlogText>{blog?.content?.text}</BlogText>
              </BlogTextContainer>
            </BlogArticleContainer>
          );
        })}
      </AllBlogsContainer>
    </BlogContainer>
  );
};
export default Blog;
