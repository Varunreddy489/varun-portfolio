const Navbar = () => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-black text-sm py-6">
      <nav className="max-w-[85rem] w-full mx-auto px-3 sm:flex sm:items-center sm:justify-between">
        <a
          className="flex-none font-bold text-3xl text-white focus:outline-none focus:opacity-80"
          href="#"
        >
          Varunreddy
        </a>
        <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5 text-blue-500">
          <a href="#home" className="text-xl font-medium   focus:outline-none">
            Home
          </a>
          <a
            className="text-xl font-medium text-gray-400 hover:text-blue-500 focus:outline-none focus:text-blue-500"
            href="#education"
          >
            Education
          </a>
          <a
            className="text-xl font-medium text-gray-400 hover:text-blue-500 focus:outline-none focus:text-blue-500"
            href="#skills"
          >
            Skillset
          </a>
          <a
            className="text-xl font-medium text-gray-400 hover:text-blue-500 focus:outline-none focus:text-blue-500"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="text-xl font-medium text-gray-400 hover:text-blue-500 focus:outline-none focus:text-blue-500"
            href="#resume"
          >
            Resume
          </a>
          <a
            className="text-xl font-medium text-gray-400 hover:text-blue-500 focus:outline-none focus:text-blue-500"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
