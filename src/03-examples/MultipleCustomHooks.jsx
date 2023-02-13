import React from "react";
import { useFetch, useCounter } from "../hooks";
import { LoadingQuote, Quote } from "./components";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, hasError, isLoading } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const { quote, author } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button
        onClick={() => increment()}
        disabled={isLoading}
        className="btn btn-primary"
      >
        Next Quote
      </button>
    </>
  );
};
