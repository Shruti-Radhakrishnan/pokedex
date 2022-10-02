import React from "react";

import { DetermineGenderRate } from "../../functions/utils";
import api from "../../services/api";
//import {DetermineWeakness} from "../../functions/utils"

const PokeInfo = ({
  height,
  egg_groups,
  weight,
  abilities,
  gender_rate,
  type,
  weakness,
}

) => {
  return (
    <div className="container-info d-flex flex-wrap my-4">
      <div className="info-item">
        <h4>Height</h4>
        <p>{Math.round(height * 10) / 100} m</p>
      </div>
      <div className="info-item">
        <h4>Weight</h4>
        <p>{Math.round(weight * 10) / 100} kg</p>
      </div>

      <div className="info-item mb-0">
        <h4>Gender</h4>
        <p>{gender_rate != null ? DetermineGenderRate(gender_rate) : "-"}</p>
      </div>
      <div className="info-item">
        <h4>EggGroups</h4>
        <p>{egg_groups!= null ? egg_groups : "-"}</p>
      </div>

     

      <div className="info-item">
        <h4>Abilities</h4>
        <p>{abilities != null ? abilities : "-"}</p>
      </div>

      

      <div className="info-item mb-0">
        <h4>Types</h4>
        <p>{type != null ? type : "-"}</p>
      </div>
      <div className="info-item mb-0">
        <h4>Weakness</h4>
        <p>{weakness}</p>
      </div>
    </div>
  );
  function Info (){
    const pokeSpecies = api.get(`${weakness}`);
    return (
      <div className="container-info d-flex flex-wrap my-4">
        <div className="info-item">
          <h4>Height</h4>
          </div>
          </div>
    )
  }
};


export default PokeInfo;
