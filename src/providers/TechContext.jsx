import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import { useNavigate } from "react-router-dom";

export const TechContext = createContext();

export const TechProvider = ({ children }) => {

    const [tech, setTech] = useState([])

    
    const [modalBool, setModalBool] = useState(false)

    const getTech = async () => { 
        const token = localStorage.getItem('@TOKEN')
        
        await api.get('/profile', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => setTech(response.data.techs))
    }

    const handleCLickOpen = () => {
        setModalBool(true)
        console.log(modalBool)
    }
    const handleCLickClose = () => {
        setModalBool(false)
        console.log(modalBool)
    }
    

    const handleCreate = async (data) => {
        console.log(data)
        const token = localStorage.getItem('@TOKEN')
        try{
            
            await    api.post(
                '/users/techs'
                , data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => console.log(response.data))

            getTech()
            handleCLickClose()
        }catch(err){
            console.log(err)
        }
    }

    const deleteTech = async (id) => {
        const token = localStorage.getItem('@TOKEN')
        try{
            await api.delete(`/users/techs/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => console.log(response.data))
            getTech()
        }catch(err){
            console.log(err)
        }
    }

    return (
        <TechContext.Provider value={{deleteTech,getTech, modalBool, setModalBool, handleCLickOpen, tech, setTech, handleCLickClose, handleCreate}}>
            {children}
        </TechContext.Provider>
    )
}