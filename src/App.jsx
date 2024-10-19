import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  // setInterval(() => {
  //   setCounter((count) => count + 1);
  // });
  
  return (
    <>
      <h1>{counter} seconds have passed</h1>
    </>
  );
}
