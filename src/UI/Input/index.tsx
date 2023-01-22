import { FC } from "react";
import { IInput } from "./Input.types";
import "./Input.styles.scss";
const Input: FC<IInput> = ({ value, onChange }) => {
  return <input onChange={onChange} value={value} className="input" type="text" />;
};

export default Input;
