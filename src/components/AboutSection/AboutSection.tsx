import { FC } from "react";
import img from "../../assets/about/bg-2.jpg";
import "../../styles/aboutSection.scss";

export const AboutSection: FC = () => {
  return (
    <section className="about">
      <div className="background">
      <img src={img} alt="bg" className="img" />
      </div>
      <div className="container">
        <div className="about__content">
          <h2 className="title">проект</h2>
          
        </div>
      </div>
    </section>
  );
};
