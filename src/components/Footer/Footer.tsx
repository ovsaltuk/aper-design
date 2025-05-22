import { FC } from "react";
import "./styles.scss";

export const Footer: FC = () => {
    return (<footer className="footer">
        <div className="container footer__container">
            <a href="https://t.me/ov_saltuk" className="footer__link" target="_blank">Разработка сайта</a>
        </div>
    </footer>)
}