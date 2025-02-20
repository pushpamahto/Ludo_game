
import React, { useState } from "react";
import "./LudoWinners.css";

const getWinnersData = () => [
  { id: 1, name: "Amit", prize: "₹1000", icon: "🏅" },
  { id: 2, name: "Priya", prize: "₹500", icon: "🏅" },
  { id: 3, name: "Rohan", prize: "₹700", icon: "🏅" },
  { id: 4, name: "Anjali", prize: "₹1200", icon: "🏅" },
  { id: 5, name: "Rahul", prize: "₹800", icon: "🏅" },
  { id: 6, name: "Neha", prize: "₹600", icon: "🏅" },
];

const LudoWinners = () => {
  const [winners] = useState(getWinnersData());
  const [loading] = useState(false);
  const [error] = useState(null);

  return (
    <div className=" flex items-center justify-center">
  <div className="ludo-winners-card">
    <h2 className="text-3xl font-bold text-center mb-6 text-[#2c3e50]">
      🏆 Winners
    </h2>
    {loading && <p className="text-center text-gray-700">Loading...</p>}
    {error && <p className="text-center text-red-500">{error}</p>}
    {!loading && !error && (
      <div className="relative overflow-hidden h-64">
        <div
          className="absolute inset-0 animate-scroll"
          style={{ animation: "scroll 15s linear infinite" }}
        >
          {winners.map((winner) => (
            <div
              key={winner.id}
              className="winner-item flex items-center justify-between bg-white rounded-lg mb-2 p-4 shadow-md hover:bg-[#e6f0ff] transition duration-300"
            >
              <span className="text-xl">{winner.icon}</span>
              <span className="text-lg font-semibold text-[#2c3e50]">
                {winner.name}
              </span>
              <span className="text-lg font-semibold text-green-600">
                {winner.prize}
              </span>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>

  {/* Custom Scroll Animation */}
  <style jsx>{`
    @keyframes scroll {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-100%);
      }
    }
    .animate-scroll {
      animation: scroll 15s linear infinite;
    }
  `}</style>
</div>



  );
};

export default LudoWinners;
