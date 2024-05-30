import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">

      <EduIntro>"Allow me to share my educational background with you:</EduIntro>

      {eduBg.map(({ title, desc }) => (

        <EduList key={title}>
          <div className="title">{title}</div>

          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [

  {
    title: "Electronics and Communication Engineering",
    desc: "NIT Hamirpur | 2026",
  },

  {
    title: "Grade 12",
    desc: "St. Peter's School | 2021",
  },

];

export default Education;
