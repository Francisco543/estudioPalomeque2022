import styled from "@emotion/styled";
import { Box, Modal } from "@mui/material";
import { useEffect, useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { Link } from "react-scroll";
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
  @media (max-width: 1000px) {
    display: none;
  }
`;

const MenuMobile = styled(Box)`
  display: none;
  margin-right: 25px;
  @media (max-width: 1000px) {
    display: block;
  }
`;

const MenuItem = styled(Link)`
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

const MenuItemMobile = styled.p`
  font-size: 30px;
  color: #1d1b1b;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Lora", serif;
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

const MenuModalContainer = styled.div`
  width: 50%;
  height: 100%;
  text-align: center;
  background-color: #dab349c0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  :focus {
    outline: none;
  }
`;

const NavBarTop = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 35) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  const [openMenuModal, setOpenMenuModal] = useState(false);

  const handelCloseMenuModal = () => {
    setOpenMenuModal(false);
  };

  const handleOpenMenuModal = () => {
    setOpenMenuModal(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <>
      <Modal open={openMenuModal} onClose={handelCloseMenuModal}>
        <MenuModalContainer>
          <MenuItemMobile className={"fontColor"}>Estudio</MenuItemMobile>
          <MenuItemMobile className={"fontColor"}>
            Areas de Practica
          </MenuItemMobile>
          <MenuItemMobile className={"fontColor"}>Contacto</MenuItemMobile>
        </MenuModalContainer>
      </Modal>

      <Container className={colorChange ? "navColor" : ""}>
        <ImageContainer>
          <Logo src={"/images/logo.png"}></Logo>
          <Title className={colorChange ? "titleColor" : ""}>
            Estudio Juridico
          </Title>
        </ImageContainer>
        <Menu>
          <MenuItem
            to={"estudio"}
            smooth={true}
            offset={-200}
            duration={700}
            delay={200}
            className={colorChange ? "fontColor" : ""}
          >
            Estudio
          </MenuItem>

          <MenuItem
            to={"areas"}
            smooth={true}
            offset={-200}
            duration={700}
            delay={200}
            className={colorChange ? "fontColor" : ""}
          >
            Areas de Practica
          </MenuItem>
          <MenuItem
            to={"blog"}
            smooth={true}
            offset={-200}
            duration={700}
            delay={200}
            className={colorChange ? "fontColor" : ""}
          >
            Blog
          </MenuItem>
          <MenuItem
            to={"contacto"}
            smooth={true}
            offset={-200}
            duration={700}
            delay={200}
            className={colorChange ? "fontColor" : ""}
          >
            Contacto
          </MenuItem>
        </Menu>
        <MenuMobile>
          <RiMenuFill color="#ca9737" size={30} onClick={handleOpenMenuModal} />
        </MenuMobile>
      </Container>
    </>
  );
};

export default NavBarTop;
