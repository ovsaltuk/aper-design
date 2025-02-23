import { ProjectsSection } from "./components/ProjectsSection/ProjectsSection";
import { Banner } from "./components/Banner/Banner";
import { Header } from "./components/Header/Header";
import { AboutSection } from "./components/AboutSection/AboutSection";
import "./styles/app.scss";

function App() {
  return (
    <main className="app">
      <Header/>
      <Banner />
      <ProjectsSection />
      <AboutSection />

    </main>
  );
}

export default App;
