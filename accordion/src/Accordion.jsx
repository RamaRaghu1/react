import React, { useState } from "react";
const Accordion = ({ id,key, title, content, activeId,setActiveId }) => {
    const isActive = activeId === id;
  return (
    <div key={key} className="margin-8">
      <div className=" border-2" onClick={() => setActiveId(id)}>
        {title} <span>{isActive ? "-" : "+"}</span>
      </div>
      {isActive && <div className="border">{content}</div>}
    </div>
  );
};

export default Accordion;
