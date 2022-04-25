import {Tempcontext} from './LogContext'

import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
export const Login = () => {
  //  use reqres to log user in.
  const nav = useNavigate()
  const { isAuth, toggleAuth } = useContext(Tempcontext)
  function sendToken(e) { 
    e.preventDefault()
    toggleAuth()
   nav(-2,{replace:true})  
    
  }

  return (
    <form className="loginform" onSubmit={sendToken}>
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
