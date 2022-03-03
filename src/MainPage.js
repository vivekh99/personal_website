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
  AboutMe,
  MovieList,
  LinkedIn,
} from "./styles/MainPageStyle.js";
import central from "./images/overlook.jpg";
import beach from "./images/oahu_beach.jpg";
import oahu from "./images/oahu_pic.jpg";
import profilePic from "./images/profile_pic.jpg";
import movie_show_guide from "./images/movie_show_guide.pdf";

export const MainPage = () => {
  window.addEventListener("scroll", () => {
    let welcomeText = document.getElementById("welcome.text");

    let scrollPos = window.scrollY;
    welcomeText.style.opacity = 1 - scrollPos / 300;
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
      <Section
        id="about"
        padding="500px"
        backgroundColor="#36454F"
        textColor="white"
        flexDirection="row"
      >
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
          <MovieList href={movie_show_guide} target="_blank">
            Ultimate Movie/Show List
          </MovieList>
        </AboutMe>
        <ProfilePic img={profilePic} />
      </Section>
      <ImgStyle img={oahu} height="500px" color="red">
        <MainContainer></MainContainer>
      </ImgStyle>
      <Section
        id="project"
        padding="0px"
        backgroundColor="#36454F"
        textColor="white"
        flexDirection="column"
      >
        <h2>Check out my current/past projects!</h2>
        <ProjectList>
          <Project
            href="https://github.com/vivekh99/To-Do-List-to-Lock-Screen-App"
            target="_blank"
          >
            To-Do List App
          </Project>
          <Project
            href="https://github.com/vivekh99/personal_website"
            target="_blank"
          >
            Personal Website
          </Project>
          <Project
            href="https://github.com/vivekh99/Calculator-App"
            target="_blank"
          >
            Calculator App
          </Project>
          <Project
            href="https://github.com/vivekh99/findmyumclass.com"
            target="_blank"
          >
            findmyUMclass.com
          </Project>
        </ProjectList>
      </Section>
      <ImgStyle img={beach} height="500px" color="red">
        <MainContainer></MainContainer>
      </ImgStyle>
      <Section
        id="contact"
        padding="0px"
        backgroundColor="#36454F"
        textColor="white"
        flexDirection="column"
      >
        <h2>Contact Me!</h2>
        Email: hanasogevivek@gmail.com <br />
        <LinkedIn href="https://www.linkedin.com/in/vivek-hanasoge-48b5011ab">
          LinkedIn
        </LinkedIn>
        <br />
        <button>Resume</button>
      </Section>
    </>
  );
};
