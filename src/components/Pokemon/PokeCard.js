import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import { GetImageById } from "../../functions/utils";

import pokemon_placeholder from "../../assets/img/pokemon-placeholder.png";

const PokeCard = ({ name, id, types, click }) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [id]);

  return (
    <div className={`container-card ${types[0].type.name} mb-4`}>
      <div>
      <figure
        className={`container-card-img position-relative my-4`}
      >
        <Link to={click ? `/details/${name}` : "javascript:void"}>
          {error ? (
            <img alt={name} title={name} src={pokemon_placeholder} />
          ) : (
            <img
              onError={(e) => setError(true)}
              className=""
              alt={name}
              title={name}
              src={GetImageById(id)}
            />
          )}
        </Link>
      </figure>
        <div className="text-center">
          <h2 className="pokemon-name  my-0">{name}</h2>
          <p className="pokemon-number mb-0">
            # {id.toString().padStart(3, "0")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
