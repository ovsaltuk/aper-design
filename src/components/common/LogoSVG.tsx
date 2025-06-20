import { FC } from "react";

interface ILogoSVGProps {
    className?: string;
  }

export const LogoSVG: FC<ILogoSVGProps> = ({className}) => {
  return (
    <svg
      width="82"
      height="82"
      viewBox="0 0 82 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M81 1H1V81H81V1Z"
        stroke="black"
        stroke-width="1"
        stroke-miterlimit="22.9256"
      />
      <path
        d="M23.249 70.7504V13.8349L61.488 70.7301"
        stroke="black"
        stroke-width="1"
        stroke-miterlimit="22.9256"
      />
      <path
        d="M39.9736 14.5547C39.9736 14.5547 60.9648 16.7242 60.8642 36.2199C60.7636 55.7155 40.4868 58.0878 40.4868 58.0878"
        stroke="black"
        stroke-width="1"
        stroke-miterlimit="22.9256"
      />
    </svg>
  );
};
