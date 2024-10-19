import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(key);
    };
  }, []);

  return (
    <>
      <h1>{counter} seconds have passed</h1>
    </>
  );
}
