import { ProjectsSection } from "./components/ProjectsSection/ProjectsSection";
import { Banner } from "./components/Banner/Banner";
import { Header } from "./components/Header/Header";
import "./styles/app.scss";

function App() {
  return (
    <main className="app">
      <Header/>
      <Banner />
      <ProjectsSection />
    </main>
  );
}

export default App;
