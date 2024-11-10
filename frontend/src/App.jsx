import { BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Otp from './pages/Otp'
import Dashboard from './pages/Dashboard'
import TransactionLogs from './pages/TransactionLogs'
import TotalCredits from './pages/TotalCrerdits'
import MerchantSignup from './pages/merchant/Signup'
import MerchantLogin from './pages/merchant/Login'
import MerchantDashboard from './pages/merchant/MerchantDashboard'
import Blog from './pages/Blog'
import AboutUs from './pages/AboutUs'


export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />}  />
        <Route path='/verify' element={<Otp />} />
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/transaction' element={<TransactionLogs />} />
        <Route path='/credits' element={<TotalCredits />}/>

        {/* merchant routes */}
        <Route path='/merchant/signup' element={<MerchantSignup />} />
        <Route path='/merchant/login' element={<MerchantLogin />} />
        <Route path='/merchant/dashboard' element={<MerchantDashboard />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}