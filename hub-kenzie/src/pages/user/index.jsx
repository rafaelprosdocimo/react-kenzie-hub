import React, { useEffect } from "react";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/logo.png"
import { StyledHeader } from "../../components/Header/Header"
import { StyledNavBar } from "../../components/NavBar/styledNavBar";
import { StyledForm } from "../../components/StyledForm/StyledForm.jsx";
import { StyledMain } from "../../components/StyledMain/StyledMain";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
export const User = () => {

    const [user, setUser] = React.useState([])

    useEffect(() => {
        const userID = localStorage.getItem('@USERID')
        const token = localStorage.getItem('@TOKEN')
        console.log(userID)
        const loadUser = async () => {
            const response = await api.get(`/users/${userID}`)
            setUser(response.data)
        }
        loadUser()
    }, [])



    return (<>
        <StyledNavBar routeNav="user">
            <Link to="/user"><img src={imgLogo} alt="" /></Link>
            <button onClick={(e) =>{
                e.preventDefault()
                setUser([])
                localStorage.clear()

            }} className="button-nav"><Link to="/">Sair</Link></button>
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