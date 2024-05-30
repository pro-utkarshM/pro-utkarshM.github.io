import { useContext } from "react";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";
import React from 'react';

const Exit: React.FC = () => {
  const handleCloseWindow = () => {
    window.close(); // Handle the window close action here.
  };

  return (
    <Wrapper>
      {/* You should include a user interface element (e.g., a button) to trigger the close action. */}
      <button onClick={handleCloseWindow}>Close Window</button>
    </Wrapper>
  );
};

export default Exit;
