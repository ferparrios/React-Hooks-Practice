import React, {useState} from 'react'

// {
//   username: "",
//   email: "",
//   password: "",
// }


export const useForm = (initialForm = {}) => {

  const [formState, setFormState] = useState(initialForm);

  // const { username, email, password } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm)
  }


  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }

}
