import React from "react";
import Education from "./components/Education";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import Military from "./components/Military";
import NavigationBar from "./components/NavigationBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <MainSection />
      <Projects />
      <Skills />
      <Military />
      <Education />
      <Footer />
    </React.Fragment>
  );
}

export default App;
