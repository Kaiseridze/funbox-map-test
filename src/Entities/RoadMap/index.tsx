import { FC } from "react";
import CrossSvg from "../../Assets/cross.svg";
import { IRoadMap } from "./RoadMap.types";

import "./RoadMap.styles.scss";

const RoadMap: FC<IRoadMap> = ({
  title,
  onClick,
  reference,
  draggableProps,
  dragHandleProps,
}) => {
  return (
    <li
      {...draggableProps}
      {...dragHandleProps}
      ref={reference}
      className="road-map"
    >
      <span className="road-map__title">{title}</span>
      <img
        onClick={onClick}
        className="road-map__remove"
        src={CrossSvg}
        alt="remove"
      />
    </li>
  );
};

export default RoadMap;
