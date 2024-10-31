import { useState } from "react";

const SimpleForm = () => {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="border"
          onChange={handleNameChange}
        />
        <br />
        <input type="email" name="email" className="border" />
        <br />
        <input type="submit" value="Submit" className="btn" />
      </form>
    </div>
  );
};

export default SimpleForm;
