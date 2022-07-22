import styled from "@emotion/styled";
import { Avatar, Typography } from "@mui/material";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f3efefe4;
  height: 500px;
  align-items: center;
  justify-content: space-around;
`;

const ImageFooter = styled.p`
  color: #070606da;
  font-family: "Montserrat" !important;
  font-size: 30px;
  margin-left: -50px;
  margin-top: 20px;
  @media (max-width: 1441px) {
    margin-top: 0;
    margin-left: 0;
  }
`;

const Aboutv2 = () => {
  return (
    <AboutContainer>
      <Avatar style={{ width: 200, height: 200 }} src={"/images/eugenia.jpg"} />
      <ImageFooter>Eugenia Palomeque</ImageFooter>
    </AboutContainer>
  );
};

export default Aboutv2;
