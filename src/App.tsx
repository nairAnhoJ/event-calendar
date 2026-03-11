import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Auth'
import EventPage from './pages/Event';
import ProtectedRoutes from './components/ProtectedRoutes';
import MainLayout from './components/MainLayout';
import Maintenance from './pages/Maintenance';

function App() {


   return (
      <>
         <Routes>
            <Route path="/login/:event_id?" element={<Login />} />
            <Route element={<ProtectedRoutes />}>
               <Route element={<MainLayout />}>
                  <Route path="/event/:event_id?" element={<EventPage />} />
                  <Route path="/" element={<Maintenance />} />
               </Route>
            </Route>
         </Routes>
      </>
   )
}

export default App
