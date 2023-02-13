import React, { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "ferparrios",
    email: "fernando@google.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log('useeffect called!')
  }, [])

  useEffect(() => {
    // console.log('formState changed!')
  }, [formState])

  useEffect(() => {
    // console.log('email changed!')
  }, [email])
  

  return (
    <>
      <h1>Formulario Simple</h1>
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

      {
        (username === 'ferparrios2') && <Message />
      }
    </>
  );
};
