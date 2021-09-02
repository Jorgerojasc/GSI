import React, {Fragment} from 'react';
import Header from './Header.js';



const Prueba = ()=>{
    return(
        <Fragment>
            <h1>Informatica</h1>
        </Fragment>
        
    )
}
const infraestructuraFisica = () => {
    document.title = 'DGSI | Infraestructura Física';
    return (  
        <Fragment>

            <Header/>

            <div className="container">
                <Prueba/>
            </div>
        </Fragment>

    );
}

export default infraestructuraFisica;