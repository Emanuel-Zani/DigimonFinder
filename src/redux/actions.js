export const GET_DIGIMONS = "GET_DIGIMONS";
export const FILTRAR_DIGIMONS = "FILTRAR_DIGIMONS";

export const getDigimons = () =>{
    return function (dispatch){
        fetch(`https://digimon-api.vercel.app/api/digimon`)
        .then((response) => response.json())
        .then((data) => dispatch({type: GET_DIGIMONS, payload: data}))
        
    }
}

export const getFiltrados = (level) =>{

    return function (dispatch){
        dispatch({type:"cargando"})
        fetch(`https://digimon-api.vercel.app/api/digimon/level/${level}`)
        .then((response) => response.json())
        .then((data) => dispatch({type: FILTRAR_DIGIMONS, payload: data}))
        
    }
}


export const filtrarDigimons = (level) =>{
    return {
        type: FILTRAR_DIGIMONS, payload: level
        
    }
}


