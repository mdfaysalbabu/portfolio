import React from "react";
import { Zoom } from "react-reveal";
import "./Skill.css"
// import {
//   DiHtml5,
//   DiCss3,
//   DiJavascript1,
//   DiReact,
//   DiNodejsSmall,
//   DiDatabase,
// } from "react-icons/di";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiSass,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

const Skill = () => {
  const skills = [
    {
      name: "HTML5",
      icon: <SiHtml5 className="text-6xl text-red-500" />,
      percentage: 90,
    },
    {
      name: "CSS3",
      icon: <SiCss3 className="text-6xl text-blue-500" />,
      percentage: 85,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-6xl text-yellow-500" />,
      percentage: 85,
    },
    {
      name: "React",
      icon: <SiReact className="text-6xl text-blue-400" />,
      percentage: 90,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-6xl text-blue-600" />,
      percentage: 80,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-6xl text-green-500" />,
      percentage: 80,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-6xl text-green-400" />,
      percentage: 75,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-6xl text-green-300" />,
      percentage: 70,
    },
    {
      name: "Git",
      icon: <SiGit className="text-6xl text-purple-500" />,
      percentage: 85,
    },
    {
      name: "Sass",
      icon: <SiSass className="text-6xl text-pink-500" />,
      percentage: 80,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-6xl text-teal-500" />,
      percentage: 85,
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="text-6xl text-purple-400" />,
      percentage: 80,
    },
    // Add more skills here
  ];

  return (
    <section id="skill" className="bg-gradient-to-r from-black to-gray-600 py-12">
    
      <div className="container mx-auto">
        <h2 className="text-3xl text-white font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <Zoom key={index} duration={800} delay={index * 200}>
              <div className="flex flex-col items-center justify-center bg-gray-300 p-4 rounded shadow-md">
                <div className="text-gray-500 mb-2">{skill.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {skill.name}
                </h3>
                <Progress
                  percent={skill.percentage}
                  strokeWidth={8}
                  status="default"
                  className="custom-progress "
                />
              </div>
            </Zoom>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
