import React, { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  // console.log(ref)

  const onClick = () => {
    // document.querySelector("input").select();
    // console.log(inputRef)
    inputRef.current.select()
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />

      <button onClick={onClick} className="btn btn-primary mt-2">
        Set focus
      </button>
    </>
  );
};
