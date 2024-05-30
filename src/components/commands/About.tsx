import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Greetings, I am <HighlightSpan>Utkarsh Maurya</HighlightSpan>!
      </p>

      <p>
        I'm <HighlightAlt>a Curious Engineer</HighlightAlt> and <HighlightAlt> a Linux Lover.</HighlightAlt> 
      </p>

      <p>
      I love writing code. Ever since writing my first program in Java and manipulating<br />
      it to produce the desired output, I have been obsessed with the idea of using <br />
      software to solve practical problems. <br />

      I enjoy digging into problems, generating new ideas, working with awesome people, and <br />
      devising feasible solutions to broadly relevant problems with the intersection of creativity & technology.  <br /><br />
        
        <HighlightSpan>  #Keep Building...  </HighlightSpan>
        
      </p>
    </AboutWrapper>
  );
};

export default About;
