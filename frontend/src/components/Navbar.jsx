

export default function Navbar() {
    return(
        <>
            <div className="flex justify-between items-center p-4">
                <div className="font-semibold text-[2rem]">
                    EcoEarn
                </div>
                <div className="flex justify-between gap-20 font-medium">
                    <div>Home</div>
                    <div>Blogs</div>
                    <div>About us</div>
                </div>
                <div>
                    <button className="border-2 border-white rounded-lg px-10 py-2 bg-green-500 text-white font-semibold">Register</button>
                </div>
            </div>
        </>
    )
}