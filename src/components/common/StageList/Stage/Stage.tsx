import { FC } from "react";
import "./styles.scss";

export interface IStage {
    title: string;
    description: string;
}

export interface IStageProps {
    sequenceNumber: number;
    stage: IStage;
}

export const Stage: FC<IStageProps> = ({ sequenceNumber, stage }) => {
    return (<div className="stage">
        <span className="stage__number">{sequenceNumber}.</span>
        <span className="stage__title">{stage.title}</span>
        <p className="stage__description">{stage.description}</p>
    </div>
    )
} 