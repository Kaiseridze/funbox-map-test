import { FC } from "react";
import { IContainer } from "./Container.types";

import "./Container.styles.scss"

const Container: FC<IContainer> = ({ variant = "m", children }) => {
  return <div className={`container ${variant}`}>{children}</div>
};

export default Container;
