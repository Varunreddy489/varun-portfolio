import { FaDownload, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex text-white mt-10 justify-between p-6 ">
      <div>
        <p>Hi there, 👋 </p>
        <p className="text-5xl font-bold">
          I am <span className="text-blue-600">Varunreddy</span>
        </p>
        <h3 className="text-xl">Full Stack Web Developer</h3>
        <br />
        <p>I specialize in MERN Stack and TypeScript</p>

        <div className="m-5 space-x-5">
          <button
            type="button"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 hover:scale-110 ease-in focus:outline-none focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600 transition-transform duration-300"
          >
            <FaDownload />
            Download CV
          </button>
          <a
            href="https://github.com/your-profile"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 hover:scale-110 ease-in focus:outline-none focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600 transition-transform duration-300"
          >
            <FaGithub />
            Github
          </a>
        </div>
      </div>
      <div>
        <img
          src="/Varun.jpg"
          alt="Varun"
          className="w-72 h-72 hidden sm:block"
        />
      </div>
    </div>
  );
};

export default Home;
