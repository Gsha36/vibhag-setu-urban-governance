import { ChevronDown } from "lucide-react";

const sectors = [
  { name: 'Nagar Nigam', img: 'src/assets/nagar-nigam.png' },
  { name: 'PWD', img: 'src/assets/pwd.png' },
  { name: 'Jal Nigam', img: 'src/assets/jal-nigam.png' },
  { name: 'Transport Department', img: 'src/assets/transport.png' },
  { name: 'Electricity Distribution Companies', img: 'src/assets/electricity.png' },
  { name: 'Urban Planning and Development', img: 'src/assets/urban-planning.png' },
  { name: 'Police Department', img: 'src/assets/police.png' },
  { name: 'Information Technology Department', img: 'src/assets/it-department.png' },
];

const Sectors = () => {
  return (
    <section className="mt-12">
      <h2 className="text-2xl text-center font-bold mb-6">Sectors</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {sectors.map((sector, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-lg">
            <img src={sector.img} alt={sector.name} className="w-12 h-12 mb-2" />
            <span className="text-sm">{sector.name}</span>
          </div>
        ))}
      </div>
      <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center mx-auto">
        View All Sectors
        <ChevronDown className="ml-2 h-4 w-4" />
      </button>
    </section>
  );
};

export default Sectors;