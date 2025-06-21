import { FC } from "react";
import "./styles.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { headerNavList } from "../../../assets/constants/headerNavList";

export const MobileHeader: FC = () => {
    return (<header className="mobile-header">
        <nav className="mobile-menu">
            <input type="checkbox" id="checkbox" className="mobile-menu__checkbox" />
            <label htmlFor="checkbox" className="mobile-menu__btn"><div className="mobile-menu__icon"></div></label>
            <div className="mobile-menu__container">
                <ul className="mobile-menu__list">
                    {headerNavList.map(({ text, link }) => <li className="mobile-menu__item"><AnchorLink href={link} offset={100}>{text}</AnchorLink></li>)}
                </ul>
            </div>
        </nav>
    </header>)
}