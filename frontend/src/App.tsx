import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./Components/About";
import Announcements from "./Components/Announcements";
import CalendarSection from "./Components/Calendar";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Sectors from "./Components/Sectors";
import Login from "./Pages/Login"; // Import your Login component
import Dashboard from './Pages/Dashboard/Dashboard'; // Import Dashboard component
import Project from './Pages/Project';
import InteractiveMap from './Components/InteractiveMap';
import ProjectDetails from './Pages/ProjectDetails';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            {/* Home Route */}
            <Route
              path="/"
              element={
                <div>
                  {/* Full-width image with Announcements section on top */}
                  <div className="relative w-full">
                    <img
                      src="src/assets/Emblem.png"
                      alt="Government Building"
                      className="w-full h-full object-cover"
                    />
                    {/* Announcements section positioned on top of the image */}
                    <div className="absolute inset-0 flex ml-24 mt-12 shadow-lg">
                      <div className="bg-white p-6 rounded-lg w-2/5 h-5/6 border">
                        <Announcements />
                      </div>
                    </div>
                  </div>

                  {/* About Us section and other content */}
                  <div className="container mx-auto px-4 py-8">
                    <div className="space-y-8">
                      <About />
                      <CalendarSection />
                      <Sectors />
                      <div className="min-h-screen bg-gray-100 p-8">
                        <h1 className="text-2xl font-bold text-center mb-6">Location-wise Updates</h1>
                        <div className="max-w-4xl mx-auto">
                          <InteractiveMap />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />

            {/* Login Route */}
            <Route path="/login" element={<Login />} />
            
            {/* Dashboard Route */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Project/>}/>
            <Route path="/projectdetail" element={<ProjectDetails projectId={''} title={''} address={''} allottedBudget={''} initiator={''} department={''} progress={0} budgetUsage={0} supervisor={undefined}/>}/>
          </Routes>
          
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
