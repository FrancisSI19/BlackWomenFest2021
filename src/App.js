import React from "react";
import "./App.css";
import Home from "../src/components/ui/home/home";
import Conect from "../src/components/ui/contact/contact";
import Text from "../src/components/ui/text/text";

function App() {
  return (
    <div className="App">
      <Home />
      <Text />
      <Conect />
    </div>
  );
}

export default App;
