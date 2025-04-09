import React from "react";
import { NavForPages } from "../Components/Navbar/NavbarforPage";

const projectsData = [
  {
    id: 1,
    title: "Foodie Hub",
    description:
      "Your ultimate foodie destination, where every bite is an adventure in flavor.",
    image: "/images/project1.jpg",
    link: "https://foodies-hub-teal.vercel.app/",
    category: "Food & Beverage", // Updated category to match the theme
    isFeatured: false,
  },
  {
    id: 2,
    title: "GoldenGate Estates",
    description:
      "Helping you find your perfect home with ease – buy, rent, or invest.",
    image: "/images/project2.jpg",
    link: "https://github.com/sheikhabdullahahmed/Agency-website",
    category: "Real Estate", // Set category as 'Real Estate'
    isFeatured: false,
  },

  {
    id: 3,
    title: "Docs App",
    description:
      "Create, edit, and organize your documents effortlessly,  anywhere.",
    image: "/images/project1.jpg",
    link: "https://docs-app-tan.vercel.app",
    category: "Productivity", // Category set to 'Productivity' to match the app's function
    isFeatured: false,
  },
  {
    id: 4,
    title: "Itecvo",
    description:
      "Boosting your brand with expert digital marketing, SEO, and social media strategies.",
    image: "/images/project2.jpg",
    link: "https://itechvo.vercel.app", // Added https:// for correct URL format
    category: "Marketing Agency", // Set category to 'Marketing Agency'
    isFeatured: false,
  },
  {
    id: 5,
    title: "Furniture Shop",
    description:
      "Boosting your brand with expert digital marketing, SEO, and social media strategies.",
    image: "/images/project2.jpg",
    link: "https://github.com/sheikhabdullahahmed/E-commerce-with-Typscript",
    category: "Furniture E-Commerce", // Set category to 'Furniture E-Commerce'
    isFeatured: false,
  },
];



const Projects: React.FC = () => {
  return (
    <div>
      <NavForPages/>
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="section-titlee">My Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${project.isFeatured ? "featured" : ""}`}
              data-index={index}
            >
              <div className="image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
                {project.isFeatured && (
                  <span className="featured-badge">Featured</span>
                )}
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-btn"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Projects;
