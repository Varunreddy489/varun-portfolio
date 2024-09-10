import { FaTools } from "react-icons/fa";

const skills = [
 
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "TailwindCSS",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtAF86gSUXsflWOTeg69G63ED5Msln0svIzg&s",
  },
  {
    name: "Prisma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "REST API",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe9Q5jy_uzyrwAtnw7s4vJf6AA2xyFr3Z0gg&s",
  },
  {
    name: "Postman",
    logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    name: "VS Code",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  
];

const Skills = () => {
  return (
    <div className="p-6">
      <div className="flex text-3xl gap-3 text-blue-500 items-center justify-center mb-8">
        <FaTools />
        <p className="font-bold">My Skills</p>
      </div>

      <div className="space-y-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex flex-wrap gap-6 justify-center">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-4 bg-gray-700 hover:bg-orange-500  p-4 rounded-lg shadow-md"
              >
                <img src={skill.logo} alt={skill.name} className="w-12 h-12" />
                <p className="text-lg text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
