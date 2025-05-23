import { FC } from "react";
import "./styles.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";

export interface INavigationItem {
  text: string;
  link: string;
}

interface INavigationProps {
  linksList: INavigationItem[];
}

export const Navigation: FC<INavigationProps> = ({ linksList }) => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {linksList.map(({ text, link }) => <li className="nav__item"><AnchorLink href={link} offset={100} className="nav__link">{text}</AnchorLink></li>)}
      </ul>
    </nav>
  );
};
