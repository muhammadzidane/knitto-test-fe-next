"use client";

import { useEffect } from "react";

const GlobalError = ({ error, reset }: { reset: () => void; error: Error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={() => {
          reset();
        }}
      >
        Try again
      </button>
    </div>
  );
};

export default GlobalError;
