import React from "react";
import '../style/Carta.css'

const Digimon = ({name,img,level}) =>{
   

    return(
        <>
            <div className="card">

                <div className="name-container">
                    <h2 className="name">{name}</h2>
                </div>
                

                <div className="imagen">
                    <img src={img} alt=""   />
                </div>
                <h3 className="level">{level}</h3>
                
                
            </div>
        </>
    )
}
//width="160"

export default Digimon;