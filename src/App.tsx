import { AboutSection } from "./components/AboutSection/AboutSection";
import { Banner } from "./components/Banner/Banner";
import { Header } from "./components/Header/Header";
import { ProjectSection } from "./components/ProjectsSection/ProjectSection";
import "./styles/app.scss";

function App() {
  return (
    <main className="app">
      <Header/>
      <Banner />
      <AboutSection />
      <ProjectSection/>
    </main>
  );
}

export default App;
