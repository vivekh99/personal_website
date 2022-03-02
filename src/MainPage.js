import React from "react";
import {
  MainContainer,
  NavBar,
  TitleText,
  Button,
  WelcomeText,
  GlobalStyle,
  Section,
  ImgStyle,
  ProjectList,
  Project,
  ProfilePic,
  Div1,
  AboutMe,
} from "./styles/MainPageStyle.js";
import central from "./images/overlook.jpg";
import north from "./images/oahu_beach.jpg";
import oahu from "./images/oahu_pic.jpg";
import profilePic from "./images/profile_pic.jpg";

export const MainPage = () => {
  window.addEventListener("scroll", () => {
    let welcomeText = document.getElementById("welcome.text");
    let aboutMe = document.getElementById("about");
    let scrollPos = window.scrollY;
    welcomeText.style.opacity = 1 - scrollPos / 300;
    aboutMe.style.opacity = scrollPos / 300;
  });

  return (
    <>
      <GlobalStyle />
      <NavBar>
        <TitleText>Vivek Hanasoge</TitleText>
        <Button href="#about">About Me</Button>
        <Button href="#project">Projects</Button>
        <Button href="#contact">Resume</Button>
      </NavBar>
      <ImgStyle img={central} height="100vh" color="green">
        <MainContainer>
          <WelcomeText id="welcome.text">Welcome</WelcomeText>
        </MainContainer>
      </ImgStyle>
      <Section id="about" padding="500px" flexDirection="row">
        <AboutMe>
          <h2>About Me</h2>
          Hi! My name is Vivek Hanasoge! I graduated from the University of
          Michigan in 2021 with a degree in Computer Engineering! I'm passionate
          in both hardware and software, with more of a focus in embedded
          development and fullstack engineering/C++ software development,
          respectively. Outside of work, I like to play tennis, soccer, and
          workout. I'm really into music and am an avid movie/show binge
          watcher. Checkout my ultimate movie/show list below!
          <br />
          movie
        </AboutMe>
        <Div1 img={profilePic} />
      </Section>
      <ImgStyle img={oahu} height="600px" color="red">
        <MainContainer></MainContainer>
      </ImgStyle>
      <Section id="project" padding="0px" flexDirection="column">
        <h2>Check out what I am working/worked on!</h2>
        <ProjectList>
          <Project>To-Do List</Project>
          <Project>Personal Website</Project>
          <Project>Calculator App</Project>
          <Project>findmyUMclass.com</Project>
        </ProjectList>
      </Section>
      <ImgStyle img={north} height="600px" color="red">
        <MainContainer></MainContainer>
      </ImgStyle>
      <Section id="contact" padding="0px" flexDirection="column">
        <h2>Contact Me!</h2>
        Email: hanasogevivek@gmail.com <br />
        LinkedIn: https://www.linkedin.com/in/vivek-hanasoge-48b5011ab <br />
        <button>Resume</button>
      </Section>
    </>
  );
};
