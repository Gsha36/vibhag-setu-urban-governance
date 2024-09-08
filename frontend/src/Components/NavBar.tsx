import { useState } from "react";
import { Search, X } from "lucide-react";
import { Link } from "react-router-dom"; // Add this line

const NavBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <img src="src/assets/logofinal.png" alt="Logo" className="w-14 ml-5 inline-block" />
        </div>
        <ul className="flex items-center space-x-10">
          <li><a href="/" className="hover:text-gray-400">Home</a></li>
          <li><a href="/" className="hover:text-gray-400">Discussion</a></li>
          <li><Link to="/login" className="hover:text-gray-400">Login/Register</Link></li>
          
          {/* Search Input and Icon */}
          <li className="flex items-center">
            {/* Transition for the search input */}
            <div
              className={`flex items-center transition-all duration-300 ease-in-out ${
                isSearchOpen ? 'w-40' : 'w-0'
              } overflow-hidden`}
            >
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-2 py-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-full focus:outline-none"
              />
            </div>

            {/* Search Icon Button */}
            <button onClick={toggleSearch} className="ml-2 text-gray-500">
              {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;