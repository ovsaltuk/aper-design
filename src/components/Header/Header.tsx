import { FC } from "react";
import logoSRC from "../../assets/SVG/logo.svg";
import "../../styles/header.scss";

export const Header: FC = () => {
  return (
    <header className="header">
        <img src={logoSRC} alt="logo" className="logo" />
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item"><a href="#" className="nav__link">проекты</a></li>
            <li className="nav__item"><a href="#" className="nav__link">item-2</a></li>
            <li className="nav__item"><a href="#" className="nav__link">item-3</a></li>
            <li className="nav__item"><a href="#" className="nav__link">item-4</a></li>
          </ul>
        </nav>

    </header>
  );
};
