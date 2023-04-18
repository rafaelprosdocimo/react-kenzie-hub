import React, { useEffect } from "react";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/Logo.png"
import { StyledHeader } from "../../components/Header/Header"
import { StyledNavBar } from "../../components/NavBar/styledNavBar";
import { StyledForm } from "../../components/StyledForm/StyledForm.jsx";
import { StyledMain } from "../../components/StyledMain/StyledMain";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext"; 
export const User = () => {
    const {user, setUser, loggedIn} = useContext(UserContext)

    useEffect(() => {
        loggedIn()
    },[])

    return (<>
        <StyledNavBar routeNav="user">
            <Link to="/user"><img src={imgLogo} alt="" /></Link>
            <button onClick={(e) =>{
                e.preventDefault()
                setUser([])
                localStorage.clear()
                window.location.href = "/"
            }} className="button-nav" type="button"></button>
        </StyledNavBar>
        <StyledHeader>
                <h2>Olá, {user.name}</h2>
                <p className="p-header">{user.course_module}</p>
        </StyledHeader>
        <StyledMain>
            <h2>Que Pena! Estamos em desenvolvimento {":("}</h2>
            <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
        </StyledMain>


    </>)
}