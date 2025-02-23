import { FC } from "react";
import "../../styles/projectsSection.scss";

export const ProjectsSection: FC = () => {
  return (
    <section className="projects">
      <div className="projects__container">
        <div className="projects__block">
          <div className="projects__item-title">
            <span>Title</span>
          </div>
        </div>
        <div className="projects__block">
          <div className="projects__item-title">
            <span>Title</span>
          </div>
        </div>
        <div className="projects__block">
          <div className="projects__item-title">
            <span>Title</span>
          </div>
        </div>
        <div className="projects__block">
          <div className="projects__item-title">
            <span>Title</span>
          </div>
        </div>
      </div>
    </section>
  );
};
