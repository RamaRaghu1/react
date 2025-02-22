import Accordion from "./Accordion";
import "./App.css";
import { useState } from "react";
import accordionData from "./utils/accordionData.js";
function App() {
  const [activeId, setActiveId] = useState(null);
  return (
    <>
      <div>
        {accordionData?.map((dt, index) => {
          return (
            <Accordion
              id={dt.id}
              key={index}
              title={dt.title}
              content={dt.content}
              setActiveId={setActiveId}
              activeId={activeId}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
