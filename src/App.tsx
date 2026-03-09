import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Auth'
import Navigation from './components/Navigation'
import EventPage from './pages/Event';
import ProtectedRoutes from './components/ProtectedRoutes';
import MainLayout from './components/MainLayout';

function App() {
   

   return (
      <>
         <Routes>
            <Route path="/login/:event_id?" element={<Login />} />
            <Route element={<ProtectedRoutes />}>
               <Route element={<MainLayout />}>
                  <Route path="/event/:event_id?" element={<EventPage />} />
                  <Route path="/" element={<div>Home Page</div>} />
               </Route>
            </Route>
         </Routes>
      </>
   )
}

export default App
