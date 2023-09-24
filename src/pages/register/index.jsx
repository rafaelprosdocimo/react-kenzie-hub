import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/Logo.png"
import { StyledNavBar } from "../../components/NavBar/styledNavBar";
import { StyledForm } from "../../components/StyledForm/StyledForm.jsx";
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext"; 


export const Register = () => {
    const {handleRegister, schemaRegister} = useContext(UserContext)

    const  { register, handleSubmit,formState: { errors }} = useForm({
        resolver: zodResolver(schemaRegister)
    });


    return (
        <>
            <ToastContainer/>
            <StyledNavBar routeNav="register">
                <Link to="/register"><img src={imgLogo} alt="" /></Link>
                <button className="button-nav"><Link to="/">Voltar</Link></button>
            </StyledNavBar>
            <main>
                <StyledForm onSubmit={handleSubmit(handleRegister)}>
                    <h2 className="title">Crie sua conta</h2>
                    <p className="info">Rápido e grátis, vamos nessa</p>
                    <label htmlFor="email">Email</label>
                    <input  type="email" placeholder="Digite aqui seu email" name="email" {...register("email")} id="email" />
                    <p className="errormsg">{errors.email?.message}</p>
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" {...register("password")} placeholder="Digite sua senha" />
                    <p className="errormsg">{errors.password?.message}</p>
                    <label htmlFor="passwordConfirm">Confirmar Senha</label>
                    <input type="password" name="confirm" id="passwordConfirm" {...register("confirm")} placeholder="Digite Novamente sua senha"/>
                    <p className="errormsg">{errors.confirm?.message}</p>     
                    <label htmlFor="Nome">Nome</label>
                    <input type="text" placeholder="Digite aqui seu nome" name="Nome" {...register("name")} id="name" />
                    <p className="errormsg">{errors.name?.message}</p>
                    <label htmlFor="Bio">Bio</label>
                    <input type="text" name="Bio" placeholder="Fale sobre você" {...register("bio")}  id="bio" />
                    <p className="errormsg">{errors.bio?.message}</p>
                    <label htmlFor="Contato">Contato</label>
                    <input type="text" name="Contato" id="contato" placeholder="Opção de contato" {...register("contact")} />
                    <p className="errormsg">{errors.contact?.message}</p>
                    <select name="modules" id="modules" {...register("course_module")}>
                        <option value="primeiro Módulo" defaultValue>primeiro Módulo</option>
                        <option value="Segundo Módulo" defaultValue>Segundo Módulo</option>
                        <option value="Terceiro Módulo" defaultValue>Terceiro Módulo</option>
                        <option value="Quarto Módulo" defaultValue>Quarto Módulo</option>
                        <option value="Quinto Módulo" defaultValue>Quinto Módulo</option>
                        <option value="Sexto Módulo" defaultValue>Sexto Módulo</option>
                    </select>
                    <button className="button-submit" type="submit">Cadastrar</button>
                </StyledForm>
            </main>
        </>
    )
}