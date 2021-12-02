import React, { useContext } from "react";
import { Context } from "../store/appContext";


const Card = ({ name, urlImg, id, powerstats, alignment }) => {

    const { store, actions } = useContext(Context);

    

    return (
        <>

            <div className="card" style={{ maxWidth: '540px' }}>
                <img src={urlImg} className="card-img-top" alt="..." />
                <div className="card-body">
                <span className="card-title">{name}</span>
                    <span className="text-danger card-text px-3">{alignment} </span>
                    <button className="btn btn-dark btn-sm" onClick={() => actions.addHero({ id, name, powerstats, alignment, urlImg })}>Agregar</button>
                </div>
            </div>

        </>
    );
}

export default Card;