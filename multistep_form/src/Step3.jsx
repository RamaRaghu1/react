import React from "react";

const Step3 = ({ data, handleChange }) => {
  const { theme } = data;

  console.log(data);
  return (
    <div>
      <label htmlFor="">
        <input
          type="radio"
          name="theme"
          value="dark"
          onChange={handleChange}
          checked={theme == "dark"}
        />
        Dark
      </label>

      <label htmlFor="">
        <input
          type="radio"
          name="theme"
          value="light"
          onChange={handleChange}
          checked={theme == "light"}
        />
        Light
      </label>
    </div>
  );
};

export default Step3;
