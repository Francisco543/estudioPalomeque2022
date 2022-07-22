import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`;
const ImageContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  height: 50%;
  min-width: 100px;
`;
const Title = styled.p`
  font-size: 19px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: black;
  font-family: "Lora", serif;
  margin-left: 20px;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: row;
`;
const MenuItem = styled.p`
  font-size: 15px;
  color: #1d1b1b;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Lora", serif;
  margin-left: 20px;
  margin-right: 50px;
  cursor: pointer;

  &:after {
    display: block;
    content: "";
    border-bottom: 2px solid #8b740d;
    transform: scaleX(0);
    transition: transform 0.35s ease-in-out;
    transform-origin: 100% 50%;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: 0 50%;
  }
`;

const Logo = styled.img`
  width: 100px;
  height: 80px;
  filter: invert(20%);
`;

const NavBarTop = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 35) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <Container className={colorChange ? "navColor" : ""}>
      <ImageContainer>
        <Logo src={"/images/logo.png"}></Logo>
        <Title className={colorChange ? "titleColor" : ""}>
          Estudio Juridico
        </Title>
      </ImageContainer>
      <Menu>
        <MenuItem className={colorChange ? "fontColor" : ""}>Estudio</MenuItem>
        <MenuItem className={colorChange ? "fontColor" : ""}>
          Areas de Practica
        </MenuItem>
        <MenuItem className={colorChange ? "fontColor" : ""}>Contacto</MenuItem>
      </Menu>
    </Container>
  );
};

export default NavBarTop;
