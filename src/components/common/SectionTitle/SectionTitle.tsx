import { FC } from "react";
import "./styles.scss";

interface ISectionTitleProps {
    text: string;
    className?: string;
}

export const SectionTitle: FC<ISectionTitleProps> = ({text, className}) => {
    const classes = className ? `section-title ${className}` : "section-title";
    return <h2 className={classes}>{text}</h2>;
}