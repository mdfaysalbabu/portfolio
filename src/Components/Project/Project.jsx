import React, { useState } from "react";
import { Zoom, Fade } from "react-reveal";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Project.css";

const projects = [
  {
    id: 1,
    title: "Dream Toy",
    description:
      "Both logging in and creating an account are options available here. Users can log in also using their Google accounts. Logged in users will redirect to the home page automatically  A private route has been established in the viewDetails page is a private page Users who are logged in have the ability to add toys and check my toys.",
    image:
      "https://img.freepik.com/free-vector/graphic-design-idea-concept_52683-5325.jpg?size=626&ext=jpg&ga=GA1.1.1676688474.1687690117&semt=ais",
    serverLink: "https://github.com/mdfaysalbabu/toy_server",
    clientLink: "https://github.com/mdfaysalbabu/toy_dream",
    liveLink: "https://car-toys-client.web.app/",
    technology:
      "Tailwind,DaisyUi, ReactJS, NodeJS, Express, firebase authentication,MongoDb",
  },
  {
    id: 2,
    title: "Hot Recipes",
    description:
      "have a chef card section and add view details button if click button then will be viewDetails page.viewDetails page have a chef bio and 3 recipes items in the card  This website have a blog page in blog page have a pdf user can download the pdf  logging in and creating an account are options available here. ",
    image:
      "https://img.freepik.com/free-vector/graphic-design-idea-concept_52683-5325.jpg?size=626&ext=jpg&ga=GA1.1.1676688474.1687690117&semt=ais",
    serverLink: "https://github.com/mdfaysalbabu/recipes_server",
    clientLink: "https://github.com/mdfaysalbabu/recipes",
    liveLink: "https://chef-project-c78cd.web.app/#",
    shortDescription: "Short description for Project 2",
    technology:
      " React Bootstrap, ReactJS, NodeJS, Express, toast, firebase authentication,React Lazy Load",
  },
  {
    id: 3,
    title: "Sports Velocity",
    description:
      "The Sports Academy website includes Both logging in and creating an account are options available here  The website includes a user-friendly dashboard admin and instructor dashboard here  The website includes a Payment Method user can easily pay and buy classes and payment history check easily and delete option here.",
    image:
      "https://img.freepik.com/free-vector/graphic-design-idea-concept_52683-5325.jpg?size=626&ext=jpg&ga=GA1.1.1676688474.1687690117&semt=ais",
    serverLink: "https://github.com/mdfaysalbabu/serverSports",
    clientLink: "https://github.com/mdfaysalbabu/clientSports",
    liveLink: "https://sports-academy-b5235.web.app/",
    shortDescription: "Short description for Project 3",
    technology:
      "Tailwind, ReactJS,Axios,TanStack Query,react-hook-form,MongoDB,JWT.",
  },
  {
    id: 4,
    title: "Sports Velocity",
    description:
      "The Sports Academy website includes Both logging in and creating an account are options available here  The website includes a user-friendly dashboard admin and instructor dashboard here  The website includes a Payment Method user can easily pay and buy classes and payment history check easily and delete option here.",
    image:
      "https://img.freepik.com/free-vector/graphic-design-idea-concept_52683-5325.jpg?size=626&ext=jpg&ga=GA1.1.1676688474.1687690117&semt=ais",
    serverLink: "https://github.com/mdfaysalbabu/serverSports",
    clientLink: "https://github.com/mdfaysalbabu/clientSports",
    liveLink: "https://sports-academy-b5235.web.app/",
    shortDescription: "Short description for Project 3",
    technology:
      "Tailwind, ReactJS,Axios,TanStack Query,react-hook-form,MongoDB,JWT.",
  },
];

const Project = () => {
  React.useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);
  const [projectsToShow, setProjectsToShow] = useState(3);
  const increment = 4;

  const showMoreProjects = () => {
    setProjectsToShow((prevProjects) => prevProjects + increment);
  };

  const visibleProjects = projects.slice(0, projectsToShow);

  return (
    <section
      id="projects"
      className="portfolio-section bg-gradient-to-r from-gray-900 to-purple-400 py-10"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <Zoom key={index} duration={800} delay={index * 200}>
              <div className="project-container">
                <div
                  className=" project project-card  shadow-md overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 300}
                >
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-4 project-details">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white font-semibold mb-4">
                      {project.description}
                    </p>
                    <span>
                      <h2 className="font-bold text-xl text-white">
                        Technologies:
                      </h2>
                      <p className="text-white font-bold mb-4">
                        {project.technology}
                      </p>
                    </span>
                    <div className="flex justify-center">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-green-700 to-red-500 hover:from-teal-400 hover:to-yellow-300 text-white font-bold py-2 px-4 rounded-xl transition duration-300 ease-in-out btn mx-2"
                      >
                        Live Link
                      </a>
                      <a
                        href={project.serverLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-700 hover:to-yellow-300 text-white font-bold py-2 px-4 rounded-xl transition duration-300 ease-in-out btn mx-2"
                      >
                        Server-Side
                      </a>
                      <a
                        href={project.clientLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-cyan-700 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-xl transition duration-300 ease-in-out btn mx-2"
                      >
                        Client-Side
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Zoom>
          ))}
          {projectsToShow < projects.length && (
            <div className="flex justify-center mt-6 items-center">
              <div className="text-center">
                <button
                  className="bg-pink-700  hover:to-yellow-300 text-white font-bold py-2 px-4 rounded-xl transition duration-300 ease-in-out btn"
                  onClick={showMoreProjects}
                >
                  Show More
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
