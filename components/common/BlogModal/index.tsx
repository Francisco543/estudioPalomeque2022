import styled from "@emotion/styled";
import { Avatar, Box, Modal } from "@mui/material";
import { Dispatch } from "react";
import { RiCloseLine } from "react-icons/ri";

const BlogModalContainer = styled.div`
  display: flex;
  width: "fit-content";
  height: "fit-content";
  padding: 50px;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: white;
`;

const BlogTextContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 50%;
  justify-content: center;
  @media (max-width: 1000px) {
    max-width: 70%;
  }
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

const StyledAvatar = styled(Avatar)`
  @media (max-width: 1000px) {
    margin: 20px;
  }
`;

const ModalContainer = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  :focus {
    outline: none;
  }
`;

const CreatedAt = styled.p`
  align-self: flex-end;
  font-family: "Lora", serif;
  font-size: 10px;
  line-height: 1.875;
  letter-spacing: 1.5px;
  color: #3a3838;
`;

const CloseButton = styled(RiCloseLine)`
  cursor: pointer;
`;

type BlogModalProps = {
  blog: any;
  openModal: boolean;
  setCloseBlogModal: Dispatch<any>;
};

const BlogModal = ({ blog, openModal, setCloseBlogModal }: BlogModalProps) => {
  return (
    <Modal open={openModal} onClose={setCloseBlogModal}>
      <ModalContainer>
        <BlogModalContainer>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <CloseButton size={20} onClick={setCloseBlogModal} />
          </Box>

          <StyledAvatar
            src={"images/eugenia.jpg"}
            sx={{ width: "100px", height: "100px" }}
          ></StyledAvatar>
          <BlogTextContainer>
            <BlogTitle>{blog?.title}</BlogTitle>
            <BlogText>{blog?.blogContent}</BlogText>
            <CreatedAt>{blog?.createdAt?.slice(0, 10)}</CreatedAt>
          </BlogTextContainer>
        </BlogModalContainer>
      </ModalContainer>
    </Modal>
  );
};

export default BlogModal;
