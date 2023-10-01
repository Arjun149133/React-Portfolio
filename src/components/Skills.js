import React from "react";
import { skills } from "./data";

function Skills() {
  return (
    <section className=" m-3 bg-sky-600 h-max  p-3 rounded-xl " id="skills" >
      <h1 className=" flex text-2xl font-bold text-white m-auto top-0 left-0 px-5 py-3 underline underline-offset-8 decoration-slate-400">
        My Skills
      </h1>
      <div className="  flex  justify-center gap-72 p-3">
        {skills.map((skill) => {
          const { id, image, info } = skill;
          return (
            <article key={id} className=" flex justify-center space-x-7 shadow-sm shadow-gray-700 p-3">
              <div className=" flex flex-col justify-center bg-gray-300 p-5 rounded-xl">
                <img
                  className=" h-auto rounded-xl w-auto p-1 m-1"
                  src={image}
                  alt={id}
                  key={id}
                />
                <div className=" font-medium flex text-center">{info}</div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
