import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // use for day grid view

const Planner = () => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4">Planner</h2>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" 
      height={300}
      contentHeight={100}/>
    </div>
  );
};

export default Planner;