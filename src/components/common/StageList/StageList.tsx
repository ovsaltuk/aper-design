import { FC } from "react";
import { IStage, Stage } from "./Stage/Stage";
import "./styles.scss";

interface IStageListProps {
    list: IStage[];
}

export const StageList: FC<IStageListProps> = ({list}) => {
    return (<ul className="stage-list">
        {list.map((item, index) => <li className="stage-list__item">
            <Stage sequenceNumber={index + 1} stage={item} />
        </li> )}
    </ul>)
}