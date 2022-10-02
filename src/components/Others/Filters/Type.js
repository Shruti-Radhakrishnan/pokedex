
import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import "../styles.css";

function Type  (props) {
    const [value, setValue] = React.useState('fruit');
    const [showModalError, setShowModalError] = useState(false);
    const [types , setTypes]=useState(false);
    const [selectedTypes , setSelectedTypes] = useState('');
  useEffect(() => {
    LoadPokemon();
  }, []);
  
  const LoadPokemon = async ()=>{
      const response= await api.get('/type/')
      .catch((error) => {
        setShowModalError(true);
   });
    setTypes(response.data.results)
      console.log(types)
  }
  const handleChange = (event) => {
    setSelectedTypes(event.target.value);
    props.onselect(event.target.value);

    };

    
  return (
    <div className='container-search'>
      <label>
       Type
       <div>
        <select className="filter-input-btn" onChange={handleChange}>
      {types&&types.map((type)=>
        <option value={type.url}>{type.name}</option>
      )}
        </select>
        </div>
      </label>
      <label>
       Gender
       <div>
        <select className="filter-input-btn">
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="meat">Meat</option>
        </select>
        </div>
      </label>

      <label>
       Stats
       <div>
        <select className="filter-input-btn">
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="meat">Meat</option>
        </select>
        </div>
      </label>

    </div>
  );

    }

export default Type;
