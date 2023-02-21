import React, { useState, useCallback, useEffect } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(
    (value) => {
      // console.log(setCounter(counter + 1))
      setCounter((c) => c + value)  
    },
    [],
  )

  // useEffect(() => {
  //   increment()
  // }, [increment])
  
  

  // const increment = () => {
  //   setCounter(counter + 1)
  // }

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </>
  );
};
