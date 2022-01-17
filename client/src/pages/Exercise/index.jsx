import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./Exercise.module.scss";
import Loader from "../../components/Loader";

const Exercise = () => {
  const [exercise, setExercise] = useState();
  const [source, setSource] = useState(false);
  const [solution, setSolution] = useState(false);
  const params = useParams();
  useEffect(getExercise, []);

  function getExercise() {
    axios.get(`http://localhost:3333/exercise/${params.id}`).then((result) => {
      setExercise(result.data);
    });
  }

  return (
    <div className={style.wrap}>
      {exercise ? (
        <div className={style.exercise}>
          <div className={style.exersiceDetail}>
            <div className={style.title}>{exercise.exercise[0].title}</div>
            <div className={style.icon}>{exercise.exercise[0].icon}</div>
          </div>
          <div className={style.difficulty}>
            {exercise.exercise[0].difficulty}
          </div>
          <div className={style.exec_type}>
            {exercise.exercise[0].exec_type}
          </div>
          <div className={style.details}>{exercise.exercise[0].details}</div>
          <div className={style.wrapButton}>
            <div className={style.button} onClick={() => setSource(!source)}>
              source
            </div>
            <div
              className={style.button}
              onClick={() => setSolution(!solution)}
            >
              solution
            </div>
          </div>
          {source ? (
            <a href={exercise.exercise[0].content.sources[0].url}>
              {exercise.exercise[0].content.sources[0].name}
            </a>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <Loader />
      )}
      {solution ? (
        <div className={style.solution}>{exercise.exercise[0].solution}</div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Exercise;
