import { FC } from "react";
import "./styles.scss";
import { LogoSVG } from "../../common/LogoSVG";
import { Icon } from "@iconify/react";

export const MainSection: FC = () => {
  return (
    <section className="main-section" id="main">
      <LogoSVG className="main-section__background-svg"/>
      <div className="container">
        <span className="main-section__title">Интерьер, где вы в главной роли</span>
        <h1 className="main-section__subtitle">Авторский дизайн от Анастасии Первовой</h1>
        <a href="#contacts" className="main-section__order-link">Заказать дизайн <Icon icon="gravity-ui:arrow-right" /></a>
      </div>
    </section>
  );
};
