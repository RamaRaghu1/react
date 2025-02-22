import React from "react";

const Step2 = ({ data, setData, errors }) => {
  const { interests } = data;
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    setData((prev) => ({
      ...prev,

      interests: checked
        ? [...prev.interests, value]
        : prev.interests.filter((interest) => interest !== value),
    }));

  };
  console.log(interests)
  return (
    <div className="">
      <div>
        <label htmlFor="">Coding</label>
        <input type="checkbox" value="coding" checked={interests.includes("coding")} onChange={handleCheckboxChange}/>
      </div>

      <div>
        <label htmlFor="">Dancing</label>
        <input type="checkbox" value="dancing" onChange={handleCheckboxChange} checked={interests.includes("dancing")} />
      </div>
      <div>
        <label htmlFor="">Singing</label>
        <input type="checkbox" value="singing" onChange={handleCheckboxChange} checked={interests.includes("singing")} />
      </div>
      {errors.interests && <span>{errors.interests}</span>  }
    </div>
  );
};

export default Step2;
