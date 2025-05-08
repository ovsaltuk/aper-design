// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.scss";
import Header from "./components/Header/Header";
import { AboutSection } from "./components/sections/AboutSection/AboutSection";
import { MainSection } from "./components/sections/MainSection/MainSection";
import { ProjectsSection } from "./components/sections/ProjectsSection/ProjectsSection";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <MainSection />
        <ProjectsSection />
        <AboutSection />
      </main>
    </>
  );
}

export default App;
