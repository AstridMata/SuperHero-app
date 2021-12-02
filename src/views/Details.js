import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
    const{id} = useParams ();
    const[characterDetails,setCharacterDetails]= useState({});

    useEffect(()=>{
        axios.get(`https://www.superheroapi.com/api.php/${process.env.REACT_APP_KEYSH}/${id}`)
        .then(response=>  setCharacterDetails(response.data))
        .catch((err) => console.log("error" + err))
    },[])

    return ( 
        <div class="card mb-3">
          <div className="row g-0">
            <div className="col-6">
              <img
                src={characterDetails.image===undefined?"-":characterDetails.image.url}
                alt=""
                className="img-fluid"/>
            </div>
            <div className="col-6 px-3">
              <h5 className="card-title mb-4 mt-2">{characterDetails.name}</h5>
              <p className="card-text">Altura: {characterDetails.appearance===undefined?"-":characterDetails.appearance.weight[1]}</p>
              <p className="card-text">Peso: {characterDetails.appearance===undefined?"-":characterDetails.appearance.height[1]}</p>
              <p className="card-text">Color de ojos:{characterDetails.appearance===undefined?"-":characterDetails.appearance["eye-color"]}</p>
               <p className="card-text">Color de pelo: {characterDetails.appearance===undefined?"-":characterDetails.appearance["hair-color"]}</p>
              <p className="card-text">{characterDetails.work ===undefined?"-":characterDetails.work.base}</p>
              <Link to="/" className="btn btn-dark mt-5">Volver</Link>
            </div>
          </div>
        </div>
     );
}
 
export default Details;