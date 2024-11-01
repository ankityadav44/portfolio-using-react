
import React from "react";
import tools from "./data/tools.json";

const Tools = () => {
  return (
    <>
      <div className="container skills" id="skills">
        <h1>TOOLS</h1>
        <div className="items">
          {tools.map((data) => (
            
              <div
                className="item"
                key={data.id}
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <img src={`/assets/${data.imageSrc}`} alt="" />
                <h3>{data.title}</h3>
              </div>
            
          ))}
        </div>
      </div>
    </>
  );
};



export default Tools;