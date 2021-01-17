import React from "react";

import useInput from "../hooks/useInput";
import useForm from "../hooks/useForm";

const Login = () => {
  const [username, onUsernameChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [onFormSubmit] = useForm({ username, password }, submit);

  function submit() {
    console.log({ username, password });
  }
  return (
    <section className='ui container'>
      <h1 style={{ fontSize: "4rem", marginTop: "5rem" }}>Login</h1>
      <form className='ui form' onSubmit={onFormSubmit}>
        <div className='field'>
          <label htmlFor='username'>Username: </label>
          <input
            id='username'
            type='text'
            value={username}
            onChange={onUsernameChange}
          />
        </div>
        <div className='field'>
          <label htmlFor='password'>Password: </label>
          <input
            id='password'
            type='password'
            value={password}
            onChange={onPasswordChange}
          />
        </div>
        <button type='submit' className='ui primary button'>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Login;
