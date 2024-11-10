import React, { useState } from "react";
import { DragCloseDrawerExample } from "./DragCloseDrawer";

const RedeemCodeGenerator = () => {
  const [ecoPoints, setEcoPoints] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [redeemCode, setRedeemCode] = useState("");

  // List of companies for the dropdown (example data)
  const companies = [
    { name: "Eco Shop", value: "eco_shop" },
    { name: "Green Earth", value: "green_earth" },
    { name: "Eco Lifestyle", value: "eco_lifestyle" },
    { name: "Big Bazar", value: "big_bazar" },
    { name: "Parada", value: "parada" },
    { name: "Pantaloons", value: "pantaloons" },
    { name: "Balenciaga", value: "balenciaga" },
    { name: "Sabyasachi", value: "sabyasachi" },
  ];
  

  const handleGenerateCode = () => {
    if (!ecoPoints || !selectedCompany) {
      alert("Please enter Eco Points and select a company.");
      return;
    }

    // Simulate code generation (replace with real backend call if needed)
    const generatedCode = `ECO-${selectedCompany}-${Date.now().toString().slice(-5)}`;
    setRedeemCode(generatedCode);

    // Reset inputs after generating the code
    setEcoPoints("");
    setSelectedCompany("");
  };

  return (
    <div className=" border-2 max-w-md mx-auto p-6  rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Redeem</h2>

      <label className="block mb-2">Enter Eco Points</label>
      <input
        type="number"
        value={ecoPoints}
        onChange={(e) => setEcoPoints(e.target.value)}
        placeholder="Enter points"
        className="w-full p-2 mb-4 rounded border-2 "
      />

      <label className="block mb-2">Select Company</label>
      <select
        value={selectedCompany}
        onChange={(e) => setSelectedCompany(e.target.value)}
        className="w-full p-2 mb-4 rounded border-2 "
      >
        <option value="">Select a company</option>
        {companies.map((company) => (
          <option key={company.value} value={company.value}>
            {company.name}
          </option>
        ))}
      </select>

      <button
        onClick={handleGenerateCode}
        className="w-full p-2 bg-green-500 rounded hover:bg-green-600 transition-colors"
      >
        Generate Code
      </button>
      {redeemCode && (
        <div className="mt-4 p-4 border-2 rounded">
          <p className="font-semibold">Your Redeem Code:</p>
          <p className="text-xl">{redeemCode}</p>
        </div>
      )}
    </div>
  );
};

export default RedeemCodeGenerator;
