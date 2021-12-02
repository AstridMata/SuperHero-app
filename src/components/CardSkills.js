import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardSkills = ({id, name, powerstats, urlImg, alignment}) => {

    const { store, actions } = useContext(Context);

    
    return (
        <>

            <div className="card " style={{ maxWidth: '540px' }} >
                <img src={urlImg} className="card-img-top" alt="..." />
                <div className="card-body">
                    <span className="card-title">{name}</span>
                    <span className="text-danger card-text px-3">{alignment} </span>
                    <ul>
                        <li>speed: {powerstats.speed}</li>
                        <li>intelligence: {powerstats.intelligence}</li>
                        <li>strenght: {powerstats.strength}</li>
                        <li>durability: {powerstats.durability}</li>
                        <li>power: {powerstats.power}</li>
                        <li>combat: {powerstats.combat}</li>
                    </ul>
                   <center> <button className="btn btn-dark btn-sm px-3" onClick={()=>actions.removeHero(id)}>Remover</button>
                <Link to={"/details/" + id} className="btn btn-dark btn-sm px-3"> Detalles</Link> </center>
                </div>
            </div>

        </>
    );
}

export default CardSkills;