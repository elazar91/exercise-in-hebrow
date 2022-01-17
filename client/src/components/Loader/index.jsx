import React from "react";
import { Triangle } from "react-loader-spinner";
import style from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={style.loader}>
      <Triangle arialLabel="loading-indicator" />
    </div>
  );
};

export default Loader;
