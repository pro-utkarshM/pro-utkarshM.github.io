import {
  Cmd,
  HeroContainer,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
      <Seperator>----</Seperator>

        <div>
        Terminal? More Like Terrifying:<br></br>
        <br></br>
          Welcome to the land of blinking cursors and cryptic error messages!<br></br>
          If you're looking for a user-friendly, aesthetically pleasing portfolio, <br></br>
          you've come to the wrong place. This is where code goes to die (and occasionally, <br></br>
          to live again). 
          <br></br>
          <br></br>
          Enter at your own risk.<br></br>
          <br></br>

          Web Dev? Nah, I Speak Binary!
          C & asm to cloud, Bash & Python to pipelines – I engineer solutions from the core to the cloud.
        </div>
        {/* <Seperator>----</Seperator> */}

{/* <div>
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡤⠖⣾⣿⣿⣿⣿⣶⠲⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠞⠁⠀⠀⠸⠯⠉⠉⢙⡇⠀⠀⠉⠳⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠁⠀⠀⠀⠀⠀⠀⣠⣼⠁⠀⠀⠀⢠⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⢹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡄⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣶⣿⠒⠶⣤⣤⣤⣤⣤⣤⣤⡤⠠⣶⣗⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠙⠒⠒⠛⠃⠀⠀⠀⠘⠛⠛⠰⠚⠉⢨⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡞⢸⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡇⢸⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣜⠁⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣇⢘⡿⣄⡴⠶⠶⠶⠶⠶⢦⣀⣾⡟⠀⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⣤⣤⣶⣾⣿⣿⣅⢈⡀⠤⠖⠒⠦⠤⣈⠁⢐⡟⣠⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡤⠤⠤⠤⣤⣄⣴⣫⣾⣿⡿⠟⣿⣿⣿⣿⣿⡏⣠⠤⠤⣤⣦⣤⣼⣷⠟⠋⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⣤⠴⠋⠁⠀⠀⠀⠀⢀⣄⠀⠉⠻⢥⣤⣾⣿⣿⣿⣿⣿⣿⣿⣶⣿⣿⣿⣿⣶⣀⠤⠚⢹⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡜⢻⡿⠁⠀⠀⠀⠀⠀⠀⠀⠋⠈⠻⠂⠀⠀⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡛⠛⢿⡟⠻⠀⠄⢸⢿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡿⠁⢸⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣿⡉⠉⠉⠹⣿⣿⣿⣿⣿⣶⣌⣀⠀⠀⣼⢡⣿⡳⢶⣤⣀⢰⣦⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⠇⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡀⠀⢻⣿⢂⡤⠖⠋⠛⠻⢭⣉⠋⠁⠈⠙⠲⢬⣻⣧⢻⡄⠙⠿⣿⡿⠈⠣⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡟⢠⡇⠠⣤⣽⣾⠁⠀⠀⠀⠀⠀⠙⠒⠒⠢⢤⡀⠀⠉⠛⣛⡹⣄⠈⠪⣷⣄⠀⡐⡄⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀⣴⣶⣶⣶⣶⣿⡄⢾⡇⠀⠉⢸⣿⣿⣦⣀⠀⠀⠀⢄⠀⠀⠀⠀⠈⠙⠲⢄⣈⠙⠾⠆⠀⣽⠛⢯⢹⣿⡀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⠿⢷⡄⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣧⠘⢿⣾⣤⣾⣿⣿⣿⣟⠀⠀⠀⠀⠑⢄⠀⠀⠀⠀⠀⠀⠈⠛⠢⣄⠠⡿⡄⠈⢿⣿⡇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⣀⣀⣿⣿⠟⠛⠛⠀⠀⠀⠀⠀⠈⠱⣄⠀⠀⠀⠀⠀⣀⠀⠈⢧⣷⠙⢦⠈⡿⠃⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢼⡟⠁⢸⠏⠛⠛⠛⠛⠛⠛⠛⠛⠻⢿⣿⣿⣿⣿⣿⡿⠟⠛⣿⣶⣤⣀⡀⠀⠀⠀⠀⠀⠈⠳⡀⠀⠀⠀⡝⠀⣼⣫⠿⣧⣌⢷⣸⡄⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣯⠋⠀⠀⠘⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⠁⠀⠀⠀⣿⣿⣿⣿⡿⣶⠠⢄⡀⠀⠀⠀⠱⡄⠀⠀⡇⠀⡏⡏⠀⠈⠹⣦⢧⢷⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⣇⠀⠀⠀⠀⠘⡆⠀⠠⣦⣀⠀⠀⠀⠀⠀⢀⣿⣿⡇⠀⠀⠀⡸⢻⡏⠉⠛⠛⠛⠀⠀⠉⠳⢤⡀⠀⠙⡄⠀⢧⠀⣧⡇⠀⠀⠀⢻⡟⡞⡄⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠇⠙⡄⠀⠀⠀⠀⡞⠀⠀⠈⠙⠻⣶⣄⠀⠀⣾⣿⡟⠀⠀⠀⡰⠃⣸⠃⠀⠀⠀⠀⠀⠀⠀⠀⢀⠙⠲⣄⠸⡄⠸⡆⠹⣷⡀⠀⠀⠈⡇⢡⡇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⡾⠀⠀⢳⡀⠀⠀⣰⠁⠀⠀⠀⠀⠀⠈⠙⢿⣾⣿⣿⠲⣄⣠⠞⠁⢠⣷⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠉⠳⢿⣦⡹⡄⠁⠀⢀⡳⣤⣀⡼⠁⠘⡇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⡾⠁⠀⠀⠘⡇⠀⣠⠇⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⠛⠁⢀⠀⠀⠉⠉⠛⠿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣇⣠⠴⠋⠀⠀⢹⠀⠀⠀⡇⠀⠀
⠀⠀⠀⠀⠀⠀⢠⠎⠀⠀⠀⠀⠀⢸⠉⠁⠈⠹⢷⣦⣀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣦⣶⣥⣤⣀⠀⠀⠀⠀⠀⠉⠓⠦⣄⠀⠀⠀⠀⠀⠀⠀⠙⣷⣄⠀⠀⠀⣮⠀⠀⢀⠃⠀⠀
⠀⠀⠀⠀⣀⡤⠿⠒⢤⡄⠀⠀⠀⢸⡀⠀⠀⠀⠀⠉⠻⣷⡶⢿⣿⣿⣿⣿⣿⣿⠇⠉⠙⠛⠿⢿⣶⣄⠀⠀⠀⠀⠀⠀⠉⠓⠤⣄⡀⠀⠀⠀⢸⣿⣦⠀⠀⢸⠀⠀⣸⠀⠀⠀
⠀⠀⢀⣾⣧⣤⠀⠀⢠⣿⠠⢤⣤⠀⣇⡀⠀⠀⠀⠀⣠⠞⠀⠈⢿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠈⠉⠓⠲⢤⣄⡀⠀⠀⠀⠀⠀⠉⠓⠦⣄⠈⡏⢫⣄⣀⢸⣤⣴⠏⠀⠀⠀
⠀⠀⡼⡇⠀⠀⠀⢠⡾⠻⣶⣿⣟⠻⠿⣿⣷⣦⣤⠞⠁⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠉⢻⣶⣤⣀⡀⠀⠀⢀⣨⣿⣋⣉⣉⡹⠿⣿⣿⠄⣀⡀⠀
⠀⢀⡷⠛⢋⣿⣿⡏⠀⠀⠘⣧⠈⠙⠒⢬⡿⠛⠁⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣤⣤⣤⣤⣤⣤⣴⣾⣿⣿⣿⣿⣿⠞⠉⠀⠀⠀⠀⠀⠀⢀⡟⠈⠆⢿⡄⠀
⠀⡞⠀⠀⣸⣿⠏⣿⣄⠀⠀⢹⡉⠉⠲⢾⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣟⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⢳⠀
⠸⠀⠀⢀⣿⡟⠀⣿⣿⣦⠀⠀⢹⡟⠶⣏⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⡻⢻⠣⠀⠀⠈⠙⠛⠛⠿⢿⠿⠟⡟⠛⠉⠓⡦⠤⣀⣀⠀⠀⠀⠀⠀⢀⢀⡇⠀⠀⡀⠀⠀⡆
</div> */}

        <Seperator>----</Seperator>
        <div>
        To access a list of available commands, simply enter.". `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`

         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
