import NavbarDashboard from "../components/NavbarDashboard"
import Card from "../components/Card"
import { useNavigate } from "react-router-dom"

export default function Dashboard() {
    const navigate = useNavigate()
    return (
        <>
            <div>
                <NavbarDashboard />
                <div className="flex justify-center items-center gap-20">
                    <div onClick={() => navigate("/transaction")}>
                        <Card title={"Transaction logs"} />
                    </div>
                    <div onClick={() => navigate("/credits")}>
                        <Card title={"Total green credits"} />
                    </div>
                </div>
            </div>
        </>
    )
}