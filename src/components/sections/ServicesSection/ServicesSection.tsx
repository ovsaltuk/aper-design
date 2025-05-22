import { FC } from "react"
import background from "../../../assets/ServicesPictures/background.jpg";
import { SectionTitle } from "../../common/SectionTitle/SectionTitle";
import "./styles.scss";

export const ServicesSection: FC = () => {
    return (<section className="services-section">
        <div className="container services-section__container">
            <SectionTitle text={"services"} className="services-section__title" />
            <img src={background} alt="background" />
            <div className="services-section__services">
                <div className="service">
                    <div className="service__block">
                    </div>
                    <div className="service__info">
                        <div className="service__title">ЭСКИЗНЫЙ ПРОЕКТ</div>
                        <ul className="service__list">
                            <li className="service__list-item">
                                Обмерный план
                            </li>
                            <li className="service__list-item">
                                Планировочное решение
                            </li>
                            <li className="service__list-item">
                                Концептуальное решение
                            </li>
                            <li className="service__list-item">
                                Рабочая документация
                            </li>
                            <li className="service__list-item">
                                Спецификация материалов, мебели, сантехники, света
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="service">
                    <div className="service__block">
                    </div>
                    <div className="service__info">
                        <div className="service__title">ПОЛНЫЙ ПРОЕКТ</div>
                        <ul className="service__list">
                            <li className="service__list-item">
                                Обмерный план
                            </li>
                            <li className="service__list-item">
                                Планировочное решение
                            </li>
                            <li className="service__list-item">
                                Концептуальное решение
                            </li>
                            <li className="service__list-item">
                                Рабочая документация
                            </li>
                            <li className="service__list-item">
                                Спецификация материалов, мебели, сантехники, света
                            </li>
                            <li className="service__list-item">
                                3D визуализация
                            </li>
                            <li className="service__list-item">
                                Чертежи мебели
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="service">
                    <div className="service__block">
                    </div>
                    <div className="service__info">
                        <div className="service__title">АВТОРСКИЙ НАДЗОР</div>
                        <ul className="service__list">
                            <li className="service__list-item">
                                Плановое посещение объекта (до 4 раз в месяц)
                            </li>
                            <li className="service__list-item">
                                Комплектация
                            </li>
                            <li className="service__list-item">
                                Контроль соответствия реализации проекта
                            </li>
                            <li className="service__list-item">
                                Корректировка и дополнение рабочей документации
                            </li>
                            <li className="service__list-item">
                                Консультации заказчиков, строителей, подрядчиков по возникающим вопросам
                            </li>
                            <li className="service__list-item">
                                Дистанционный контроль за ходом работ
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="service">
                    <div className="service__block">
                    </div>
                    <div className="service__info">
                        <div className="service__title">КОНСУЛЬТАЦИЯ</div>
                        <ul className="service__list">
                            <li className="service__list-item">
                                Помощь в выборе квартиры
                            </li>
                            <li className="service__list-item">
                                Планировочное решение
                            </li>
                            <li className="service__list-item">
                                Концептуальное предложение
                            </li>
                            <li className="service__list-item">
                                Рабочая документация
                            </li>
                            <li className="service__list-item">
                                Ответы на вопросы в онлайн/офлайн формате
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}