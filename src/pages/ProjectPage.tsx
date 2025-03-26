import React, { useEffect, useState } from "react";
import SingleProject from "../SingleProject/Singleproject";
import AIRDATA from "../Data/aritable";
import { ScaleLoader } from "react-spinners";

// Define types for projects and categories
interface Project {
  id: string;
  title: string;
  stack: string;
}

const ProjectsPage: React.FC = () => {
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProjects = () => {
    const projects: Project[] = AIRDATA.projects; // Ensure AIRDATA.projects is typed correctly
    setAllProjects(projects);
    setCategories(["all", ...Array.from(new Set(projects.map((project) => project.stack)))]);
    setProjects(projects);
    setLoading(false);
  };
  
  useEffect(() => {
    fetchProjects();
  }, []);

  // Update Filter Buttons
  const updateFilterBtns = (e: React.MouseEvent<HTMLButtonElement>) => {
    document.querySelectorAll(".category-btn").forEach((btn) => {
      btn.classList.add("unactive");
    });
    e.currentTarget.classList.remove("unactive");
    e.currentTarget.classList.add("active");
  };

  // Filter Projects Function
  const filterProjects = (stack: string, e: React.MouseEvent<HTMLButtonElement>) => {
    updateFilterBtns(e);
    if (stack === "all") {
      setProjects(allProjects);
    } else {
      const newProjects = allProjects.filter((project) => project.stack === stack);
      setProjects(newProjects);
    }
  };

  return (
    <>
      {/* <Head
        title="Durgesh Chaudhary - Full Stack Developer | Projects"
        description="This is a collection of some of my favorite projects. Built with a wide variety of tech including React.js, Next.js, TypeScript, Node.js, MongoDB, Git & GitHub, MERN stack, Redux, HTML, CSS, and more."
        image="/covers/projects.png"
      /> */}
      <section className="page">
        {/* Navbar */}
        {/* <NavForPages /> */}

        <div className="page-center projects-page">
          {/* Title */}
          <div className="section-title page-title">
            <h2>
              my <span>projects</span>
            </h2>
            <div className="underline"></div>
            <p>
              Since I've been creating projects for a while now, there are a lot
              of them. I decided to put some of my favourite ones here.
              <br />
              If you are interested in seeing all my projects then please
              consider following me on{" "}
              <a href="https://github.com/yodkwtf" title="My GitHub Profile">
                github
              </a>
              .
            </p>
          </div>

          {/* Projects Section */}
          <div className="section-center projects-page-center">
            {loading ? (
              <ScaleLoader />
            ) : (
              <>
                <Categories categories={categories} filterProjects={filterProjects} />
                <Projects projects={projects} />
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

// Category Buttons Component
interface CategoriesProps {
  categories: string[];
  filterProjects: (stack: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Categories: React.FC<CategoriesProps> = ({ categories, filterProjects }) => {
  return (
    <div className="category-btn-container">
      {categories.map((category, i) => (
        <button
          className="category-btn btn"
          data-category={category}
          key={i}
          onClick={(e) => filterProjects(category, e)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

// Projects Component
interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    // Sort by name
    const sortedProjects = [...projects].sort((a, b) => a.title.localeCompare(b.title));
  
    return (
      <div className="projects-container">
        {sortedProjects.map((project) => (
          <SingleProject {...project} key={project.id} />
        ))}
      </div>
    );
  };
  

export default ProjectsPage;
