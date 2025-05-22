import { FC } from "react";
import "./styles.scss";
import contactsImg from "../../../assets/ContactsPictures/contacts-img.jpg"
import { SectionTitle } from "../../common/SectionTitle/SectionTitle";
import { Icon } from "@iconify/react/dist/iconify.js";

export const ContactsSection: FC = () => {
    return (<section className="contacts-section">
        <div className="container contacts-section__container">
            <img src={contactsImg} alt="pervova" />
            <div className="contacts">
                <SectionTitle text={"contacts"} />
                <ul className="contacts__list">
                    <li className="contacts__list-item">
                        <a href="https://instagram.com/pervova_stasya/" className="contacts__link" target="_blank">
                            <Icon icon="skill-icons:instagram" width="74" height="74" />
                            <span>pervova_stasya</span>
                        </a>
                    </li>
                    <li className="contacts__list-item">
                        <a href="tg://resolve?domain=aper_design/" className="contacts__link" target="_blank">
                            <Icon icon="logos:telegram" width="74" height="74" />
                            <span>@aper_design</span>
                        </a>
                    </li>
                    <li className="contacts__list-item">
                        <a href="whatsapp://send?phone=79112838311&text=/" className="contacts__link" target="_blank">
                            <Icon icon="logos:whatsapp-icon" width="74" height="74" />
                            <span>whatsapp</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>)
}