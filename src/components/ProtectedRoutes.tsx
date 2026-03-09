import { Navigate, Outlet } from 'react-router-dom';
import config from '../config/config';
import { useEffect, useState } from 'react';

function ProtectedRoutes() {
    const [isValid, setIsValid] = useState<boolean | null>(null)

    useEffect(()=>{
        const checkSession = async () => {
            await config.get('/auth/is-valid')
            .then(()=>setIsValid(true))
            .catch(()=>setIsValid(false))
        }

        checkSession();
    }, [])

    if (isValid === false) return <Navigate to="/login" replace />

    return <Outlet />
}

export default ProtectedRoutes