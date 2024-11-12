import React from "react";
import "./Projects.css";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { projectData } from "../Data/projectsName";

function Projects() {
  return (
    <div
      className="flex flex-col mt-[20px] items-center flex-wrap flex-shrink-2"
      id="projects"
    >
      <h1 className="text-white text-[50px] font-jim">Projects</h1>

      <div className="flex gap-6 flex-wrap justify-center">
        {projectData.map((v, i) => {
          return (
            <div className="w-full sm:w-[280px] md:w-[300px] lg:w-[350px] rounded-[15px] bg-[#FF0000] flex flex-col items-center p-4 justify-between mb-6">
              <img src={v.src} alt="" className="rounded-[15px] mb-2" />
              <h1 className="font-mono text-white text-lg sm:text-xl md:text-2xl text-center">
                {v.desc}
              </h1>

              <a href={v.git} target="blank">
                <button className="githubBtn px-3 py-1 mt-2 rounded flex gap-2 items-center">
                  <FontAwesomeIcon icon={faGithub} />
                  <span className="font-mono">Github</span>
                </button>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
