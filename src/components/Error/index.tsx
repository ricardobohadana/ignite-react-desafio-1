import style from "./index.module.css";
import plusIcon from "../../assets/plus.svg";
import React, { SetStateAction } from "react";
import { ITask } from "../../models/ITask";
import {v4 as randomUUID} from "uuid";

interface ErrorProps {
  label: string;
}

export const Error = ({ label }:ErrorProps) => {

  return (
      <span className={style.error}>
        {label}
      </span>
  );
};
