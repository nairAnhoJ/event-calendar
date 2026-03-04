import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Auth'
import Navigation from './components/Navigation'
import Event from './pages/Event';

function App() {
   const token = localStorage.getItem('token');

   return (
      <>
         {
            token && window.location.pathname !== '/login' && window.location.pathname !== '/login/:event_id' && <Navigation/>
         }
         
         <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/login/:event_id?" element={<Login />} />
            <Route path="/event/:event_id?" element={<Event />} />
         </Routes>
      </>
   )
}

export default App
