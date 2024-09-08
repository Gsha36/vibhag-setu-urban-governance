import IconGrid from "./IconGrid";
import Planner from "./Planner";
import CheckList from "./CheckList";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto py-8 grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <IconGrid />
          <Planner />
        </div>
        <div>
          <CheckList />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;