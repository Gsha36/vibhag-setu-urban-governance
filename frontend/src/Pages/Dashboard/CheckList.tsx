import { useState } from "react";

const CheckList = () => {
  const [activeTab, setActiveTab] = useState("checklist"); // State to control the active tab

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      {/* Tabs for switching between Checklist and Updates */}
      <div className="flex justify-between">
        <button
          onClick={() => setActiveTab("checklist")}
          className={`py-2 px-4 font-semibold ${
            activeTab === "checklist" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"
          }`}
        >
          Check List
        </button>
        <button
          onClick={() => setActiveTab("updates")}
          className={`py-2 px-4 font-semibold ${
            activeTab === "updates" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"
          }`}
        >
          Updates
        </button>
      </div>

      {/* Conditionally render content based on the active tab */}
      {activeTab === "checklist" && (
        <table className="w-full text-left mt-4">
          <tbody>
            {Array(6)
              .fill("")
              .map((_, idx) => (
                <tr key={idx}>
                  <td className="border-b py-2">
                    <input type="checkbox" className="mr-2" /> Item {idx + 1}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}

      {activeTab === "updates" && (
        <table className="w-full text-left mt-4">
          <tbody>
            {Array(6)
              .fill("")
              .map((_, idx) => (
                <tr key={idx}>
                  <td className="border-b py-2">Update {idx + 1}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CheckList;