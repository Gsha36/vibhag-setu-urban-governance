import React, { useState } from 'react';

interface Supervisor {
  name: string;
  department: string;
  designation: string;
  contact: string;
  email: string;
}

interface ProjectDetailsProps {
  projectId: string;
  title: string;
  address: string;
  allottedBudget: string;
  initiator: string;
  department: string;
  progress: number; // progress percentage
  budgetUsage: number; // budget usage percentage
  supervisor?: Supervisor;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  projectId,
  title,
  address,
  allottedBudget,
  initiator,
  department,
  progress,
  budgetUsage,
  supervisor,
}) => {
  const [currentProgress, setCurrentProgress] = useState(progress);
  const [currentBudget, setCurrentBudget] = useState(budgetUsage);

  const handleUpdateProgress = () => {
    // Logic for updating progress (e.g., fetching updated data)
    const updatedProgress = Math.min(currentProgress + 10, 100); // Example logic
    setCurrentProgress(updatedProgress);
  };

  const handleUpdateBudget = () => {
    // Logic for updating budget (e.g., fetching updated data)
    const updatedBudget = Math.min(currentBudget + 5, 100); // Example logic
    setCurrentBudget(updatedBudget);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">PROJECT DETAILS</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Initiator Section */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-lg mb-4">Initiator</h3>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center">
            <img
              src="https://via.placeholder.com/80"
              alt="Initiator"
              className="w-20 h-20 rounded-full mr-4"
            />
            <div>
              <p>Project ID: {projectId}</p>
              <p>Project Title: {title}</p>
              <p>Address: {address}</p>
              <p>Allotted Budget: {allottedBudget}</p>
              <p>Project Initiator: {initiator}</p>
              <p>Department: {department}</p>
            </div>
          </div>
        </div>

        {/* Supervisor Section */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-lg mb-4">Current Supervisor</h3>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-center">
            <img
              src="https://via.placeholder.com/80"
              alt="Supervisor"
              className="w-20 h-20 rounded-full"
            />
            <div>
              <p>Name: {supervisor?.name}</p>
              <p>Department: {supervisor?.department}</p>
              <p>Designation: {supervisor?.designation}</p>
              <p>Contact: {supervisor?.contact}</p>
              <p>Email: {supervisor?.email}</p>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Change</button>
          </div>
        </div>
      </div>

      {/* Progress and Budget Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Progress Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Progress</h3>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center">
            {/* Circular progress */}
            <div className="w-1/3 flex justify-center">
              <div className="relative w-24 h-24">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 36 36">
                  <path
                    className="text-gray-300"
                    strokeDasharray="100, 100"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    strokeWidth="3.8"
                    fill="none"
                    stroke="currentColor"
                  />
                  <path
                    className="text-blue-500"
                    strokeDasharray={`${currentProgress}, 100`}
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    strokeWidth="3.8"
                    fill="none"
                    strokeLinecap="round"
                    stroke="currentColor"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xl font-semibold">
                  {currentProgress}%
                </span>
              </div>
            </div>
            <div className="w-2/3 pl-4">
              <p>Project ID: {projectId}</p>
              <p>Project Title: {title}</p>
              <p>Address: {address}</p>
              <p>Allotted Budget: {allottedBudget}</p>
              <p>Project Initiator: {initiator}</p>
              <p>Department: {department}</p>
              <button
                onClick={handleUpdateProgress}
                className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg"
              >
                Update Progress
              </button>
            </div>
          </div>
        </div>

        {/* Budget Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Budget</h3>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center">
            {/* Circular budget */}
            <div className="w-1/3 flex justify-center">
              <div className="relative w-24 h-24">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 36 36">
                  <path
                    className="text-gray-300"
                    strokeDasharray="100, 100"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    strokeWidth="3.8"
                    fill="none"
                    stroke="currentColor"
                  />
                  <path
                    className="text-green-500"
                    strokeDasharray={`${currentBudget}, 100`}
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    strokeWidth="3.8"
                    fill="none"
                    strokeLinecap="round"
                    stroke="currentColor"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xl font-semibold">
                  {currentBudget}%
                </span>
              </div>
            </div>
            <div className="w-2/3 pl-4">
              <p>Project ID: {projectId}</p>
              <p>Project Title: {title}</p>
              <p>Address: {address}</p>
              <p>Allotted Budget: {allottedBudget}</p>
              <p>Project Initiator: {initiator}</p>
              <p>Department: {department}</p>
              <button
                onClick={handleUpdateBudget}
                className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg"
              >
                Update Budget
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Logs and Budget Logs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <div>
          <h3 className="font-semibold text-lg mb-4">Progress Logs</h3>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md h-32"></div>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Budget Logs</h3>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md h-32"></div>
        </div>
      </div>

      {/* Progress Photos */}
      <div className="mt-8">
        <h3 className="font-semibold text-lg mb-4">Progress Photos</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="bg-gray-100 h-32 rounded-lg shadow-md"></div>
          <div className="bg-gray-100 h-32 rounded-lg shadow-md"></div>
          <div className="bg-gray-100 h-32 rounded-lg shadow-md"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
