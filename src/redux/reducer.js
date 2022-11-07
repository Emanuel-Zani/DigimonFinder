import { GET_DIGIMONS, FILTRAR_DIGIMONS } from "./actions";

const initialState = {
  digimons: [],
  filtrados: [],
  cargando: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DIGIMONS:
      return {
        ...state,
        digimons: action.payload,
      };
    case FILTRAR_DIGIMONS:

      return{
        ...state,
        filtrados:  action.payload
      };  
    case "cargando":
      return{
        ...state,
        cargando: state.cargando ? false : true
      }

    default:
      return state ;
  }
};

export default rootReducer;
