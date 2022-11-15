import { Outlet, Navigate } from "react-router-dom"
import NavBar from "../Components/NavBar"

const Authentication = () => {
    if (localStorage.getItem("JWT")) {
        return (
            <div>
                <NavBar/>
                <Outlet/>
            </div>
        )
    } else {
        return <Navigate replace to="/login"/>
    }
}

export default Authentication