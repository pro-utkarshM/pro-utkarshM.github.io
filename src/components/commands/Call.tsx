import {
    AboutWrapper,
    HighlightSpan,
} from "../styles/About.styled";


const Call: React.FC = () => {
    return (
        <AboutWrapper data-testid="about">
            <p>

                <HighlightSpan>You may contact me on: </HighlightSpan> :
            </p>
            <p>
                +91 82992-84936
            </p>
        </AboutWrapper>
    );
};

export default Call;
