import React from 'react';
import{Link} from 'react-router-dom';
import '../style/Filtrar.css'
const Filtrar = () => {

    return(
        <>
            
            <Link to='/'>
                <p>Todos</p>
            </Link>

            <Link to='/digimons/Fresh'>
                <p>Fresh</p>
                
            </Link>

            <Link to='/digimons/InTraining'>
                <p>In Training</p>
                
            </Link>
            <Link to='/digimons/Rookie'>
                <p>Rookie</p>
                
            </Link>

            <Link to='/digimons/Champion'>
                <p>Champion</p>
                
            </Link>

            <Link to='/digimons/Armor'>
                <p>Armor</p>
                
            </Link>

            <Link to='/digimons/Ultimate'>
                <p>Ultimate</p>
                
            </Link>
            
            <Link to='/digimons/Mega'>
                <p>Mega</p>
                
            </Link>
        </>
    )

}

export default Filtrar;