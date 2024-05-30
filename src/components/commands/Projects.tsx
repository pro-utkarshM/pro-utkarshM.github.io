import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";


const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });

    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">

      <ProjectsIntro>
      Clichéd expressions aside, I understand your request.<br /> 
      Allow me to present some of my noteworthy projects for<br />
      your consideration _<br />
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (

        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [

  {
    id: 1,
    title: "Baking Pi - Operating Systems Development",
    desc: "This repository contains code for the online course Baking Pi - Operating Systems Development",
    url: "https://github.com/pro-utkarshM/baking-pi-3",
  },

  {
    id: 2,
    title: "Spendr App",
    desc: "The Expense Tracking App is a Kotlin-based application built using Jetpack Compose, a modern UI toolkit for Android development",
    url: "https://github.com/pro-utkarshM/Expense-Tracking-App",
  },
  {
    id: 3,
    title: "Password Generator",
    desc: "This project is a Java Console Application to generate Random passwords and perform a password strength check.",
    url: "https://github.com/pro-utkarshM/Password-Generator",
  },
  {
    id: 4,
    title: "NexC",
    desc: "Campus Connect - A social media app which connect like-minded people with ease",
    url: "https://github.com/pro-utkarshM/NexC-App",
  },

];

export default Projects;
