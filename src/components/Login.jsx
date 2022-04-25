import {Tempcontext} from './LogContext'

import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
export const Login = () => {
  //  use reqres to log user in.
  const [user,setUser]=useState({})
  const nav = useNavigate()
  const { isAuth, toggleAuth } = useContext(Tempcontext)
  function sendToken(e) { 
    e.preventDefault()

    toggleAuth(user)
    nav(-2,{replace:true})  
    
  }
  const handelchange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
  };


  return (
		<form className="loginform" onSubmit={sendToken}>
			<input
				name="username"
				type="text"
				placeholder="Enter username"
				className="login_username"
				onChange={handelchange}
			/>
			<input
				name="password"
				type="text"
				placeholder="Enter password"
				className="login_password"
				onChange={handelchange}
			/>
			<input type="submit" value="SIGN IN" className="login_submit" />
		</form>
  );
};
