import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    background: black;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
`;

export const ImgStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.img});
  background-color: aquamarine;
  height: ${(props) => props.height};

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const NavBar = styled.div`
  position: absolute;
  background: none;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100px;
`;

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.a`
  font-size: x-large;
  font-family: "Courier New", monospace;
  color: white;
  display: block;
  border: none;
  cursor: pointer;
  margin-left: 7%;
  margin-right: 0;
  text-decoration: underline 0.2em rgba(0, 0, 0, 0);
  text-underline-offset: 0.2em;
  transition: text-decoration-color 300ms;
  transform-origin: center;
  &:hover {
    text-decoration-color: white;
  }
`;

export const TitleText = styled.div`
  color: white;
  background-color: black;
  font-family: "Courier New", monospace;
  font-size: x-large;
  font-weight: bold;
  padding: 10px;
  margin-left: 0%;
`;

export const WelcomeText = styled.div`
  position: absolute;
  text-align: center;
  font-weight: bold;
  font-size: 300px;
  color: white;
  border-color: black;
  animation: fadeIn 1.5s;
  height: 200px;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ProfilePic = styled.div`
  position: absolute;
  right: 5%;
  height: 95%;
  width: 250px;
  border-radius: 50%;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 2;
`;

export const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  flex-direction: ${(props) => props.flexDirection};
  align-items: center;
  text-align: center;
  line-height: 30px;
  height: 200px;
  padding: 30px;
  padding-right: ${(props) => props.padding};
  color: ${(props) => props.textColor};
  font-family: "Raleway", sans-serif;
  background: ${(props) => props.backgroundColor};
`;

export const AboutMe = styled.div`
  position: absolute;
  width: 60%;
`;

export const ProjectList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Project = styled.a`
  height: 50px;
  width: 170px;
  cursor: pointer;
  border: none;
  transition: 0.3s;
  background: #808080;
  color: white;
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  margin-right: 10px;
  padding-top: 20px;
  text-decoration: none;
  &:hover {
    background-color: black;
  }
`;
export const MovieList = styled.a`
  transition: 0.3s;
  background: #808080;
  color: white;
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  padding: 10px;
  text-decoration: none;
  &:hover {
    background-color: black;
  }
`;

export const ContactBtn = styled.a`
  transition: 0.3s;
  background: #808080;
  color: white;
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  padding: 10px;
  width: 10%;
  margin: 5px;
  text-decoration: none;
  &:hover {
    background-color: black;
  }
`;
