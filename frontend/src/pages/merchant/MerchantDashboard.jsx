import { useState } from 'react';
import countryCodeList from 'country-codes-list';
import MerchantNavbar from '../../components/merchant/MerchantNavbar';
import { useNavigate } from 'react-router-dom';
import { QrReader } from 'react-qr-reader';
import axios from "axios";
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

export default function MerchantDashboard() {
    const [countryCode, setCountryCode] = useState("+91");
    const [mobile, setMobile] = useState("");
    const [qrData, setQrData] = useState(); // State to store QR code data
    const [isScanning, setIsScanning] = useState(false); // Toggle scanning mode
    const [transactionAmount, setTransactionAmount] = useState(""); // State for transaction amount
    const [isTransactionVisible, setIsTransactionVisible] = useState(false); // Flag to show transaction input
    const navigate = useNavigate();
    
    const fullMobile = `${countryCode}${mobile}`;
    const customList = countryCodeList.customList('countryCode', '{countryCode} +{countryCallingCode}');

    const handleScan = (data) => {
        if (data && data !== '') {
            // Replace single quotes with double quotes to make it valid JSON
            const validJsonData = data.replace(/'/g, '"');
    
            try {
                // Now parse the corrected data
                const parsedData = JSON.parse(validJsonData);
                setQrData(parsedData); // Store the parsed data
                setIsScanning(false); // Stop scanning
                setIsTransactionVisible(true); // Show transaction input
            } catch (error) {
                console.error("Error parsing QR data:", error);
                alert("Invalid QR code data.");
            }
        }
    };

    const handleError = (error) => {
        console.error("QR Scan Error:", error);
    };

    const handleSubmit = async () => {
        if (!fullMobile || !qrData || !transactionAmount) {
            alert("Please enter a mobile number, scan a QR code, and input the transaction amount.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:3000/api/v1/transaction/payment", {
                qrCode: {
                    company_id: qrData.company_id,
                    bag_id: qrData.bag_id         
                },
                mobile: fullMobile,
                amount: transactionAmount
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + localStorage.getItem("merchantToken")
                }
            });

            // Display success toast notification
            toast.success("Transaction successful!");

            // Reset form state after successful transaction
            setMobile("");
            setQrData(null);
            setTransactionAmount("");
        } catch (error) {
            console.log(error);
            toast.error("Transaction failed. Please try again.");
        }
    };

    return (
        <>
            <div className="relative">
                <div className="absolute w-screen">
                    <MerchantNavbar />
                </div>
                <div className="flex justify-center items-center flex-col h-screen">
                    <div className="text-lg font-semibold text-gray-600 mb-1">Mobile Number</div>
                    <div className="flex space-x-2">
                        <select
                            id="countryCode"
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                            className="w-[18%] border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        >
                            {Object.values(customList).map((code, index) => (
                                <option key={index} value={code.split(" ")[1]}>
                                    {code}
                                </option>
                            ))}
                        </select>
                        <input
                            id="mobile"
                            type="number"
                            placeholder="Enter your mobile number"
                            className="w-3/4 border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                            onChange={(e) => setMobile(e.target.value)}
                        />
                    </div>

                    {/* QR Code Scanner */}
                    <div className="mt-8">
                        {isScanning ? (
                            <div>
                                <QrReader
                                    constraints={{ facingMode: 'environment' }}
                                    scanDelay={300} // Adjust the scan delay to avoid excessive reads
                                    onResult={(result) => {
                                        if (result?.text) {
                                            handleScan(result.text); // Process only if result has data
                                        }
                                    }}
                                    onError={handleError} // Separate error handler for clarity
                                    style={{ width: '100%' }}
                                />
                                <button
                                    onClick={() => setIsScanning(false)}
                                    className="mt-2 w-[10rem] bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-600"
                                >
                                    Stop Scanning
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => { setIsScanning(true); }}
                                className="w-[10rem] bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-600"
                            >
                                Scan QR Code
                            </button>
                        )}
                    </div>

                    {/* Display QR Data if Scanned */}
                    {qrData && (
                        <div className="mt-4 text-center text-green-800 font-semibold">
                            QR Successfully Scanned
                        </div>
                    )}

                    {/* Show Transaction Input if QR Code is Scanned */}
                    {isTransactionVisible && (
                        <div className="mt-6">
                            <div className="text-lg font-semibold text-gray-600 mb-1 ml-10">Transaction Amount</div>
                            <input
                                type="number"
                                placeholder="Enter transaction amount"
                                className="w-3/4 ml-8 border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                value={transactionAmount}
                                onChange={(e) => setTransactionAmount(e.target.value)}
                            />
                        </div>
                    )}

                    {/* Submit Button */}
                    <div className="mt-10">
                        <button
                            onClick={handleSubmit}
                            className="w-[10rem] bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-600"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
