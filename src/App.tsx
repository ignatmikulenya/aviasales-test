import React from "react";

import Container from "./components/Container";
import LogoHeader from "./components/LogoHeader";
import Board from "./pages/Board";

function App() {
  return (
    <Container>
      <LogoHeader />
      <Board />
    </Container>
  );
}

export default App;
