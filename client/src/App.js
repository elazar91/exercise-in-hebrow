import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import Exercise from "./pages/Exercise";
import ExerciseForm from "./components/ExerciseForm";
import { Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from 'react';

export const CurrentUser = createContext()

function App() {

  const [registerUser,setRegisterUser] = useState()
  const [loginUser,setLoginUser] = useState()
  console.log(loginUser)

  return (
    <div className="App">
      <CurrentUser.Provider value={{registerUser, setRegisterUser, loginUser, setLoginUser}}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<Exercise />} />
          <Route path="/login" element={<LoginPage/>} />
          {loginUser?.permission === 'admin' ?<Route path="/admin" element={<Admin/>} /> : <Route path="/" element={<Home />} />}
          {loginUser?.permission === 'admin' ?<Route path="/admin/exercise/:id" element={<ExerciseForm admin={true}/>} />: <Route path="/" element={<Home />} />}
        </Routes>
        <Footer />
      </CurrentUser.Provider>
    </div>
  );
}

export default App;
