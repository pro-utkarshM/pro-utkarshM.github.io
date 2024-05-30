import {
    AboutWrapper,
    HighlightAlt,
    HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
    return (
        <AboutWrapper data-testid="about">

            <p>
                <HighlightSpan>my Skills</HighlightSpan> :
            </p>
            <p>
                Native Android wizard, Kotlin & Compose master, Firebase & MySQL architect. <br />
                Weaving C, ARM/x86 assembly, and makefiles to craft high-performance Linux kernels that breathe life into systems.  <br />
                C, Bash, Python, Kotlin, and Java—my code navigates every layer, from system calls to elegant scripts to robust applications.  <br />
                <br />
                C & asm to cloud, Bash & Python to pipelines, Java for automation – I engineer solutions from the core to the cloud.
            </p>
        </AboutWrapper>
    );
};

export default About;
