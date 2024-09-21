import React, { memo, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimesCircle } from "react-icons/fa";
import Modal from "react-modal";
import { useTrail, useSpring, animated } from "react-spring";
import projects from "../Data/projects.json";
import styled from "styled-components";

const ProjectModal = ({ project, isOpen, closeModal }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    className="fixed inset-0 z-50 flex items-center justify-center p-6"
    overlayClassName="bg-black bg-opacity-50 transition-opacity duration-500 ease-out"
  >
    <div className="bg-[#3a3939] bg-opacity-80 p-6 rounded-lg shadow-2xl transform transition-transform duration-500 ease-out space-y-4 sm:space-y-0 max-w-md max-h-[100vh] overflow-y-auto">
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 text-darkDesert hover:text-goldDesert"
      >
        <FaTimesCircle size={32} />
      </button>

      <div>
        <h3 className="text-darkDesert glitch text-2xl sm:text-3xl font-bold mb-4">
          {project.title}
        </h3>
        <p className="text-darkDesert glitch mb-4">{project.description}</p>
        <p className="text-darkDesert glitch font-bold mb-4">{project.date}</p>
        <div className="flex justify-between glitch items-center">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-darkDesert hover:text-goldDesert transition-colors duration-300"
            >
              <FaGithub size={32} />
            </a>
          ) : null}
          <a
            href={project.deployed}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-darkDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaExternalLinkAlt size={32} />
          </a>
        </div>
      </div>
    </div>
  </Modal>
);

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





