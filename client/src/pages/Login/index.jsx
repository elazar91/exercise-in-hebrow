import Register from "../../components/Register";
import Login from "../../components/Login";
import { useState } from "react/cjs/react.development";
import style from "./Login.module.scss";

const LoginPage = () => {
  const [sing, setSing] = useState(false);

  return (
    <div>
      {sing ? (
        <div>
          <Login />
          <div className={style.button} onClick={() => setSing(!sing)}>
            עדיין לא רשום?
          </div>
        </div>
      ) : (
        <div>
          <Register />
          <div className={style.button} onClick={() => setSing(!sing)}>
            רשום כבר?
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
