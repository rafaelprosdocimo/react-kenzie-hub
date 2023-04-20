import styled from "styled-components";
import React, { useState } from "react";
import { StyledModal } from "./StyledModal";
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from "react";
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { TechContext } from "../../providers/TechContext";

export const ModalTech = ({}) => {

    const {modalBool, setModalBool, handleCLickClose, tech, setTech, handleCreate} = useContext(TechContext)

    const schemaCreate = z.object({
        title: z.string().nonempty("O nome é obrigatório"),
        status: z.string().nonempty("Módulo é obrigatório"),
        
    })

    const  { register, handleSubmit,formState: { errors }} = useForm({
        resolver: zodResolver(schemaCreate)
    });



    return (
        <StyledModal>
            <div className="div-wrapper">
                <div className="div-header">
                    <h2 className="modal-Title">Cadastrar Tecnologia</h2>
                    <button onClick={handleCLickClose} className="Close-Modal">X</button>
                </div>
                <div className="div-main">
                    <form className="form-modal" onSubmit={handleSubmit(handleCreate)}>
                        <label htmlFor="tech">Nome</label>
                        <input type="text" placeholder="JavaScript" name="tech" id="tech" {...register("title")} />

                        <label htmlFor="Status">Selecionar status</label>
                        <select name="Status" {...register("status")}>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        <button type="submit" className="button-submit">Cadastrar Tecnologia</button>
                    </form>
                </div>
            </div>
        </StyledModal>
    )
}