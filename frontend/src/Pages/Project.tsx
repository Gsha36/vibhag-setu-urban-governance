import { useNavigate } from 'react-router-dom';
import React from 'react';

// Define the type for a project
interface Project {
  name: string;
  budget: string;
  progress: number; 
  navigate: string;
}

interface SectionProps {
  title: string;
  projects: Project[];
}

const ProjectSection: React.FC<SectionProps> = ({ title, projects }) => {
  const navigate = useNavigate(); // Use React Router's navigate hook

  return (
    <div className="w-full md:w-1/3 p-4">
      <div className="bg-gray-100 rounded-lg shadow-lg p-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">{title}</h3>
        </div>

        {/* Search bar */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-3 border rounded-lg"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute right-3 top-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 12.293a8 8 0 111.414-1.414l5 5a1 1 0 01-1.414 1.414l-5-5zM8 14a6 6 0 100-12 6 6 0 000 12z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Scrollable project list */}
        <div className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-4 mb-4 rounded-lg shadow cursor-pointer hover:bg-gray-100"
              onClick={() => navigate(project.navigate)} // Use navigate here
            >
              <h4 className="text-md font-semibold mb-2">{project.name}</h4>
              <p className="text-sm mb-2">Budget: {project.budget}</p>
              
              {/* Progress bar */}
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-2 text-xs flex rounded bg-gray-300">
                  <div
                    style={{ width: `${project.progress}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Project: React.FC = () => {
  // Define projects for each section
  const personalProjects: Project[] = [
    { name: 'Road Development, Bagru', budget: '10 Cr.', progress: 40, navigate: '/projectdetail' },
    { name: 'Road Development, Bagru', budget: '20 Cr.', progress: 80, navigate: '/projectdetail' },
  ];

  const departmentalProjects: Project[] = [
    { name: 'Road Development, Bagru', budget: '15 Cr.', progress: 70, navigate: '/projectdetail' },
    { name: 'Road Development, Bagru', budget: '10 Cr.', progress: 40, navigate: '/projectdetail' },
    { name: 'Road Development, Bagru', budget: '8 Cr.', progress: 20, navigate: '/projectdetail' },
  ];

  const interDepartmentalProjects: Project[] = [
    { name: 'Road Development, Bagru', budget: '80 Lakhs', progress: 50, navigate: '/projectdetail' },
    { name: 'Road Development, Bagru', budget: '90 Lakhs', progress: 90, navigate: '/projectdetail' },
    { name: 'Road Development, Bagru', budget: '10 Cr.', progress: 60, navigate: '/projectdetail' },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-2 ml-4">PROJECTS</h2>
      <div className="flex justify-end mb-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4">
          Add Project
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between">
        <ProjectSection title="Personal" projects={personalProjects} />
        <ProjectSection title="Departmental" projects={departmentalProjects} />
        <ProjectSection title="Inter-Departmental" projects={interDepartmentalProjects} />
      </div>
    </div>
  );
};

export default Project;
