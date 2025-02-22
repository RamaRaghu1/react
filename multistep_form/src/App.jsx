import { useState } from "react";
import Step1 from "./Step1";
import "./App.css";
import Step2 from "./Step2";
import Step3 from "./Step3";

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    interests: [],
    theme: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const [errors, setErrors] = useState({});
  const tabs = [
    {
      name: "Personal",
      component: Step1,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid";
        }
        if (!data.email.includes("@")) {
          err.email = "Email is not valid";
        }
        if (!data.age) {
          err.age = "Age is required";
        }
        setErrors(err);
        return err.name || err.email || err.age ? false : true;
      },
    },
    {
      name: "Interests",
      component: Step2,
      validate: () => {
        const err = {};
        if (data.interests.length<1) {
          err.interests = "Interest can't be empty";
        }
        setErrors(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Step3,
      validate:()=>{
        return true
      }
    },
  ];

  const ActiveTab = tabs[activeTab].component;

  const handlePrev = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data)
  };
  return (
    <>
      <div className="main-container">
        <div className="tabs-container">
          {tabs.map((dt, index) => (
            <p className="tabs" key={index} onClick={() => setActiveTab(index)}>
              {dt.name}
            </p>
          ))}
        </div>
        <div className="form-container">
          <ActiveTab
            data={data}
            setData={setData}
            handleChange={handleChange}
            errors={errors}
          />
        </div>
        <div className="buttons-tab">
          {activeTab > 0 && <button onClick={handlePrev}>Prev</button>}
          {activeTab < tabs.length - 1 && (
            <button onClick={handleNext}>Next</button>
          )}
          {activeTab === tabs.length - 1 && <button onClick={handleSubmit}>Submit</button>}
        </div>
      </div>
    </>
  );
}

export default App;
