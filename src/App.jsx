import React from "react";
import Header from "./demo/header/Header";
import AboutMe from "./demo/about_me/AboutMe";
import MySkills from "./demo/my_skills/MySkills";
import Footer from "./demo/footer/Footer";
import WebDevelopmentProjects from "./demo/web_development/Projects/Projects";
import GraphicDesignProjects from "./demo/graphic_design/Projects/Projects";
import BeforeFooter from "./demo/before_footer/BeforeFooter";
function App() {
  return (
    <>
      <div>
        <main>
          <Header />
          <AboutMe />
          <MySkills />
          <WebDevelopmentProjects />
          <GraphicDesignProjects />
          <BeforeFooter />
        </main>
        <Footer />
      </div>
    </>
  );
}
export default App;
