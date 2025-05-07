import { FC } from "react";
import "./styles.scss";
import familia from "../../../assets/ProjectsPictures/familia.webp";
import b434 from "../../../assets/ProjectsPictures/b434.webp";
import d137 from "../../../assets/ProjectsPictures/d137.webp";
import d190 from "../../../assets/ProjectsPictures/d190.webp";

export const ProjectsSection: FC = () => {
  return (
    <section className="project-section">
      <a href="#" className="project-section__project" ><img className="project-section__project-img" src={familia} alt="familia" /><span className="project-section__project-title">FAMILIA</span></a>
      <a href="#" className="project-section__project" ><img className="project-section__project-img" src={b434} alt="b434" /><span className="project-section__project-title">b - 434</span></a>
      <a href="#" className="project-section__project" ><img className="project-section__project-img" src={d137} alt="d137" /><span className="project-section__project-title">d1 - 37</span></a>
      <a href="#" className="project-section__project" ><img className="project-section__project-img" src={d190} alt="d190" /><span className="project-section__project-title">d1 - 90</span></a>
    </section>
  );
};
