import PropTypes from "prop-types";

const ProjectCard = ({ img, name, techStack, features, link }) => {
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <img
        className="w-full h-auto rounded-t-xl"
        src={img || "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"}
        alt="Project Image"
      />
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {name}
        </h3>
        <p className="mt-1 text-gray-500 dark:text-neutral-400">
          <strong>Tech Stack:</strong> {techStack.join(", ")}
        </p>
        <p className="mt-1 text-gray-500 dark:text-neutral-400">
          <strong>Features:</strong> {features.join(", ")}
        </p>
        <a
          className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;
