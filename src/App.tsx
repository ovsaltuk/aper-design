// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.scss";
import Header from "./components/Header/Header";
import { AboutSection } from "./components/sections/AboutSection/AboutSection";
import { MainSection } from "./components/sections/MainSection/MainSection";
import { ProcessSection } from "./components/sections/ProcessSection/ProcessSection";
import { ProjectsSection } from "./components/sections/ProjectsSection/ProjectsSection";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <MainSection />
        <ProjectsSection />
        <AboutSection />
        <ProcessSection />
      </main>
    </>
  );
}

export default App;
