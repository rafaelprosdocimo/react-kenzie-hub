import { createContext, useState } from "react";
import { api } from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState([]);

    const loggedIn = () => {
        const userID = localStorage.getItem('@USERID')
        const token = localStorage.getItem('@TOKEN')
        console.log(userID)
        const loadUser = async () => {
            const response = await api.get(`/users/${userID}`)
            setUser(response.data)
        }
        loadUser()
    }

    
    
    const navigate = useNavigate();

    const handleLogin = async (data) => {
        console.log(data)
        try{
            await api.post('/sessions', data).then(response =>{ console.log(response.data)
            localStorage.setItem('@TOKEN',  response.data.token)
            localStorage.setItem('@USERID', response.data.user.id)})
            
            toast.success('Login realizado com sucesso')
            navigate('/user')
        }catch(err){
            console.log(err)
            toast.error('Email ou senha incorretos')

        }
    }





    return (
        <UserContext.Provider value={{ user, setUser , loggedIn, handleLogin}}>
            <ToastContainer/>
            {children}
        </UserContext.Provider>
    );
};