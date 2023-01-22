import React from "react";

export interface IInput {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
