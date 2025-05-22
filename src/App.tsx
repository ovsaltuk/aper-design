// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { AboutSection } from "./components/sections/AboutSection/AboutSection";
import { ContactsSection } from "./components/sections/ContactsSection/ContactsSection";
import { MainSection } from "./components/sections/MainSection/MainSection";
import { ProcessSection } from "./components/sections/ProcessSection/ProcessSection";
import { ProjectsSection } from "./components/sections/ProjectsSection/ProjectsSection";
import { ServicesSection } from "./components/sections/ServicesSection/ServicesSection";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <MainSection />
        <ProjectsSection />
        <AboutSection />
        <ProcessSection />
        <ServicesSection />
        <ContactsSection />
      </main>
      <Footer/>
    </>
  );
}

export default App;
