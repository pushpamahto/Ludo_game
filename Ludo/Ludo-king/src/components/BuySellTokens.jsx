
import React, { useState } from "react";
import "./BuySellTokens.css";

 const getTokensData = () => [
  { id: 1, name: "Bitcoin", buyPrice: "₹45,00,000", sellPrice: "₹44,80,000" },
  { id: 2, name: "Ethereum", buyPrice: "₹3,10,000", sellPrice: "₹3,05,000" },
  { id: 3, name: "Solana", buyPrice: "₹12,500", sellPrice: "₹12,300" },
  { id: 4, name: "Ripple", buyPrice: "₹45", sellPrice: "₹44" },   { id: 5, name: "Cardano", buyPrice: "₹120", sellPrice: "₹115" },
   { id: 6, name: "Dogecoin", buyPrice: "₹7.50", sellPrice: "₹7.40" },
 ];

 const BuySellTokens = () => {
   const [tokens] = useState(getTokensData());
   const [loading] = useState(false);
  const [error] = useState(null);

  return (

<div className=" flex items-center justify-center">
  <div className="buy-sell-card">
    <h2 className="text-3xl font-bold text-center mb-6 text-[#2c3e50]">
      📈 Buy & Sell Tokens
    </h2>
    {loading && <p className="text-center text-gray-700">Loading...</p>}
    {error && <p className="text-center text-red-500">{error}</p>}
    {!loading && !error && (
      <div className="relative overflow-hidden h-64 ">
        <table className="table-auto w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-md">
          <thead>
            <tr className="text-lg bg-[#d0e3ff] text-[#2c3e50]">
              <th className="p-4">Token</th>
              <th className="p-4 text-center">Buy Price</th>
              <th className="p-4 text-center">Sell Price</th>
            </tr>
          </thead>
          <tbody
            className="animate-scroll text-gray-800"
            style={{ animation: "scroll 15s linear infinite " }}
          >
            {tokens.map((token) => (
              <tr key={token.id} className="hover:bg-[#e6f0ff]">
                <td className="p-4">{token.name}</td>
                <td className="p-4 text-center">{token.buyPrice}</td>
                <td className="p-4 text-center">{token.sellPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
    .animate-scroll tbody {
      animation: scroll 15s linear infinite;
    }
  `}</style>
</div>

);
 };

 export default BuySellTokens;