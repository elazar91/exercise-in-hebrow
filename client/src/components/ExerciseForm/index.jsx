import { useState } from "react/cjs/react.development";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import style from "./ExerciseForm.module.scss";

const ExersiceForm = () => {
  // const [exercise, setExercise] = useState({
  //   icon: "",
  //   details: "",
  //   title: "",
  //   status: "",
  //   exec_type: "",
  //   difficulty: "",
  //   tags: [],
  //   prog_lang: "",
  //   dev_time: "",
  //   content: {
  //     content: "",
  //     sourse: [
  //       {
  //         name: "",
  //         url: "",
  //       },
  //     ],
  //   },
  //   solution: "",
  //   create_date: new Date(),
  // });
  const [data, setData] = useState({
    icon: "",
    details: "",
    title: "",
    status: "",
    exec_type: "",
    difficulty: "",
    tags: [],
    prog_lang: "",
    dev_time: "",
    content: {
      content: "",
      sourse: [
        {
          name: "",
          url: "",
        },
      ],
    },
    solution: "",
    create_date: new Date(),
  });
  const [lang, setLang] = useState();
  const params = useParams();
  useEffect(getExercise, []);
  useEffect(gatAllLanguages, []);

  function gatAllLanguages() {
    axios.get("http://localhost:3333/language").then((result) => {
      setLang(result.data);
    });
  }

  function getExercise() {
    axios.get(`http://localhost:3333/exercise/${params.id}`).then((result) => {
      setData(result.data.exercise[0]);
    });
  }

  function changeInput(e) {
    const input = { ...data };
    if (e.target.name === "content") {
      input.content.content = e.target.value;
    } else if (e.target.name === "tags") {
      input.tags = e.target.value.split(",");
    } else {
      input[e.target.name] = e.target.value;
    }
    setData(input);
  }

  function updateExercise(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:3333/exercise/${params.id}`, data)
      .then(() => {});
  }

  return (
    <>
      {data ? (
        <form onSubmit={updateExercise} className={style.form}>
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={changeInput}
          />
          <select name="type" id="type" className={style.selectInput}>
            <option value="">בחר</option>
            <option value="short">קצר</option>
            <option value="rolling">מתגלגל</option>
            <option value="tutorial">מדריך</option>
          </select>
          <select
            name="difficulty"
            id="difficulty"
            className={style.selectInput}
          >
            <option value="">בחר</option>
            <option value="easy">קל</option>
            <option value="medium">בינוני</option>
            <option value="hard">קשה</option>
          </select>
          <select name="status" id="status" className={style.selectInput}>
            <option value="">בחר</option>
            <option value="draft">טיוטה</option>
            <option value="publish">פרסום</option>
            <option value="deleted">מחק</option>
          </select>
          <select name="programLang" id="lang" className={style.selectInput}>
            {lang &&
              lang.map((language) => (
                <option key={language._id} value={language._id}>
                  {language.programLang}
                </option>
              ))}
          </select>
          <input
            type="text"
            name="tags"
            id="tags"
            value={data.tags}
            onChange={changeInput}
          />
          <textarea
            name="content"
            id="content"
            cols="30"
            rows="10"
            value={data.content.content}
            onChange={changeInput}
          ></textarea>
          <textarea
            name="solution"
            id="solution"
            cols="30"
            rows="10"
            value={data.solution}
            onChange={changeInput}
          ></textarea>
          <input type="submit" value="send" />
        </form>
      ) : (
        <>hy</>
      )}
    </>
  );
};

export default ExersiceForm;
