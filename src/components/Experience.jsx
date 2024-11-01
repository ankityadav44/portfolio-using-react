import React from "react";
import experience from "./data/experience.json";


const Experience = () => {
  return (
    <>
      <div className="container ex" id="experience">
        <h1>EXPERIENCE</h1>
        {experience.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="left item">
                  <img src={`/assets/${data.imageSrc}`} alt="" style={{width:"100px"}}/>
                </div>
                <div className="right">
                  <h2>{data.role}</h2>
                  <h4>
                    
                    <span style={{ color: "yellow" }}>{data.location}</span>
                  </h4>
                  
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
