import Footer from "../components/Footer"
import { DragCloseDrawerExample } from "../components/DragCloseDrawer"
import RedeemCodeGenerator from "../components/RedeemCodeGenerator"
import NavbarDashboard from "../components/NavbarDashboard"


export default function TotalCredits() {
    return (
        <>
            <div>
            <NavbarDashboard/>
            <div className="mt-4 ml-4 text-2xl font-bold">Redeem Eco-Points</div>
            <hr></hr>
            <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
                {/* Profile Header */}
                <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between">
                    {/* Profile Photo */}
                    <div className="relative group">
                        {/* Display the profile photo or a placeholder */}
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-green-500">
                            <img
                                src={"836.jpg"}
                                alt="User Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>   
                    </div>
                    
                    {/* User Info */}
                    <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                        <h2 className="text-2xl font-bold text-gray-800">{localStorage.getItem("name") ? localStorage.getItem("name") : "N/A"}</h2>
                        <p className="text-gray-600 mt-1">Phone: {localStorage.getItem("mobile") ? localStorage.getItem("mobile") : "**********"}</p>
                        <p className="text-gray-600">Eco Points: <span className="text-green-600 font-semibold">{localStorage.getItem("credits") ? localStorage.getItem("credits") : "N/A"}</span></p>
                    </div>
                    <div className="mt-6 ml-6"><DragCloseDrawerExample/>  </div>
                </div>
            </div>
            {/* {Generate Redeem Codes} */}
            <div className="mt-6 ">
            <RedeemCodeGenerator/>
            </div>         
            <Footer/>
            </div>
        </>
    )
}