import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  console.log(value);

  return (
    <input
      type="text"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}

export default App;
