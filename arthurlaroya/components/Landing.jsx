'use client'

import ReactCurvedText from "react-curved-text";

const Landing = () => {
  return (
    <div className="mx-10">
      <span className="text-[117px] font-[400] text-white">
        Arthur Laroya
      </span>
      <p className="text-[48px] text-white">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
        assumenda voluptatum itaque ullam laborum sit et doloribus illo.
        Voluptatum blanditiis modi saepe in! Repellendus quia inventore officiis
        eius ratione voluptatem.
      </p>
      <ReactCurvedText
      width={370}
      height={300}
      cx={190}
      cy={120}
      rx={100}
      ry={100}
      startOffset={50}
      reversed={false}
      text="welcome to my portfolio"
      textProps={{ style: { fontSize: 24, fontColor: '#fff' } }}
      textPathProps={null}
      tspanProps={null}
      ellipseProps={null}
      svgProps={null}
    />
    </div>
  );
};

export default Landing;
