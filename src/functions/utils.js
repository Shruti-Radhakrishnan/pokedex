
import api from "../services/api";
export function RemoveAspas(val) {
  if (val != null) return val.replace(/[\\"]/g, "");
}

export function GetImageById(id) {
  id = id.toString().padStart(3, "0");
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
}

export function DetermineGenderRate(gender) {
  switch (gender) {
    case -1:
      return "N/A";
    case 0:
      return "Male";
    default:
      return `Male , Female`;
  }
}
// export function DetermineWeakness(weaknessUrl){
//     api
//       .get({weaknessUrl})
//       .then((response) => {
//         if (response.status == 200) {
//           LoadTypes(response.data);
//           const LoadTypes=response.data
//         }
//       })

// }

