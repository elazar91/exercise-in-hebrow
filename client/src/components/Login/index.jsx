import React, { useContext } from "react";
import style from "./login.module.scss";
import axios from "axios";
import { CurrentUser } from "../../App";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setLoginUser, loginUser } = useContext(CurrentUser);
  const navigate = useNavigate();

  function loginSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const values = getAllValues(form);

    axios
      .post("http://localhost:3333/login", values)
      .then((result) => {
        form.reset();
        setLoginUser(result.data);
      })
      .then(() => {
        console.log(loginUser);
        if (loginUser) navigate("/");
      });

    function getAllValues(form) {
      return Object.values(form).reduce(
        (acc, cur) => {
          let { value, name } = cur;

          return name
            ? {
                ...acc,
                [name]: value,
              }
            : acc;
        },

        {}
      );
    }
  }

  return (
    <div>
      <form className={style.form} onSubmit={loginSubmit}>
        <div>
          <input
            className={style.input}
            type="email"
            name="email"
            id="emile"
            placeholder="email"
          />
        </div>
        <div>
          <input
            className={style.input}
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;
