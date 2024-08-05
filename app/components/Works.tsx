"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";

// Sample project data
const projects = [
  {
    name: "Project 1",
    description: "This is project 1",
    tags: [
      { name: "React", color: "text-blue-500" },
      { name: "Next.js", color: "text-green-500" },
    ],
    image: "/path/to/image1.jpg",
    source_code_link: "https://github.com/user/project1",
    netlify_link: "https://project1.netlify.app",
  },
  {
    name: "Project 2",
    description: "This is project 2",
    tags: [
      { name: "TypeScript", color: "text-blue-600" },
      { name: "Tailwind CSS", color: "text-teal-400" },
    ],
    image: "/path/to/image2.jpg",
    source_code_link: "https://github.com/user/project2",
    netlify_link: "https://project2.netlify.app",
  },
  // Add more projects as needed
];

type ProjectCardProps = {
  index: number;
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link?: string;
  netlify_link?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  netlify_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Link href={netlify_link || "#"} target="_blank">
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <Image
              src={image}
              width={1000}
              height={1000}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </Link>
    </motion.div>
  );
};

const Works: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">My work</p>
        <h2 className="sectionHeadText">Projects.</h2>
      </motion.div>

      <div className="w-full flex flex-col">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I developed a comprehensive e-commerce application using Next.js as
          the core framework, integrating it with MongoDB for efficient data
          management. This project showcases my ability to build a fully
          functional online store, complete with essential e-commerce features
          that provide a seamless shopping experience for users.
        </motion.p>
        <p className="mt-3 text-2xl">Tech Stack and Features</p>
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]" >
          Leveraging the power of Next.js, I implemented server-side rendering
          to optimize performance and improve SEO. MongoDB serves as the
          database, storing product information, user data, and order history in
          a scalable and secure manner. I used Redux Toolkit to manage the
          application&#39;s state, ensuring that features like the shopping cart and
          user sessions are handled smoothly and efficiently.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            name={project.name}
            description={project.description}
            tags={project.tags}
            image={project.image}
            source_code_link={project.source_code_link}
            netlify_link={project.netlify_link}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
