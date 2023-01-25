import { FC } from "react";
import { IRoadMap } from "./RoadMap.types";

import "./RoadMap.styles.scss";

const RoadMap: FC<IRoadMap> = ({ title, onClick, reference, draggableProps, dragHandleProps }) => {
  return (
    <li {...draggableProps} {...dragHandleProps} ref={reference} className="road-map">
      <span className="road-map__title">{title}</span>
      <span onClick={onClick} className="road-map__remove">
        X
      </span>
    </li>
  );
};

export default RoadMap;
