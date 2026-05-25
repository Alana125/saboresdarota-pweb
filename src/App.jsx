import { BrowserRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'
import BrandNavbar from './components/BrandNavbar'
import Sidebar from './components/Sidebar'
import Splash from './pages/Splash'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Restaurant from './pages/Restaurant'
import Favorites from './pages/Favorites'
import Profile from './pages/Profile'
import MerchantDashboard from './pages/MerchantDashboard'
import MerchantOrders from './pages/MerchantOrders'
import MerchantReservations from './pages/MerchantReservations'
import MerchantReviews from './pages/MerchantReviews'
import MerchantReports from './pages/MerchantReports'
import MerchantSettings from './pages/MerchantSettings'
import ForgotPassword from './pages/ForgotPassword'
import SpecOverview from './pages/SpecOverview'
import SpecRequirements from './pages/SpecRequirements'
import SpecTasks from './pages/SpecTasks'
import SpecFunctionality from './pages/SpecFunctionality'
import NotFound from './pages/NotFound'

const AppLayout = ({ children }) => {
  const location = useLocation()
  const hideNav = location.pathname === '/'
  return (
    <>
      {!hideNav && <BrandNavbar />}
      {children}
    </>
  )
}

const MerchantLayout = styled.div`
  display: flex;
  min-height: calc(100vh - 80px);
`

function MerchantArea() {
  return (
    <MerchantLayout>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
    </MerchantLayout>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/restaurant/:id" element={<Restaurant />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/specs" element={<SpecOverview />} />
            <Route path="/specs/requirements" element={<SpecRequirements />} />
            <Route path="/specs/tasks" element={<SpecTasks />} />
            <Route path="/specs/functionality" element={<SpecFunctionality />} />
            <Route path="/merchant" element={<MerchantArea />}>
              <Route index element={<MerchantDashboard />} />
              <Route path="dashboard" element={<MerchantDashboard />} />
              <Route path="orders" element={<MerchantOrders />} />
              <Route path="reservations" element={<MerchantReservations />} />
              <Route path="reviews" element={<MerchantReviews />} />
              <Route path="reports" element={<MerchantReports />} />
              <Route path="settings" element={<MerchantSettings />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
