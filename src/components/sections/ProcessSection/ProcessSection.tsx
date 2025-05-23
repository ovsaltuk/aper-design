import { FC } from "react";
import "./styles.scss";
import { SectionTitle } from "../../common/SectionTitle/SectionTitle";
import processImgFirst from '/ProcessPictures/process-1.jpg';
import { StageList } from "../../common/StageList/StageList";
import { stageList } from "../../../assets/constants/stageList";



export const ProcessSection: FC = () => {
    return (
        <section className="process-section" id="process">
            
            <div className="container process-section__container">
                <SectionTitle text={"process"} className="process-section__title"/>
                <div className="process-section__left">
                    <StageList list={stageList} />
                </div>
                <div className="process-section__right">
                    <img src={processImgFirst} alt="process" />
                </div>
            </div>
        </section>
    )
}