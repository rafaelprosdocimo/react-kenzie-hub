import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import * as z from 'zod'

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

    const handleAutoLogin = async () => {
        const token = localStorage.getItem('@TOKEN')
        try{
            await api.get(`/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {console.log(response.data)
            setUser(response.data)})
            navigate('/user')
        }catch(err){
            console.log(err)
            localStorage.removeItem('@TOKEN')

        }
    }

    const handleRegister = async (data) => {
        console.log(data)
        try{
            await    api.post('/users', data).then(response => console.log(response.data))
            navigate('/')
            toast.success('Cadastro realizado com sucesso')
        }catch(err){
            console.log(err)
            toast.error('Algo deu errado')
        }
    }

    const schemaRegister = z.object({
        email: z.string().nonempty("Email é obrigatório").email(),
        password: z.string().min(8)
        .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
        .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
        .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número"),
        name: z.string().nonempty("Nome é obrigatório"),
        bio: z.string().nonempty("Bio é obrigatório"),
        contact: z.string().nonempty("Contato é obrigatório"),
        course_module: z.string().nonempty("Módulo é obrigatório"),
        confirm: z.string().min(1, "A confirmação de senha é obrigatória")
    }).refine(({password, confirm}) => password === confirm, {
      message: "As senhas precisam corresponderem",
      path: ["confirm"],
    })

    useEffect(() => {
        handleAutoLogin()
    },[])

    return (
        <UserContext.Provider value={{ user, setUser , loggedIn, handleLogin, handleRegister, schemaRegister}}>
            <ToastContainer/>
            {children}
        </UserContext.Provider>
    );
};