import Head from "next/head";
import React from "react";
import PageTitle from "../../components/PageTitle";
import SkillCard from "../../components/SkillCard";
import {
  Container,
  AboutMe,
  Skills,
  FirstRow,
  PictureContainer,
  AboutMeTitle,
  AboutMeParagraph,
  FirstColumn,
  ResumeTitle,
  CVButton,
  NameTitle,
  ExperienceContainer,
  CVContainer,
  SecundaryRow,
  SecundaryColumn,
  TitleContainer,
  ServicesParagraph,
  TechsContainer,
  TechP,
} from "../../styles/pages/About";
import { motion } from "framer-motion";
import {
  IoLogoJavascript,
  IoLogoReact,
  IoLogoPython,
  IoLogoFigma,
} from "react-icons/io";
import { FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { BsFileText, BsFillFileTextFill } from "react-icons/bs";
import { SiTypescript } from "react-icons/si";
import { useRouter } from "next/router";
import Image from "next/image";

function About() {
  const router = useRouter();

  const data = {
    cardOne: {
      title: "Frameworks",

      first: {
        alt: "ReactJS",
        icon: "reacticon.png",
      },
      second: {
        alt: "NextJS",
        icon: "nextjs.png",
      },
      third: {
        alt: "Bootstrap",
        icon: "bootstrap.png",
      },
    },
    cardTwo: {
      title: "Languages",

      first: {
        alt: "JavaScript",
        icon: "javascript.png",
      },
      second: {
        alt: "Python",
        icon: "python.png",
      },
      third: {
        alt: "Sass",
        icon: "sass.png",
      },
    },
    cardThree: {
      title: "Tools",

      first: {
        alt: "Linux",
        icon: "linux.png",
      },
      second: {
        alt: "NodeJS",
        icon: "node.png",
      },
      third: {
        alt: "Mongo Database",
        icon: "mongodb.svg",
      },
    },
  };
  return (
    <Container>
      <Head>
        <title>Levelite — About</title>
      </Head>
      <PageTitle
        title="about"
        stretchedLetter="b"
        overlayTitle="Gamify your entire life!"
      />
      <AboutMe>
        <FirstRow>
          <Image
            src={`/static/assets/all.png`}
            height={600}
            width={600}
            objectFit="contain"
          />

          <FirstColumn>
            <NameTitle>
              Personal <span>Grown</span>
            </NameTitle>
            <AboutMeTitle>
              A <span className="colored">Gamified</span> Habit tracker
            </AboutMeTitle>
            <AboutMeParagraph>
              Levelite is a revolutionary gamified habit-tracking app that
              transforms self-improvement into an epic RPG adventure. Players
              embark on quests, battle enemies in turn-based combat, and explore
              dynamic AI-generated dungeons that adapt to their progress. With
              an advanced AI-driven skill evolution system, users receive
              personalized challenges that push their limits. The Guild of
              Adventurers allows players to team up, share challenges, and
              compete in the ranking system, which factors in streaks, level
              progression, and achievements. Every action contributes to their
              hero's growth, making productivity an immersive and rewarding
              journey. 🚀
            </AboutMeParagraph>
            {/* <ResumeTitle>
              <BsFileText size={30} />
              <h4>Past Experience</h4>
            </ResumeTitle> */}
            <CVContainer>
              <p>Want to know more about my education and experience.</p>
              <CVButton
                onClick={() =>
                  window.open("https://discord.gg/PDQAJmH4", "_blank").focus()
                }
              >
                <span>Try it now!</span>
              </CVButton>
            </CVContainer>
          </FirstColumn>
        </FirstRow>
        <SecundaryRow>
          <SecundaryColumn>
            <TitleContainer>
              <NameTitle>
                Conquer <span>Dungeons</span>
              </NameTitle>
              <AboutMeTitle>
                Explore <span className="colored">Dynamic Dungeons</span>, Face
                Formidable Foes, and Unleash Your Potential in a World Shaped by
                Your Choices
              </AboutMeTitle>
            </TitleContainer>
            <ServicesParagraph>
              Join the legendary{" "}
              <span className="colored">Guild of Adventurers</span> and embark
              on epic dungeon missions, where every task completed brings you
              closer to mastery. Face dynamic challenges, conquer formidable
              foes, and unlock hidden treasures as you progress through
              AI-generated quests. Earn rare rewards, collect powerful items,
              and enhance your character’s abilities by staying consistent in
              your real-world journey. Whether you're exploring ancient ruins or
              battling mythical creatures, every step forward strengthens your
              skills and pushes you toward greatness.{" "}
              <span className="colored">Venture forth</span> and claim your
              destiny!
            </ServicesParagraph>
          </SecundaryColumn>
          <Image
            src={`/static/assets/dungeons.png`}
            height={600}
            width={600}
            objectFit="contain"
          />
        </SecundaryRow>
      </AboutMe>
    </Container>
  );
}

export default About;
