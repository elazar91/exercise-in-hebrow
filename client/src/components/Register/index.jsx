import axios from "axios";
import { useContext } from "react";
import { CurrentUser } from "../../App";
import style from "./Register.module.scss";

const Register = () => {
  const { setRegisterUser } = useContext(CurrentUser);

  function submitHeandler(e) {
    e.preventDefault();
    const form = e.target;
    const values = getAllValues(form);

    axios.post("http://localhost:3333/register", values).then((resutl) => {
      form.reset();
      setRegisterUser(values);
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
      <form className={style.form} onSubmit={(e) => submitHeandler(e)}>
        <div>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="שם פרטי"
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="שם משפחה"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="סיסמה"
          />
        </div>
        <div>
          <input type="email" name="email" id="email" placeholder="אימייל" />
        </div>
        <input type="submit" value="שלח" />
      </form>
    </div>
  );
};

export default Register;
