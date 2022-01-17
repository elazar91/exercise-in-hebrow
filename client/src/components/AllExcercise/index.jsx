import Language from "../Language";
import Exercise from "../ExerciseCard";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import style from "./AllExercise.module.scss";
import searchFilter from "./filter";
import Loader from "../Loader";
import { CurrentUser } from "../../App";

const AllExercise = (props) => {
  const [languages, setLanguages] = useState();
  const [exercise, setExercise] = useState();
  const [view, setView] = useState(true);
  const [search, setSearch] = useState({
    input: "",
    difficulty: "",
    type: "",
  });
  const { registerUser } = useContext(CurrentUser);
  useEffect(gatAllLanguages, []);

  function gatAllLanguages() {
    axios.get("http://localhost:3333/language").then((result) => {
      setLanguages(result.data);
    });
  }

  function getAllExercise(id) {
    axios
      .get(`http://localhost:3333/exercise-language/${id}`)
      .then((result) => {
        setExercise(result.data);
      })
      .then(() => {
        setView(false);
      });
  }

  function filter(e) {
    const filterd = { ...search };
    filterd[e.target.name] = e.target.value;
    setSearch(filterd);
  }

  const exerciseArray = searchFilter(search, exercise);

  return languages ? (
    <div className="home">
      {view ? (
        <>
          <div>{registerUser?.firstName}</div>
          <div className="home-title">lang list</div>
          <div className="lang-list">
            {languages.map((lang) => {
              return (
                <Language
                  key={lang._id}
                  name={lang.prog_lang}
                  id={lang._id}
                  icon={lang.icon}
                  click={getAllExercise}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div>
          <div>
            {exercise ? (
              <>
                <div className={style.search}>
                  <select
                    name="type"
                    id="type"
                    className={style.selectInput}
                    onChange={filter}
                  >
                    <option value="">בחר</option>
                    <option value="short">קצר</option>
                    <option value="rolling">מתגלגל</option>
                    <option value="tutorial">מדריך</option>
                  </select>
                  <select
                    name="difficulty"
                    id="difficulty"
                    className={style.selectInput}
                    onChange={filter}
                  >
                    <option value="">בחר</option>
                    <option value="easy">קל</option>
                    <option value="medium">בינוני</option>
                    <option value="hard">קשה</option>
                  </select>
                  <input
                    type="search"
                    name="input"
                    id="search"
                    onChange={filter}
                  />
                </div>
                <div className={style.return} onClick={() => setView(true)}>
                  Return to languages page
                </div>
                <div className={style.exercises}>
                  {exerciseArray.map((exer) => (
                    <Exercise
                      key={exer._id}
                      exercise={exer}
                      admin={props.admin}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div>no exercise</div>
            )}
          </div>
        </div>
      )}
    </div>
  ) : (
    <Loader />
  );
};

export default AllExercise;
