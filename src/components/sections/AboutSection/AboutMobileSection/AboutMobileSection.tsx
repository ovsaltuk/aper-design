import { FC } from "react";
import AboutImg from "../../../../assets/AboutPictures/about-img.webp"
import { SectionTitle } from "../../../common/SectionTitle/SectionTitle";

export const AboutMobileSection: FC = () => {
    return (
        <section className="about" id="about">
            <div className="container about__mobile-container">
                <div className="about__mobile-img-container">
                    <img src={AboutImg} alt="about" className="about__advantages-img" />
                </div>
                <div className="about__mobile-content-container">
                    <SectionTitle text={"about"} />
                    <div className="about__mobile-description">
                        <p className="about__description-text">
                            Меня зовут Первова Анастасия. Закончила СПГХПА им. А. Л. Штиглица.
                            По образованию я художник-проектировщик интерьеров.
                        </p>
                        <p className="about__description-text">
                            Ещё во время обучения я начала работать. Первым рабочим местом была
                            строительная компания, в которой я погрузилась в техническую сторону
                            ремонта, получила знания которыми я пользуюсь по сегодняшний день.
                            Далее, 3года работала в студии интерьеров, вела авторский
                            надзор, закупки, стройки и все, что с этим связано.
                        </p>
                        <p className="about__description-text">
                            Основой моего подхода является баланс красоты и функциональности.
                            Это сложнейший процесс, результат которого - среда человека, его
                            качество жизни.
                        </p>
                    </div>
                    <div className="about__advantages-points">
                        <div className="advantage">
                            <span className="advantage__number">50 +</span>
                            <span className="advantage__text">Реализованных проектов</span>
                        </div>
                        <div className="advantage">
                            <span className="advantage__number">10 +</span>
                            <span className="advantage__text">Лет в дизайне</span>
                        </div>
                        <div className="advantage">
                            <span className="advantage__number">100 +</span>
                            <span className="advantage__text">Поставщиков</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}