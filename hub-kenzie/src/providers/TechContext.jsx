import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import { useNavigate } from "react-router-dom";

export const TechContext = createContext();

export const TechProvider = ({ children }) => {

    const [tech, setTech] = useState([])

    
    const [modalBool, setModalBool] = useState(false)

    const handleCLickOpen = () => {
        setModalBool(true)
        console.log(modalBool)
    }
    const handleCLickClose = () => {
        setModalBool(false)
        console.log(modalBool)
    }
    useEffect(() => {
        if (modalBool === true) {
            
        } else {
            
        }
    },[modalBool])

    return (
        <TechContext.Provider value={{ modalBool, setModalBool, handleCLickOpen, tech, setTech, handleCLickClose}}>
            {children}
        </TechContext.Provider>
    )
}