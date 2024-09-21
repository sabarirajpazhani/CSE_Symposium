import React, { memo, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimesCircle } from "react-icons/fa";
import Modal from "react-modal";
import { useTrail, useSpring, animated } from "react-spring";
import projects from "../Data/projects.json";
import styled from "styled-components";

const ProjectModal = ({ project, isOpen, closeModal }) => {

  const modalAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen
      ? 'scale(1) rotate(0deg)'    
      : 'scale(0.8) rotate(-10deg)', 
    config: { tension: 220, friction: 25 },
  });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      overlayClassName="bg-black bg-opacity-70 transition-opacity duration-500 ease-out"
    >
      <animated.div
        style={modalAnimation}
        className="relative bg-[#2b2a2a] bg-opacity-95 p-8 rounded-2xl shadow-2xl transform transition-transform duration-500 ease-out space-y-6 sm:space-y-4 max-w-lg max-h-[90vh] overflow-y-auto"
      >
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-colors duration-300"
        >
          <FaTimesCircle size={28} />
        </button>

        {/* Modal content */}
        <div className="text-center">
          <h3 className="text-goldDesert glitch text-3xl sm:text-4xl font-bold mb-6">
            {project.title}
          </h3>
          <p className="text-gray-300 text-lg mb-6">{project.description}</p>
          <p className="text-gray-400 font-semibold mb-6">{project.date}</p>
          <p className="text-white glitch text-left">Event Cordinators</p>
          <p className="text-gray-400 text-2xl font-semibold text-left">{project.cordinator1}</p>
          <p className="text-gray-400 text-2xl font-semibold text-left">{project.cordinator2}</p>

          {/* Links */}
          <div className="flex justify-center items-center space-x-8">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-goldDesert transition duration-300"
              >
              </a>
            )}
            {project.deployed && (
              <a
                href={project.deployed}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-goldDesert transition duration-300"
              >
              </a>
            )}
          </div>
        </div>
      </animated.div>
    </Modal>
  );
};

const StyledWrapper = styled.div`
  .section {
    position: relative;
    padding: 2rem;
    border-radius: 10px;
    overflow: hidden;
    border: 4px solid transparent;
  }

  .section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    border: 7px solid;
    border-image: linear-gradient(90deg, #57cfdc, #FF4500) 1;
    z-index: -1;
    animation: borderAnimation 2.5s linear infinite;
    pointer-events: none;
  }

  @keyframes borderAnimation {
    0% {
      border-image-source: linear-gradient(90deg, #FF4500, #57cfdc);
    }
    50% {
      border-image-source: linear-gradient(90deg, #57cfdc, #FF4500);
    }
    100% {
      border-image-source: linear-gradient(90deg, #FF4500, #57cfdc);
    }
  }
`;

const ProjectCard = ({ project, openModal }) => {
  const [hovered, setHovered] = useState(false);
  const hoverProps = useSpring({
    transform: hovered ? "scale(1.05)" : "scale(1)",
  });

  return (
    <StyledWrapper>
      <animated.div
        className="section"
        style={hoverProps}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative group">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <div className="absolute inset-0 bg-darkDesert bg-opacity-70 flex items-center justify-center rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-all duration-500">
            <h1 className="glitch text-center text-sm md:text-2xl lg:text-3xl truncate w-11/12 md:w-10/12">
              {project.title}
            </h1>
          </div>
          <button onClick={openModal} className="absolute inset-0 cursor-pointer">
            <span className="sr-only">Open details for {project.title}</span>
          </button>
        </div>
      </animated.div>
    </StyledWrapper>
  );
};


const Projects=()=> {
  const [selectedProject, setSelectedProject] = useState(null);

  const trails = useTrail(projects.length, {
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(20px)" },
    delay: 200,
    config: { mass: 5, tension: 2000, friction: 200 },
  });

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  const modalAnimation = useSpring({
    opacity: selectedProject ? 1 : 0,
    transform: selectedProject ? "scale(1)" : "scale(0.9)",
    config: { tension: 150, friction: 20 },
  });

  const reversedProjects = [...projects].reverse();

  return (
      <div
      id="techEvents"
      className="container mx-auto flex flex-col items-center p-8 bg-lightDesert bg-opacity-80 mt-12 min-h-screen pt-[80px]" // add padding at the top
    >
      <h2 className="text-4xl font-semibold text-[#57cfdc] glitch text-center mb-10">Technical<span className="text-[#FF4500] font-semibold text-center"> Events</span> </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {trails.map((props, index) => (
          <animated.div key={reversedProjects[index].id} style={props}>
            <ProjectCard
              project={reversedProjects[index]}
              openModal={() => openModal(reversedProjects[index])}
            />
          </animated.div>
        ))}
      </div>
      {selectedProject && (
        <animated.div style={modalAnimation}>
          <ProjectModal
            project={selectedProject}
            isOpen={!!selectedProject}
            closeModal={closeModal}
          />
        </animated.div>
      )}
    </div>
    
  );
}


export default memo(Projects);





