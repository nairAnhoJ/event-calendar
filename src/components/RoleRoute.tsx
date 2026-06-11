import { useEffect, useState, type JSX } from 'react'
import config from '../config/config'

function RoleRoute({adminComponent, userComponent}: {adminComponent: JSX.Element, userComponent: JSX.Element}) {
    const [isAdmin, setIsAdmin] = useState<boolean>(false)

    useEffect(()=>{
        config.get('/event-calendar/roles')
            .then((res)=>{
                if(res.data.role && res.data.role === 'admin'){
                    setIsAdmin(true)
                }
            })
    }, [])

    return isAdmin ? adminComponent : userComponent;
}

export default RoleRoute