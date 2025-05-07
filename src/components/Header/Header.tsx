import { ReactElement } from "react"

import "./styles.scss";
import { LogoSVG } from "../common/LogoSVG";
import { Navigation } from "../Navigation/Navigation";

const Header = (): ReactElement => {
    return (<header className="header">
        <a className="logo" href="#">
            <LogoSVG/>
        </a>
        <Navigation />
    </header>)
}

export default Header;
