import { BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Auth from './pages/Auth'
import Otp from './pages/Otp'
import Dashboard from './pages/Dashboard'
import TransactionLogs from './pages/TransactionLogs'
import TotalCredits from './pages/TotalCrerdits'
import MerchantSignup from './pages/merchant/Signup'
import MerchantLogin from './pages/merchant/Login'
import MerchantDashboard from './pages/merchant/MerchantDashboard'

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/auth' element={<Auth />} />
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