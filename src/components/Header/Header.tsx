import { ReactElement } from "react"

import "./styles.scss";
import { LogoSVG } from "../common/LogoSVG";
import { Navigation } from "../Navigation/Navigation";
import { headerNavList } from "../../assets/constants/headerNavList";

const Header = (): ReactElement => {
    return (<header className="header">
        <a className="logo" href="#">
            <LogoSVG/>
        </a>
        <Navigation linksList={headerNavList} />
    </header>)
}

export default Header;
