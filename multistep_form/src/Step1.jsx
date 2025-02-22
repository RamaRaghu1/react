import React from "react";

const Step1 = ({ data, setData,handleChange, errors }) => {
  const { name, email, age } = data;

  
  return (
    <div>
      <div>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" value={name} onChange={handleChange}  />
        {errors.name && <span>{errors.name}</span>  }
      </div>
      <div>
        <label htmlFor="">Email:</label>
        <input type="text" name="email" value={email} onChange={handleChange}  />
        {errors.email && <span>{errors.email}</span>  }
      </div>
      <div>
        <label htmlFor="">Age:</label>
        <input  type="text" name="age" value={age} onChange={handleChange}  />
        {errors.age && <span>{errors.age}</span>  }
      </div>
    </div>
  );
};

export default Step1;
