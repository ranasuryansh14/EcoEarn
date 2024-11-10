import React, { useState } from "react";
import axios from "axios"; // Ensure axios is installed

const RedeemCodeGenerator = () => {
  const [ecoPoints, setEcoPoints] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [redeemCode, setRedeemCode] = useState("");
  const [couponCode, setCouponCode] = useState("")
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // List of companies for the dropdown (example data)
  const companies = [
    { name: "Eco Shop", value: "ecoshop" },
    { name: "Green Earth", value: "greenearth" },
    { name: "Eco Lifestyle", value: "ecolifestyle" },
    { name: "Big Bazar", value: "bigbazar" },
    { name: "Parada", value: "parada" },
    { name: "Pantaloons", value: "pantaloons" },
    { name: "Balenciaga", value: "balenciaga" },
    { name: "Sabyasachi", value: "sabyasachi" },
  ];

  const handleGenerateCode = async () => {
    if (!ecoPoints || !selectedCompany) {
      alert("Please enter Eco Points and select a company.");
      return;
    }

    // Set loading state to true
    setLoading(true);
    setError(""); // Clear any previous errors

    try {
      const TotalCredits = parseInt(localStorage.getItem("credits"), 10); // Ensure it's a number
      const points = parseInt(ecoPoints, 10); // Convert the user input into a number

      // Compare eco points with available credits
      if (points > TotalCredits) {
        alert("You don't have enough credits to redeem this code");
        return;
      }
      const response = await axios.post("http://localhost:3000/api/v1/coupon/generate", {
        greenCredits:ecoPoints,
        companyName: selectedCompany,
      });
      console.log(response.data)
      setCouponCode(response.data.couponCode)
      const leftCredits = TotalCredits - ecoPoints
      localStorage.setItem("credits", leftCredits)
    } catch (error) {
      console.error("Error generating redeem code:", error);
      setError("An error occurred. Please try again.");
    } finally {
      // Reset the loading state
      setLoading(false);
    }

    // Reset inputs after generating the code
    setEcoPoints("");
    setSelectedCompany("");
  };

  return (
    <div className="border-2 max-w-md mx-auto p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Redeem</h2>

      <label className="block mb-2">Enter Eco Points</label>
      <input
        type="number"
        value={ecoPoints}
        onChange={(e) => setEcoPoints(e.target.value)}
        placeholder="Enter points"
        className="w-full p-2 mb-4 rounded border-2"
      />

      <label className="block mb-2">Select Company</label>
      <select
        value={selectedCompany}
        onChange={(e) => setSelectedCompany(e.target.value)}
        className="w-full p-2 mb-4 rounded border-2"
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
        disabled={loading} // Disable the button while loading
      >
        {loading ? "Generating..." : "Generate Code"}
      </button>

      {error && (
        <div className="mt-4 p-4 border-2 rounded bg-red-100 text-red-800">
          {error}
        </div>
      )}

      {couponCode && (
        <div className="mt-4 p-4 border-2 rounded bg-green-100 text-green-800">
          <p className="font-semibold">Your Redeem Code:</p>
          <p className="text-xl">{couponCode}</p>
        </div>
      )}
    </div>
  );
};

export default RedeemCodeGenerator;
