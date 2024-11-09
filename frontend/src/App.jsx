import { BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Auth from './pages/Auth'
import Otp from './pages/Otp'
import Dashboard from './pages/Dashboard'
import TransactionLogs from './pages/TransactionLogs'
import TotalCredits from './pages/TotalCrerdits'

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
      </Routes>
    </BrowserRouter>
    </>
  )
}