import { FC } from "react";
import logoSRC from "../../assets/logo.svg";
import "../../styles/banner.scss";

export const Banner: FC = () => {
  return (
    <section className="banner">
      <div className="container">
        <img src={logoSRC} alt="logo" className="logo" />
        <div className="title-container">
          <h1 className="title">Воплощение идей в жизнь</h1>
          <span className="subtitle">
            Авторский дизайн от Анастасии Первовой
          </span>
          <button className="button">Заказать дизайн</button>
        </div>
      </div>
    </section>
  );
};
