import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import LoadingDetails from "../../components/Loading/LoadingDetails";
import Header from "../../components/Header/Header";
import PokeCard from "../../components/Pokemon/PokeCard";
import PokeOverview from "../../components/Pokemon/PokeOverview";
import PokeInfo from "../../components/Pokemon/PokeInfo";
import PokeStats from "../../components/Pokemon/PokeStats";
import PokeEvolution from "../../components/Pokemon/PokeEvolution";
import Footer from "../../components/Others/Footer";
import ModalError from "../../components/Others/ModalError";
import api from "../../services/api";
import axios from "axios";

function Details({ history, ...props }) {
  const { name } = props.match.params;
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});
  const [showModalError, setShowModalError] = useState(false);
  useEffect(() => {
    function LoadPokemon() {
      api
        .get(`/pokemon/${name}`)
        .then((response) => {
          if (response.status == 200) {
            LoadSpecies(response.data);
           // LoadDescription();
            LoadWeakness();
          }
        })
        .catch((error) => {
          setShowModalError(true);
        });
    }
    if (name == undefined) history.push({ pathname: "/" });
    window.scrollTo(0, 0);
    LoadPokemon();
  }, [window.location.pathname]);

  
  async function LoadSpecies(poke) {
    try {
      let pokeSpecies = await api.get(`/pokemon-species/${name}`);
      let pokeEvolution = await axios.get(pokeSpecies.data.evolution_chain.url);
    
      var flavor_text_default = "";
      var tempText =""
      pokeSpecies.data.flavor_text_entries.map((item) => {
        if (item.language.name != "en") return false;
          tempText += item.flavor_text
          if(tempText !==flavor_text_default)
        flavor_text_default += item.flavor_text;
      
      });
      var egg_groups = "";
      pokeSpecies.data.egg_groups.map((item,index)=>{
        egg_groups+=`${item.name}
         ${pokeSpecies.data.egg_groups.length == index + 1 ? "" : ", "
      }`;
      });
      var abilities = "";
      poke.abilities.map((item, index) => {
        abilities += `${item.ability.name}${
          poke.abilities.length == index + 1 ? "" : ", "
        }`;
      });
      var type = "";
      var url ="";
      poke.types.map((item, index) => {
        type += `${item.type.name}${
          poke.types.length == index + 1 ? "" : ", "
        }`
        url +=`${item.type.url}${
          poke.types.length == index + 1 ? "" : ", "
        }`
        
      });
      var obj = {
        id: poke.id,
        name: poke.name,
        type,
        flavor_text_default,
        height: poke.height,
        weight: poke.weight,
        abilities,
        gender_rate: pokeSpecies.data.gender_rate,
        capture_rate: pokeSpecies.data.capture_rate,
        habitat: pokeSpecies.data.habitat?.name,
        stats: poke.stats,
        evolution: pokeEvolution.data.chain,
        egg_groups,
        types:poke.types,
      };
      setDetails(obj);
      setLoading(false);
    } catch (error) {
      setShowModalError(true);
    }
  }


  async function LoadWeakness(){
    try{
      let pokemonWeakness= await api.get(`/pokemon/${name}`);
      var type= pokemonWeakness.data.types;
      var weakness=''
      type.map((item)=>{
        weakness += item.type.name
      })
      console.log(type)

    }
    catch(error){

    }
  }

  return (
    <div>
      <Header />
      <ModalError
        history={history}
        show_modal_error={showModalError}
        msg={"Ops! Could not load the information for this pokemon."}
      />
      <Container fluid className="mb-4">
        {loading ? (
          <LoadingDetails />
        ) : (
          <>
              <Col xs={12} md={12} className="d-flex">
                <PokeCard
                  name={details.name}
                  id={details.id}
                  types={details.types}
                  click={false}
                />
                <PokeOverview
                  flavor_text_default={details.flavor_text_default}
                />
              </Col>
               <Col xs={12} md={12}>
                <PokeInfo
                  height={details.height}
                  egg_groups={details.egg_groups}
                  weight={details.weight}
                  abilities={details.abilities}
                  gender_rate={details.gender_rate}
                  habitat={details.habitat}
                  type={details.type}
                  weakness={details.url}
                />
              </Col>

              <Col xs={12}>
                <PokeStats stats={details.stats} types={details.types} />
              </Col>
            
            <PokeEvolution data={details.evolution} types={details.types} />
          </>
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default Details;
