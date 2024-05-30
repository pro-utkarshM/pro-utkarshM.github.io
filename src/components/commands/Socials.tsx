import { useContext, useEffect } from "react";
import { ProjectsIntro } from "../styles/Projects.styled";
import { Cmd, CmdDesc, CmdList, HelpWrapper } from "../styles/Help.styled";
import {
  checkRedirect,
  generateTabs,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Socials: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command makes redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "socials")) {
      socials.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4", "5", "6", "7", ]) ? (
      <Usage cmd="socials" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <HelpWrapper data-testid="socials">
      <ProjectsIntro>"Feel free to check out my social media profiles below!</ProjectsIntro>
      {socials.map(({ id, title, url, tab }) => (
        <CmdList key={title}>
          <Cmd>{`${id}. ${title}`}</Cmd>
          {generateTabs()}
          <CmdDesc>- {url}</CmdDesc>
        </CmdList>
      ))}
      <Usage cmd="socials" marginY />
    </HelpWrapper>
  );
};

const socials = [
  {
    id: 1,
    title: "GitHub",
    url: "https://github.com/pro-utkarshM",
    tab: 3,
  },

  {
    id: 2,
    title: "Instagram",
    url: "https://www.instagram.com/utkarsh_maurya17/",
    tab: 1,
  },
  {
    id: 3,
    title: "Linkedin",
    url: "https://www.linkedin.com/in/utkarsh-maurya-connect/",
    tab: 0,
  },
  {
    id: 4,
    title: "Twitter",
    url: "https://twitter.com/Utkarsh70354118",
    tab: 0,
  },
  {
    id: 5,
    title: "Leetcode",
    url: "https://leetcode.com/pro-utkarshM/",
    tab: 0,
  },
  {
    id: 6,
    title: "Medium",
    url: "https://medium.com/@sankalp.1519",
    tab: 0,
  },
  {
    id: 7,
    title: "Resume",
    url: "https://drive.google.com/file/d/1qYaH1mwAPbUjQ5QlWkCOtm_39seU1QUN/view",
    tab: 0,
  },

];

export default Socials;
