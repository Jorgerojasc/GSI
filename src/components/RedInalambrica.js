import React, {Fragment} from 'react';

//imoportamos las vistas
import Header from './Header.js';
import Footer from './Footer';

import '../CSS/RedInalambrica.css';
//Importamos las imagenes
import flecha_abajo from '../images/flecha_abajo.png';
import fondoRedIna from '../images/red_ina.png';
import wifiRedIna from '../images/redIna.png';
import userSVG from '../images/user.svg';


const ChildHtml = () =>{
    return(
        <Fragment>
            
            <div  className=" relative pickgradient  flex items-center w-full">
                <div >
                    <img src={fondoRedIna} className="img-gradient"  />

                </div>
                <div className="flex flex-col absolute flex items-center justify-center z-10 inset-0">

                    <div className="text-center">
                        <h1 className=" break-normal responsive-title text-white font-bold  md:text-4xl ">Coordinación de la Red Inalámbrica Universitaria (RIU) </h1>
                        
                        
                    </div>

                    <div>
                        <button className=" text-transparent font-bold py-1 px-7 rounded bg-transparent button-responsive">
                            Cónocenos
                        </button>
                    </div>

                    <div>
                        <img className="responsive-arrow" src={flecha_abajo} />
                    </div> 
                    <div className="absolute  w-full  relative ">
                        <svg className="responsive-wave bottom-0" id="wave" style={{transform: 'rotate(0deg)', transition: '0.3s'}} viewBox="0 0 1440 280" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1={0} x2={0} y1={1} y2={0}><stop stopColor="rgba(255, 255, 255, 0.7)" offset="0%" /><stop stopColor="rgba(255, 255, 255, 0.7)" offset="100%" /></linearGradient></defs><path style={{transform: 'translate(0, 0px)', opacity: 1}} fill="url(#sw-gradient-0)" d="M0,196L80,191.3C160,187,320,177,480,182C640,187,800,205,960,196C1120,187,1280,149,1440,149.3C1600,149,1760,187,1920,200.7C2080,215,2240,205,2400,186.7C2560,168,2720,140,2880,112C3040,84,3200,56,3360,65.3C3520,75,3680,121,3840,149.3C4000,177,4160,187,4320,168C4480,149,4640,103,4800,107.3C4960,112,5120,168,5280,186.7C5440,205,5600,187,5760,163.3C5920,140,6080,112,6240,102.7C6400,93,6560,103,6720,107.3C6880,112,7040,112,7200,121.3C7360,131,7520,149,7680,158.7C7840,168,8000,168,8160,168C8320,168,8480,168,8640,163.3C8800,159,8960,149,9120,130.7C9280,112,9440,84,9600,98C9760,112,9920,168,10080,158.7C10240,149,10400,75,10560,70C10720,65,10880,131,11040,140C11200,149,11360,103,11440,79.3L11520,56L11520,280L11440,280C11360,280,11200,280,11040,280C10880,280,10720,280,10560,280C10400,280,10240,280,10080,280C9920,280,9760,280,9600,280C9440,280,9280,280,9120,280C8960,280,8800,280,8640,280C8480,280,8320,280,8160,280C8000,280,7840,280,7680,280C7520,280,7360,280,7200,280C7040,280,6880,280,6720,280C6560,280,6400,280,6240,280C6080,280,5920,280,5760,280C5600,280,5440,280,5280,280C5120,280,4960,280,4800,280C4640,280,4480,280,4320,280C4160,280,4000,280,3840,280C3680,280,3520,280,3360,280C3200,280,3040,280,2880,280C2720,280,2560,280,2400,280C2240,280,2080,280,1920,280C1760,280,1600,280,1440,280C1280,280,1120,280,960,280C800,280,640,280,480,280C320,280,160,280,80,280L0,280Z" /></svg>
                    </div>
                    
                </div>
            </div>
            <div className="mx-auto h-auto w-auto  container mx-auto flex items-center justify-center z-10 inset-0">
                <div>
                    <p className="break-normal text-blue-600 font-bold  text-base md:text-lg pt-5">Encargado de Red Inalámbrica</p>
                </div>
            </div>
            <section className="grid">
                <div className="div1 mx-auto h-auto w-auto  container mx-auto flex items-center">
                    <div  id="tabla1">
                        <div id="cabtab1">
                            <img className="usuario" src={userSVG} />
                            <div className="poligono_triangulo"> </div>
                        </div>
                        <div className="text-center" id="cuerpotab1">
                            <p className="text-blue-600 font-bold text-base md:text-lg pt-7">Fernando Ramírez Silva</p>
                            <p className="text-gray-700 font-bold text-xs md:text-md pt-3">(442) 192-12-00</p>
                            <p className="text-gray-700 font-bold text-xs md:text-md pb-5">Extensión 3276</p>
                        </div>
                    </div>
                    <div className="poligono">
                    </div>
                </div>
                <div className="div2 mx-auto h-auto w-auto  container mx-auto">
                    <div>
                    <h1 className="text-blue-600 font-bold text-4xl pb-8 pt-16">RIU</h1>
                    </div>
                    <div className="mr-14">
                    <p className="text-gray-500 text-xs pb-5">La Universidad Autónoma de Querétaro a tráves de la Coordinación General de Servicios de Informatización brinda a los estudiantes, docentes, administrativos e invitados en todos sus campus el servicio gratuito de la <b style={{color: '#012951'}}>Red Inalámbrica Universitaria (RIU)</b></p>
                    <p className="text-gray-500 text-xs pb-5">El área de la RIU es la responsable de llevar a cabo el <b style={{color: '#228FFD'}}>análisis, proyección, instalación y administración del servicio inalámbrico;</b> utilizando herramientas de administración y monitoreo que nos permitan tener una visión de las necesidades del usuario así como de las áreas de mayor afluencia y uso de la red. Además, procurando la mejora continua, se realizan cambios de equipo de vanguardia para proveer al usuario una mejor experiencia al hacer uso del servicio.</p>
                    <p className="text-gray-500 text-xs pb-16">La red cuenta con más de 500 equipos instalados en diferentes áreas dando siempre preferencia a los salones y áreas comunes.</p>
                    </div>
                </div>
                <div className="div3">
                </div>
                <div className="div4">
                    <div className="img_red">
                    <img src={wifiRedIna} />
                    </div>
                    <div className="poligono2">
                    </div>
                </div>
            </section>

        </Fragment>
    );
}
const Routing = () => {
    document.title = 'DGSI | Coordinación de la Red Inalámbrica Universitaria ';

    return ( 
        <Fragment>
            <Header/>
            <ChildHtml/>
            <Footer/>
        </Fragment>
     );
}
 
export default Routing;