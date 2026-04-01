import { useEffect, useState, type JSX } from 'react'
import config from '../config/config'

function RoleRoute({adminComponent, userComponent}: {adminComponent: JSX.Element, userComponent: JSX.Element}) {
    const [isAdmin, setIsAdmin] = useState<boolean>(false)

    useEffect(()=>{
        config.get('/auth/is-valid')
            .then((res)=>{
                if(res.data.user.role === 'admin'){
                    setIsAdmin(true)
                }
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])

    return isAdmin ? adminComponent : userComponent;
}

export default RoleRoute