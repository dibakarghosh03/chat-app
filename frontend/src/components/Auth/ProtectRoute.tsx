import React from "react"
import { Navigate, Outlet } from "react-router-dom"


const ProtectRoute = ({children, user}: { children?: React.ReactNode, user: boolean }) => {
    if(!user) return <Navigate to={'/auth'} />
    return children ? children : <Outlet />
}

export default ProtectRoute