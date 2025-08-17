import { useState, useEffect } from "react";
// this is to be a reusable input element. built with label , customizable classnames using props and error with customizable debounce fx.

const FormInput = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="input-element">
      <label>Username: </label>
      <input value={userInput} onChange={handleInputChange} />
      {error && <p className="text-red-500">Error message placeholder</p>}
    </div>
  );
};

export default FormInput;
