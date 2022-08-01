import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { GET_POSTS } from "../../gql/querys/posts";
import AOS from "aos";

const NewBlogContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: "fit-content";
`;

const BlogPostContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const NewBlog = () => {
  const { loading, error, data } = useQuery(GET_POSTS, {
    fetchPolicy: "no-cache",
  });

  const [blog, setBlog] = useState({});
  const [openBlogModal, setOpenBlogModal] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const setCloseBlogModal = () => {
    setOpenBlogModal(false);
  };

  const handleOpenReadMore = (blog: any) => {
    setBlog(blog);
    setOpenBlogModal(true);
  };

  return (
    <>
      <BlogModal
        blog={blog}
        openModal={openBlogModal}
        setCloseBlogModal={setCloseBlogModal}
      ></BlogModal>
    </>
  );
};

export default NewBlog;
