import { ReactElement } from "react"

import "./styles.scss";

const Header = (): ReactElement => {
    return (<header className="header">
        <div className="logo">
            <img src="" alt="logo" />
        </div>
        <nav className="navigation">navi</nav>
    </header>)
}

export default Header;