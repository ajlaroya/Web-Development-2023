"use client";
import { useState } from "react";

const AccordionItem = ({ question, answer, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="collapse" key={index}>
      <input type="checkbox" onClick={() => setExpanded(!expanded)} />
      <div
        className={`${
          expanded ? "" : ""
        } collapse-title flex w-full justify-between !px-0 py-7 text-xl`}
      >
        <h1 className="hidden w-1/3 md:block">0{index}</h1>
        <div className="flex w-full justify-between font-bold md:w-2/3">
          <p>{question}</p>
          <span>{expanded ? "-" : "+"}</span>
        </div>
      </div>

      <div
        className={`${
          expanded ? "" : ""
        } collapse-content flex border-b !px-0 text-xl transition delay-300 ease-in-out`}
      >
        <span className="hidden w-1/3 md:block"></span>
        <div className="w-full pb-3 text-left md:w-2/3">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
