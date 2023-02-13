import React, { useState, useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm, username, email, password } = useForm({
    username: "",
    email: "",
    password: "",
  });


  // const {username, email, password} = formState

  useEffect(() => {
    // console.log('useeffect called!')
  }, []);

  useEffect(() => {
    // console.log('formState changed!')
  }, [formState]);

  useEffect(() => {
    // console.log('email changed!')
  }, [email]);

  return (
    <>
      <h1>Formulario con custom hook</h1>
      <hr />

      <input
        type="text"
        name="username"
        id=""
        placeholder="Username"
        className="form-control"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        name="email"
        id=""
        placeholder="fernando@google.com"
        className="form-control mt-2"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        name="password"
        id=""
        placeholder="Password"
        className="form-control mt-2"
        value={password}
        onChange={onInputChange}
      />

      {username === "ferparrios2" && <Message />}

      <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>
    </>
  );
};
