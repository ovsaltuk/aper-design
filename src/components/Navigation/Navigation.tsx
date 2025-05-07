import { FC } from "react";
import "./styles.scss";

export const Navigation: FC = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item"><a href="#" className="nav__link">nav-item</a></li>
        <li className="nav__item"><a href="#" className="nav__link">nav-item</a></li>
        <li className="nav__item"><a href="#" className="nav__link">nav-item</a></li>
        <li className="nav__item"><a href="#" className="nav__link">nav-item</a></li>
        <li className="nav__item"><a href="#" className="nav__link">nav-item</a></li>
      </ul>
    </nav>
  );
};
