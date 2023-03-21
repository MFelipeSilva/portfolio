import styled from "styled-components";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

type PropsDisplay = {
  SetDisplay: string,
}

type PropsTransform = {
  SetTransform: string,
}


export const NavigationBar = styled.nav`
  height: 6em;
  width: 100%;
  z-index: 1;
  display: flex;
  position: fixed;
  align-items: center;
  padding: 0 10em 0 10em;
  justify-content: space-between;
  box-shadow: rgb(0 0 0 / 5%) 0px 5px 10px;
  background: ${({ theme }) => theme.COLORS.BACKGROUNDTWO};
  
  @media (max-width: 800px) {
    background: none;
    box-shadow: none;
    position: flex;
    
  }

  @media (max-width: 1300px) {
    padding: 0 5em 0 5em;
  }
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
  z-index: 1;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const NavLinks = styled.ul<PropsTransform>`
  display: flex;
  list-style: none;
  
  @media (max-width: 800px) {
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    width: min(75vw, 400px);
    background: ${({ theme }) => theme.COLORS.BACKGROUNDTWO};
    transform: ${( props ) => props.SetTransform };
    transition: transform 0.3s ease-in;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const MenuIcon = styled(FaBars)<PropsDisplay>`
  position: absolute;
  display: none;
  top: 0;
  right: 0;
  cursor: pointer;
  font-size: 1.8rem;
  margin: 40px 40px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};

  @media (max-width: 800px) {
    display: ${( props ) => props.SetDisplay};
    z-index: 1;
  }
`;

export const CloseIcon = styled(FaTimes)<PropsDisplay>`
  position: absolute;
  display: none;
  top: 0;
  right: 0;
  cursor: pointer;
  font-size: 1.8rem;
  margin: 40px 40px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};

  @media (max-width: 800px) {
    display: ${( props ) => props.SetDisplay};
    z-index: 1;
  }
`;

export const Li = styled.li`
  margin-right: 40px;
  transition: 0.6s ease-out;

  @media (max-width: 800px) {
    margin-bottom: 2rem;
    margin-right: 0;
  }

  a:before {
    content: "";
    position: absolute;
    right: 100%;
    bottom: 8px;
    left: 0;
    height: 2px;
    background: #eec643;
    opacity: 0.4;
    transition: all .35s ease-in-out;
  }

  a:hover:before {
    right: 0;
    opacity: .8;
    color: ${({ theme }) => theme.COLORS.SECONDARY};
  }
`;

export const Text = styled.a`
  position: relative;
  padding-bottom: 15px;
  font-size: 11pt;
  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.COLORTHEME};
  font-family: ${({ theme }) => theme.FONTS.RUBIK};
  transition: opacity .35s ease-in-out;

  @media (max-width: 800px) {
    font-size: 14pt;
    
  }

  &:hover {
    cursor: pointer;
  }

`;

export const CustomLink = styled(Link)`
  text-decoration: none;
`;