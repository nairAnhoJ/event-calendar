import { Navigate, Outlet, useParams } from 'react-router-dom';
import config from '../config/config';
import { useEffect, useState } from 'react';

function ProtectedRoutes() {
    const { event_id } = useParams<{ event_id: string }>();
  const [isVerified, setIsVerified] = useState(false)
  const [loading, setLoading] = useState(true)

    useEffect(()=>{
        config.get('/auth/is-valid')
            .then(()=>setIsVerified(true))
            .catch(()=>setIsVerified(false))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return <p>Loading...</p>
    if (!isVerified) return <Navigate to={`/login/${event_id}`} replace />

    return <Outlet />
}

export default ProtectedRoutes