import React, { useContext } from "react";
import { Context } from "../store/appContext";

const AveragePower = () => {

    const { store, actions } = useContext(Context);


    return (
        <><div className="container">
            <h1 className="mb-5">Estadisticas de poderes del equipo</h1>
            <p className="mb-0 fs-5 fst-normal">Inteligencia:</p>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style={{ width: store.teampowerstats.intelligence + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{store.teampowerstats.intelligence === undefined ? "0%" : store.teampowerstats.intelligence + "%"}</div>
            </div>
            <p className="mb-0 fs-5 fst-normal">Fuerza:</p>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style={{ width: store.teampowerstats.strength + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{store.teampowerstats.strength === undefined ? "0%" : store.teampowerstats.strength + "%"}</div>
            </div>
            <p className="mb-0 fs-5 fst-normal">Velocidad:</p>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style={{ width: store.teampowerstats.speed + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{store.teampowerstats.speed === undefined ? "0%" : store.teampowerstats.speed + "%"}</div>
            </div>
            {/* desde aca  */}
            <p className="mb-0 fs-5 fst-normal">Durabilidad:</p>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style={{  width: store.teampowerstats.durability + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{store.teampowerstats.durability === undefined ? "0%" : store.teampowerstats.durability + "%"}</div>
            </div>
            <p className="mb-0 fs-5 fst-normal">Poder:</p>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style={{  width: store.teampowerstats.power + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{store.teampowerstats.power === undefined ? "0%" : store.teampowerstats.power + "%"}</div>
            </div>
            <p className="mb-0 fs-5 fst-normal">Combate:</p>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style={{  width: store.teampowerstats.combat + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{store.teampowerstats.combat === undefined ? "0%" : store.teampowerstats.combat + "%"}</div>
            </div>
        </div>
        </>
    )
}

export default AveragePower;