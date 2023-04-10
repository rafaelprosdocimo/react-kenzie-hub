import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/index";
import { Register } from "../pages/register/index";
import { User } from "../pages/user/index";

export const RoutesMain = () => {
    return (<Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/user" element={<User/>}/>
    </Routes>)
    }