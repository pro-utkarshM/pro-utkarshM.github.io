import {
    AboutWrapper,
    HighlightAlt,
    HighlightSpan,
} from "../styles/About.styled";

import {
    Cmd
} from "../styles/Welcome.styled";

const Hello: React.FC = () => {

    return (
        <AboutWrapper>
            <p>

                <HighlightSpan> Greetings, I'm Utkarsh Maurya. How may I assist you today?? </HighlightSpan><br />
                For a list of available Commands, type `<Cmd>help</Cmd>`.

            </p>
        </AboutWrapper>
    );
};

export default Hello;
