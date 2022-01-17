import React from "react";
import { Link } from "react-router-dom";
import style from "./ExerciseCard.module.scss";

const Exercise = (props) => {
  const { title, details, difficulty, exec_type, icon, _id } = props.exercise;
  return (
    <Link
      className={style.exerciseCard}
      to={props.admin ? `/admin/exercise/${_id}` : `/exercise/${_id}`}
    >
      <div>{title}</div>
      <div>{details}</div>
      <div>{difficulty}</div>
      <div>{exec_type}</div>
      <div>{icon}</div>
    </Link>
  );
};

export default Exercise;
