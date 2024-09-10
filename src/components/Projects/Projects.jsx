
import { IoIosConstruct } from "react-icons/io";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    "img": "https://ibb.co/M6LJzDS",
    "name": "Ecommerce Website",
    "techStack": [
      "Node.Js",
      "Express.js",
      "React.JS",
      "TypeScript",
      "MongoDB",
      "REST API"
    ],
    "features": [
      "Middleware Integration",
      "User Authentication",
      "Product Catalog",
      "Shopping Cart",
      "Order Management",
      "Admin Panel",
      "Pagination"
    ],
    "link": "https://github.com/Varunreddy489/youtube-react"
  },
  {
    "img": "",
    "name": "Session Scheduler",
    "techStack": [
      "Node.Js",
      "Express.js",
      "React.JS",
      "TypeScript",
      "MongoDB",
      "REST API",
      "Nodemailer"
    ],
    "features": [
      "User Availability Management",
      "Middleware Integration",
      "Admin Dashboard",
      "User Authentication",
      "Session Rescheduling"
    ],
    "link": "https://github.com/Varunreddy489/SessionSync"
  },
  {
    "img": "",
    "name": "News App",
    "techStack": [
      "React.JS",
      "Prisma",
      "PostgreSQL",
      "Node.Js",
      "Express.js",
      "REST API",
      "Nodemailer",
      "Redis",
      "Bull MQ"
    ],
    "features": [
      "User Authentication",
      "Profile Management",
      "Image Upload",
      "Caching",
      "Logging",
      "Mailing",
      "News Catalog",
      "Middleware Integration",
      "Data Validation"
    ],
    "link": "https://github.com/Varunreddy489/News-App/tree/main"
  },
  {
    "img": "",
    "name": "Chat App",
    "techStack": [
      "Node.Js",
      "Express.js",
      "React.JS",
      "Socket.io",
      "MongoDB",
      "REST API"
    ],
    "features": [
      "User Authentication",
      "Online User Status",
      "Real-Time Messaging",
      "Middleware Integration"
    ],
    "link": "https://github.com/Varunreddy489/MERN-CHATAPP"
  }
];

const Projects = () => {
  return (
    <div className="p-6">
      <div className='flex text-3xl gap-3 text-blue-500 items-center justify-center mb-8'>
        <IoIosConstruct />
        <h1 className="font-bold">My Projects</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project) => (
          <ProjectCard
            key={project.name}
            img={project.img}
            name={project.name}
            techStack={project.techStack}
            features={project.features}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
