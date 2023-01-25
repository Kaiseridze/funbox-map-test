import React from "react";

export interface IContainer {
  variant: "l" | "m" | "s";
  children: React.ReactNode | React.ReactNode[];
  display: 'flex' | "block" | "grid"
}
