import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/Logo.png"
import { StyledHeader } from "../../components/Header/Header"
import { StyledNavBar } from "../../components/NavBar/styledNavBar";
import { StyledMain } from "../../components/StyledMain/StyledMain";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext"; 
import { ModalTech } from "../../components/Modal/ModalTech";
import { TechContext } from "../../providers/TechContext";
import { ListItem } from "../../components/ListItem/ListItem";
export const User = () => {
    const {user, setUser, loggedIn} = useContext(UserContext)
    const {modalBool, handleCLickOpen, tech, setTech, getTech} = useContext(TechContext)

    useEffect(() => {
        loggedIn()
        getTech()
    },[])


    useEffect(() => {
        
    },[user])

    useEffect(() => {
        console.log(tech)
    },[tech])
    return (<>
                <StyledNavBar routeNav="user">
                    <Link to="/user"><img src={imgLogo} alt="" /></Link>
                    <button onClick={(e) =>{
                        e.preventDefault()
                        setUser([])
                        localStorage.clear()
                        window.location.href = "/"
                    }} className="button-nav" type="button">Sair</button>
                </StyledNavBar>
                <StyledHeader>
                        <h2>Olá, {user.name}</h2>
                        <p className="p-header">{user.course_module}</p>
                </StyledHeader>
                <StyledMain>
                    <div className="header-tech">
                        <h2 className="title-tech">Tecnologias</h2>
                        <button className="add-tech" onClick={()=>{handleCLickOpen()}} type="button">+</button>
                    </div>
                    <ul className="list-tech">
                    
                        {tech.map((item) => {
                            return(
                                <ListItem key={item.id} item={item}/>
                            )
                        })}
                        
                    </ul>
                </StyledMain>
                {modalBool === true ? <ModalTech/> : null}
                
    </>)
}