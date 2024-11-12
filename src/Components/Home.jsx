import React, { useState, useEffect } from "react";
import "./Home.css";
import avtar from "../assets/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import cv from "../assets/Shubham_Amrawat_Update_Resume_latest.pdf";

function Home() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="flex flex-col  lg:flex-row mt-5 gap-6" id="home">
      <div className="picDiv bg-[#FF0000] basis-[50%] h-[700px] rounded-[25px] flex justify-center items-center overflow-hidden">
        <img src={avtar} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="dividedDiv basis-[25%] flex flex-col gap-4 rounded-[25px]">
        <div className="basis-[25%] rounded-[25px] flex flex-col items-center pt-2 bg-[#171515] justify-around resumeDownload">
          <h1 className="text-[35px] font-jim text-white">Resume/CV</h1>
          <a href={cv} download className="pb-2">
            <button className="flex gap-2 items-center p-2 px-6 bg-[#FF0000] font-semibold text-white rounded-[13px] downloadBtn">
              <FontAwesomeIcon icon={faFileArrowDown} />
              <span>Download</span>
            </button>
          </a>
        </div>

        <div className="basis-[20%] rounded-[25px] socials flex flex-col bg-[#171515] gap-4 items-center pt-2">
          <h1 className="text-[35px] font-jim text-white">Socials</h1>
          <div className="flex gap-4 text-[40px] justify-evenly w-full text-white pb-2">
            <a
              href="https://github.com/afkdude"
              target="blank"
              className="hover:text-blue-400"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="cursor-pointer socialIcons"
              />
            </a>
            <a
              href="mailto:kumarjordy12@gmail.com"
              target="blank"
              className="hover:text-red-400"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="cursor-pointer socialIcons"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/shubham-amrawat-b98b70124/"
              target="blank"
              className="hover:text-blue-600"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="cursor-pointer socialIcons"
              />
            </a>
            <a href="https://x.com/kumarjordy12" target="blank">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="cursor-pointer socialIcons"
              />
            </a>
          </div>
        </div>

        <div className="skills basis-[55%] rounded-[25px] bg-[#171515] flex flex-col gap-4 items-center justify-around">
          <h1 className="text-[35px] font-jim text-white">Skills</h1>
          <div className="skillsIcon flex-wrap flex gap-4 justify-evenly">
            <img src="src/assets/Icons/java.png" alt="Java" />
            <img src="src/assets/Icons/c-.png" alt="C++" />
            <img src="src/assets/Icons/python.png" alt="Python" />
            <img src="src/assets/Icons/html-5.png" alt="HTML5" />
            <img src="src/assets/Icons/css.png" alt="CSS" />
            <img src="src/assets/Icons/js.png" alt="JavaScript" />
            <img src="src/assets/Icons/react.png" alt="React" />
            <img src="src/assets/Icons/figma.png" alt="Figma" />
          </div>
        </div>
      </div>

      <div className="contactDiv basis-[25%] gap-4 rounded-[25px] text-white font-jim flex flex-col ">
        <div className=" clockSection basis-[25%] bg-[#171515] rounded-[20px] flex flex-col items-center justify-center">
          <p className="text-[50px] font-mono">{formattedTime}</p>
        </div>

        <div className="basis-[75%] bg-[#FF0000] rounded-[20px] flex flex-col items-center pt-4">
          <h1 className="text-[40px]">Overview/Summary</h1>
          <span className="text-[21px] font-mono text-gray-200 rounded-[20px] m-2 mt-10 p-2 font-semibold">
            Hello! I'm an aspiring web developer with a solid foundation in
            HTML, CSS, JavaScript, and ReactJS, along with hands-on experience
            in the MERN stack. Currently focused on upskilling and expanding my
            expertise in modern web technologies. Proficient in Java, Python,
            and C++, backed by a BTech in Computer Science & AI from NSUT Delhi.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
