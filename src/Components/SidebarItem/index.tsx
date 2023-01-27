import { FC } from "react";
import CrossSvg from "../../Assets/cross.svg";
import { ISidebarItem } from "./SidebarItem.types";

import "./SidebarItem.styles.scss";

const SidebarItem: FC<ISidebarItem> = ({
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
      className="sidebar-item"
    >
      <span className="sidebar-item__title">{title}</span>
      <img
        onClick={onClick}
        className="sidebar-item__remove"
        src={CrossSvg}
        alt="remove"
      />
    </li>
  );
};

export default SidebarItem;
