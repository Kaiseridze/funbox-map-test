import { FC } from "react";
import { IRoadMap } from "./RoadMap.types";

import "./RoadMap.styles.scss";

const RoadMap: FC<IRoadMap> = ({ title, onClick }) => {
  return (
    <div className="road-map">
      <span className="road-map__title">{title}</span>
      <span onClick={onClick} className="road-map__remove">
        X
      </span>
    </div>
  );
};

export default RoadMap;
