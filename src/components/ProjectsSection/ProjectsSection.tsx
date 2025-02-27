import { FC } from "react";
import "../../styles/projectsSection.scss";

export const ProjectsSection: FC = () => {
  return (
    <section className="projects">
      <div className="projects__container">
        <div className="projects__block">
          <div className="projects__item-title">
            <span>familia</span>
          </div>
        </div>
        <div className="projects__block">
          <div className="projects__item-title">
            <span>b-434</span>
          </div>
        </div>
        <div className="projects__block">
          <div className="projects__item-title">
            <span>d1-90</span>
          </div>
        </div>
        <div className="projects__block">
          <div className="projects__item-title">
            <span>d1-37</span>
          </div>
        </div>
      </div>
    </section>
  );
};
