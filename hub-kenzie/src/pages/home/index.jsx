
import React, { useEffect } from "react";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/logo.png"
import { StyledHeader } from "../../components/Header/Header"
import { StyledNavBar } from "../../components/NavBar/styledNavBar";
import { StyledForm } from "../../components/StyledForm/StyledForm.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { zodResolver } from '@hookform/resolvers/zod';

import * as z from 'zod'

const schema = z.object({
    email: z.string().nonempty("Email é obrigatório").email(),
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
})

export const Home = () => {



    const { register, handleSubmit,formState: { errors }} = useForm({
        resolver: zodResolver(schema)
    });
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
        <>
            <ToastContainer/>
            <StyledNavBar routeNav="login">
                <Link to="/register"><img src={imgLogo} alt="" /></Link>
            </StyledNavBar>
            

            <main>
                <StyledForm onSubmit={handleSubmit(handleLogin)}>
                    <h2 className="title">Login</h2>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" {...register("email")} id="email" />
                    <p className="errormsg">{errors.email?.message}</p>
                    
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" {...register("password")} id="password" />
                    <p className="errormsg">{errors.password?.message}</p>
                    
                    <button className="button-submit" type="submit">Entrar</button>
                    <p className="info">Ainda não Possui uma conta?</p>
                    <button className="button-nav" ><Link to="/register">Cadastre-se</Link></button>
                </StyledForm>
            </main>
        </>
    )
}