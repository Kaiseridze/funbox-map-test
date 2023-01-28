import { FC } from "react";
import { IContainer } from "./Container.types";

import "./Container.styles.scss";

const Container: FC<IContainer> = ({
  variant = "m",
  children,
  display = "block",
}) => {
  return <div data-testid='container-test' className={`container ${variant} ${display}`}>{children}</div>;
};

export default Container;
