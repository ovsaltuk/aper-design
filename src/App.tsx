// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { MobileHeader } from "./components/Header/MobileHeader/MobileHeader";
import { AboutMobileSection } from "./components/sections/AboutSection/AboutMobileSection/AboutMobileSection";
import { AboutSection } from "./components/sections/AboutSection/AboutSection";
import { ContactsSection } from "./components/sections/ContactsSection/ContactsSection";
import { MainSection } from "./components/sections/MainSection/MainSection";
import { ProcessSection } from "./components/sections/ProcessSection/ProcessSection";
import { ProjectsSection } from "./components/sections/ProjectsSection/ProjectsSection";
import { ServicesSection } from "./components/sections/ServicesSection/ServicesSection";
import useWindowWidth from "./hooks/useWindowWidth";

function App() {
  const width = useWindowWidth();
  return (
    <>
      {width > 768 ? <Header /> : <MobileHeader /> }
      <main className="main">
        <MainSection />
        {/* <ProjectsSection />
        {width > 1023 ? <AboutSection /> : <AboutMobileSection />}
        <ProcessSection />
        <ServicesSection />
        <ContactsSection /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;


