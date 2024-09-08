import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import icon1 from "../../assets/1.png";
import icon2 from "../../assets/2.png";
import icon3 from "../../assets/3.png";
import icon4 from "../../assets/4.png";
import icon5 from "../../assets/5.png";
import icon6 from "../../assets/6.png";
import icon7 from "../../assets/7.png";
import icon8 from "../../assets/8.png";

const sectors = [
  { name: "Projects", color: "bg-purple-500", navigate: "/projects", icon: icon1 },
  { name: "Documents", color: "bg-red-500", navigate: "/documents", icon: icon2 },
  { name: "Resources", color: "bg-green-400", navigate: "/resources", icon: icon3 },
  { name: "Complaints", color: "bg-yellow-500", navigate: "/complaints", icon: icon4 },
  { name: "Planning", color: "bg-pink-400", navigate: "/planning", icon: icon5 },
  { name: "Forums", color: "bg-cyan-400", navigate: "/forums", icon: icon6 },
  { name: "Departments", color: "bg-purple-300", navigate: "/departments", icon: icon7 },
  { name: "Schemes", color: "bg-blue-600", navigate: "/schemes", icon: icon8 },
];

const IconGrid: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (path: string | undefined) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-4 mb-10">
      {sectors.map((sector, index) => (
        <div
          key={index}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleClick(sector.navigate)}
        >
          <div className={`w-16 h-16 ${sector.color} rounded-lg flex items-center justify-center`}>
            {/* Image icon from imported assets */}
            <img src={sector.icon} alt={sector.name} className="w-11 h-11" />
          </div>
          <span className="mt-2">{sector.name}</span>
        </div>
      ))}
    </div>
  );
};

export default IconGrid;
