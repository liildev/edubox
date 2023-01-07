import { ReactNode } from "react";

export interface ICategory {
  image: string;
  title: string;
}

export interface IMotionHeading {
  title: string;
  textStyles: string;
}

export interface IMotionEl {
  children: ReactNode;
  className?: string;
}
