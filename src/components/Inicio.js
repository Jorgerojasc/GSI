import React, {Fragment} from 'react';

//Importamos loscomponentes
import Header from './Header.js';
import Footer from './Footer';
import Modal from './Modal';


//Importamos el CSS
import '../CSS/inicio.css';

//Importamos imagenes
import informatizacionFondo from '../images/coordinacionInformatizacion-fondo.png'
import flecha_abajo from '../images/flecha_abajo.png';
import edificio from '../images/edificio.png';
import cas_1 from '../images/CAS_1.png';
// Direccion General de Servicios de Informatizacion DGSI
const Childhtml =()=>{
    const goPage = ()=>{
        window.location = "/CAS";
    }
    return(
        <Fragment>

            <div  className=" relative pickgradient  flex items-center w-full">
                <div>
                    <img src={informatizacionFondo} className="img-gradient"  />

                </div>
                <div className="flex flex-col absolute flex items-center justify-center z-10 inset-0">
                    <div className="text-center">
                        <h1 className=" break-normal responsive-title text-white font-bold  md:text-4xl ">Universidad Autónoma de Querétaro</h1>
                        
                        
                    </div>

                    <div >
                        <span className=" responsive-subtitle text-white  font-normal ">Coordinación de Informatización</span>
                    </div>

                    <div>
                        <button className=" text-white font-bold py-1 px-7 rounded button-gradient button-responsive">
                            Cónocenos
                        </button>
                    </div>

                    <div>
                        <img className="responsive-arrow" src={flecha_abajo} />
                    </div> 
                    <svg className="responsive-wave" id="wave" style={{transform: 'rotate(0deg)', transition: '0.3s'}} viewBox="0 0 1440 280" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1={0} x2={0} y1={1} y2={0}><stop stopColor="rgba(255, 255, 255, 0.7)" offset="0%" /><stop stopColor="rgba(255, 255, 255, 0.7)" offset="100%" /></linearGradient></defs><path style={{transform: 'translate(0, 0px)', opacity: 1}} fill="url(#sw-gradient-0)" d="M0,196L80,191.3C160,187,320,177,480,182C640,187,800,205,960,196C1120,187,1280,149,1440,149.3C1600,149,1760,187,1920,200.7C2080,215,2240,205,2400,186.7C2560,168,2720,140,2880,112C3040,84,3200,56,3360,65.3C3520,75,3680,121,3840,149.3C4000,177,4160,187,4320,168C4480,149,4640,103,4800,107.3C4960,112,5120,168,5280,186.7C5440,205,5600,187,5760,163.3C5920,140,6080,112,6240,102.7C6400,93,6560,103,6720,107.3C6880,112,7040,112,7200,121.3C7360,131,7520,149,7680,158.7C7840,168,8000,168,8160,168C8320,168,8480,168,8640,163.3C8800,159,8960,149,9120,130.7C9280,112,9440,84,9600,98C9760,112,9920,168,10080,158.7C10240,149,10400,75,10560,70C10720,65,10880,131,11040,140C11200,149,11360,103,11440,79.3L11520,56L11520,280L11440,280C11360,280,11200,280,11040,280C10880,280,10720,280,10560,280C10400,280,10240,280,10080,280C9920,280,9760,280,9600,280C9440,280,9280,280,9120,280C8960,280,8800,280,8640,280C8480,280,8320,280,8160,280C8000,280,7840,280,7680,280C7520,280,7360,280,7200,280C7040,280,6880,280,6720,280C6560,280,6400,280,6240,280C6080,280,5920,280,5760,280C5600,280,5440,280,5280,280C5120,280,4960,280,4800,280C4640,280,4480,280,4320,280C4160,280,4000,280,3840,280C3680,280,3520,280,3360,280C3200,280,3040,280,2880,280C2720,280,2560,280,2400,280C2240,280,2080,280,1920,280C1760,280,1600,280,1440,280C1280,280,1120,280,960,280C800,280,640,280,480,280C320,280,160,280,80,280L0,280Z" /></svg>
                </div>
                
                
                
                

  
            </div>
            <br/>
            <div className="container mx-auto px-6  ">

                {/* ---Contenedores con el texto */}
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline mt-5 container mx-auto px-6">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-left">
                        <h4 className="mb-3 font-bold text-lg md:text-3xl text-gray-600">Informatización;<span className="text-blue-700"> Misión</span></h4>
                        <p className="text-sm md:text-base text-gray-500 leading-normal text-justify">
                                La coordinación de informatización es reconocida como una de las mejores y
                                más importantes coordinaciones dentro de la Universidad Autónoma de
                                Querétaro.
                        </p>
                    </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline  ">
                  
                    <div className="order-1 w-5/12 px-1 py-4 text-left flex flex-row">
                        <span className="text-blue-600 font-bold -ml-8">|</span>
                        <p className=" md:text-base  text-gray-500 ml-4 leading-relaxed text-justify ">
                            Con un sólido prestigio en la universidad, con una estrecha vinculación con la
                            sociedad para ser una parte importante en el desarrollo académico de la
                            sociedad estudiantil a través del cumplimiento de nuestros servicios,
                            transmisión del conocimiento y difusión de la tecnología.
                        </p>
                    </div>
                </div>

                <div className="flex w-full mx-auto items-center ">
                    <div className="flex img-edificio p-4 rounded-lg w-full px-20 py-20 responsive-div-text">
                        <div className="w-3/6  responsive-hide-img">
                            <img className="w-full h-full  rounded-lg object-contain " src={edificio} alt="Edificio" />
                        </div>
                        <div className="flex flex-col w-2/3 pr-4 bg px-10 responsive-witdth-text ">
                            <p className="text-2xl font-black mb-2 text-gray-50 responsive-title-vision">Visión</p>
                            <p className="text-lg font-light leading-5 text-gray-300 leading-relaxed  responsive-text-Vision text-justify">
                                La coordinación de informatización es una coordinación perteneciente a la
                                Universidad Autónoma de Querétaro enfocada al desarrollo e
                                implementación de la estructura de red institucional, implementando las
                                mejores tecnologías de Wireless, switching, routing y conexión, mismas
                                tecnologías que ayudan a la coordinación a cultivar y enriquecer a la sociedad
                                estudiantil a través sus miembros, de sus cursos educativos, y de sus
                                programas de desarrollo tecnológico. Esta coordinación atiende a todos los sectores de la sociedad y proporciona servicios de computo para ayudar al
                                desarrollo del público en general en el conocimiento de estas
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Contenedor CAS */}
            <div className="relative  h-1/4 cas-container-color mt-44 text-white font-bold">
                <div className="py-10 w-full h-auto flex flex-col items-center responsive-text-cas">
                    <h1>CAS</h1>
                    <h2 className="mt-5">Asistenacia y Soporte Informatización</h2>
                </div>


            </div>

            {/* Contenedor informaciÓn CAS */}

            <div className="container mx-auto  mt-32 h-auto">
                <div className="flex responsive-flex-Inf-cont justify-center justify-items-center items-center">
                    <div className="flex flex-col w-2/5 pr-4 bg px-10 responsive-div-p-Inf-cas relative justify-center justify-items-center items-center ">
                        <p className="text-blue-600 font-bold responsive-p-cas ">
                            ¿Tienes algun problema con la red Institucional?<br/>
                            ¿Necesitas ayuda con instalación de software especifíco?<br/>
                            <br/>
                            <br/>
                            <span className="text-gray-500 font-normal text-justify">
                                <b className="text-black">Te presentamos CAS (Centro de Asistencia y Soporte de
                                Informatización):</b> crea tu reporte en <b className="text-black">CAS</b> y trataremos de
                                solucionar tu problematica lo más pronto posible.
                            </span>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <button className="py-3 px-6 text-white rounded-lg shadow-lg block md:inline-block button-color-config font-bold" onClick={()=>goPage()}>Ir a CAS</button>
                            {/* <a className="py-3 px-6 text-white rounded-lg shadow-lg block md:inline-block button-color-config font-bold">Ir a CAS</a> */}
                        </p>
                    </div>
                    <div className="flex flex-row-reverse w-2/3 responsive-top-img-cas-Inf ">
                        <img src={cas_1} className=" object-contain" ></img>
                    </div>

                </div>

                {/* Contenedor con los CARDS */}

                <div className="flex mt-20 responsive-flex-cards responsive-text-cards">
                        
                        {/* Card 1 */}
                        <div className=" responsive-card-size shadow-md h-48 mx-3 rounded-3xl flex flex-col justify-around items-center overflow-hidden sm:h-44 sm:w-1/4 md:w-1/4 card-color">
                            <p className=" text-white font-bold w-4/5">
                                Instalación de
                                Software
                                (SIIA I, SIIA II, Office,
                                etc.)
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className=" responsive-card-size relative shadow-md h-48 mx-3 rounded-3xl flex flex-col justify-around items-center overflow-hidden sm:flex-row sm:h-44 sm:w-1/4 md:w-1/4 bg-white">
                            <p className=" text-black font-bold w-4/5">
                                Reporte de fallas
                                en la red cableada
                            </p>
                            <div className="circle2 -bottom-16 absolute -left-16">
                                    
                            </div>
                            <div className="circle -bottom-10 absolute -right-10">
                                    
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className=" responsive-card-size shadow-md h-48 mx-3 rounded-3xl flex flex-col justify-around items-center overflow-hidden sm:flex-row sm:h-44 sm:w-1/4 md:w-1/4 card-color">
                            <p className=" text-white font-bold w-4/5">
                                Bloqueo ó
                                problemática de
                                acceso a otros sitios
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className=" responsive-card-size relative shadow-md h-48 mx-3 rounded-3xl flex flex-col justify-around items-center overflow-hidden sm:flex-row sm:h-44 sm:w-1/4 md:w-1/4 bg-white">
                            <p className=" text-black font-bold w-4/5">
                                Reporte de fallas
                                en la red cableada
                            </p>
                            <div className="circle2 -bottom-16 absolute -left-16">
                                    
                            </div>
                            <div className="circle -bottom-10 absolute -right-10">
                                    
                            </div>
                        </div>
     

                </div>
            </div>

              
        </Fragment>



    );
}

const Inicio = () => {
    return ( 

        
        <Fragment>
            <Modal/>
            <Header />
            <Childhtml/>
            <Footer/> 
        </Fragment>
        
     );
}
 
export default Inicio;