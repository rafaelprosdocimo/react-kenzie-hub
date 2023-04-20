import React from "react";
import { TechContext } from "../../providers/TechContext";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext"; 
export const ListItem = ({item}) => {

    const {deleteTech} = useContext(TechContext)

    return(
        <li  className="card-tech">
                <h2 className="h2-tech">{item.title}</h2>
                <div className="card-wrapper">
                <p className="p-tech">{item.status}</p>
                <button className="delete-tech" onClick={() => {
                    deleteTech(item.id)
                }} type="button">X</button>
            </div>
        </li>
    )
}