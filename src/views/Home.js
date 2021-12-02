import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import Card from "../components/Card";

const Home = () => {

    const [search, setSearch] = useState("");
    const { store, actions } = useContext(Context);

    function handleSubmit(e) {
        e.preventDefault()
        actions.searchHero(search);
    }

    return (
        <>
            <div className="all-container Home"> 
            {/* // style={{ backgroundImage: url('https://wallpapercave.com/wp/wp5680617.jpg') }} */}
            
                <h1 className="text-center">BUSCA TU PERSONAJE</h1>
                <p className="text-center mt-3 display-3">{store.demo}</p>
                <div className="row container mx-auto">
                    
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="mb-3">
                         <center>   <label htmlFor="exampleInputEmail1" className="form-label">SELECCIONA TRES HEROES Y TRES VILLANOS</label></center>
                            <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e) => setSearch(e.target.value)} value={search} />
                        </div>

                        <button type="submit" className="btn my-5 bg-warning text-dark" >Buscar</button>
                    </form>
                    <div className="container">
                        <div className="row">
                            {store.character?.map((item) => <div className= "col-sm-6 col-md-4 col-lg-3 py-3" key={item.id}><Card name={item.name} urlImg={item.image.url} id={item.id} powerstats={item.powerstats} alignment={item.biography.alignment}/></div>)}
                        </div>
                    </div>
                   
                </div>
            </div>
        </>
    );
}

export default Home;