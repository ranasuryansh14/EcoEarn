import { FaCircleUser } from "react-icons/fa6";

export default function NavbarDashboard() {
    return(
        <>
            <div className="flex justify-between items-center p-4">
                <div className="font-semibold text-[2rem] text-green-700">
                    EcoEarn
                </div>
                <div className="flex justify-between gap-20 font-medium">
                    <div className="px-5 py-2 rounded-3xl hover:bg-green-700 hover:text-white cursor-pointer">Home</div>
                    <div className="px-5 py-2 rounded-3xl hover:bg-green-700 hover:text-white cursor-pointer">Blogs</div>
                    <div className="px-5 py-2 rounded-3xl hover:bg-green-700 hover:text-white cursor-pointer">About us</div>
                </div>
                <div className="mr-5">
                    <FaCircleUser className="size-8 text-green-700" />
                </div>
            </div>
        </>
    )
}