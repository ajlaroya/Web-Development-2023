"use client";
import { useState } from "react";

const AccordionItem = ({ question, answer, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="collapse" 
    key={index}>
        <input type="checkbox" 
        onClick={() => setExpanded(!expanded)} />
      <div
        className={`${expanded ? "" : ""} w-full flex justify-between text-xl collapse-title py-5 !px-0`}
      >
        <h1 className="w-1/3 hidden md:block">0{index}</h1>
        <div className="flex w-full md:w-2/3 justify-between font-bold">
          <p>{question}</p>
          <span>{expanded ? "-" : "+"}</span>
        </div>
      </div>

      <div className={`${expanded ? "" : ""} collapse-content flex border-b text-xl transition ease-in-out delay-300 !px-0`}>
        <span className="hidden w-1/3 md:block"></span>
        <div className="w-full md:w-2/3 text-left pb-3">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
