import React from "react";
import background from "/public/static/assets/background.gif";
import {
  Container,
  Title,
  SubTitle,
  Letter,
  Wrapper,
  About,
  Background,
  ViewButton,
  ContactButton,
  HeroFooter,
  Main
} from "./styles";
import { Fade, Flip, Zoom } from "react-reveal";
import { BsEye, BsChat } from "../../styles/Icons";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { useRouter } from "next/router";
import Head from "next/head";

function Hero() {
  const router = useRouter();

  return (
    <Container>
      <Background image={background} />
      <Head>
        <title>Levelite — Gamify your tasks!</title>
      </Head>
      <Wrapper>
        <Main>
          <Fade top>
            <Title>
              <Letter className="stretch">L</Letter>
              <Letter>E</Letter>
              <Letter>V</Letter>
              <Letter className="stretch">E</Letter>
              <Letter>L</Letter>
              <Letter>I</Letter>
              <Letter>T</Letter>
              <Letter>E</Letter>
            </Title>
          </Fade>
          {/* <Fade top delay={100}>
            <SubTitle>
              <Letter className="coded">C</Letter>
              <Letter className="coded">O</Letter>
              <Letter className="coded">D</Letter>
              <Letter className="stretch coded">E</Letter>
              <Letter className="stretch coded">D</Letter>
            </SubTitle>
          </Fade> */}
          <Flip top delay={600}>
            <About>
              Gamify your <span>HABITS</span> and level up as a hunter
            </About>
          </Flip>
        </Main>
        <HeroFooter>
          <Fade left delay={800}>
            <ViewButton className="flex p-4" onClick={() => router.push("/about")}>
              <IoLogoGooglePlaystore /> Play Store
            </ViewButton>
          </Fade>
          <Fade right delay={800}>
            <ViewButton className="flex p-4" onClick={() => router.push("/about")}>
              <IoLogoAppleAppstore /> Apple Store
            </ViewButton>
          </Fade>
        </HeroFooter>
      </Wrapper>
    </Container>
  );
}

export default Hero;
