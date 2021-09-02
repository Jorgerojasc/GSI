import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

//importamos componentes o 'vistas'
import Inicio from './components/Inicio';
import Infraestructura from './components/InfraestructuraFisica';
import Monitoreo from './components/MonitoreoYAdministracionServidores';
import CentroComputo from './components/CentrodeComputo';
import CAS from './components/CAS';


function App() {


  return (
    <Router>
        <Switch>
            <Route path="/" exact>
                <Inicio/>
            </Route>
           
            <Route path="/Infraestructura">
              
                <Infraestructura/>
            </Route>
            <Route path="/Monitoreo">
                <Monitoreo/>
            </Route>
            <Route path="/Centro-de-Computo">
                <CentroComputo/>
            </Route>
            <Route path="/CAS">
                <CAS/>
            </Route>sz
        </Switch>
    </Router>
  );
}

export default App;
