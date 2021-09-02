import React, {Fragment} from 'react';

//Importamos loscomponentes
import Header from './Header.js';
import Footer from './Footer';

//Importamos el CSS
import '../CSS/CAS.css';

//Importar Imagenes
import CasPage from '../images/Recurso6.png';
import flecha_abajo from '../images/flecha_abajo.png';
import perfil from '../images/user.png';


const Childhtml = () =>{
    return(
        <Fragment>
            
            <div  className=" relative pickgradient  flex items-center w-full">
                <div >
                    <img src={CasPage} className="img-gradient"  />

                </div>
                <div className="flex flex-col absolute flex items-center justify-center z-10 inset-0">

                    <div className="text-center">
                        <h1 className=" break-normal responsive-title text-white font-bold  md:text-4xl ">Acerca de nosotros </h1>
                        
                        
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
            <div className="container mx-auto px-6 mt-20  ">
                <div className="flex responsive-div-text-CAS-P justify-items-center items-center">
                <div className=" w-full flex flex-col justify-center justify-items-center items-center   ">
                        <div className="flex flex-col bg-red-500 absolute z-10 relative  prueba r">
                            
                            <div className=" color-line-gradient-CAS-P absolute  ">
                                    <p className="">line</p>
                            </div>
                            <div className=" color-line-gradient-CAS-P-2 absolute ">
                                    <p className="">line</p>
                            </div>
                        </div>
                        <div className=" flex flex-col responsive-div-card-perfil-CAS justify-center justify-items-center items-center shadow-2xl relative z-40 bg-white ">
                            <div className="color-div-CAS-P  ">
                                <img src={perfil} className="" width="150px" height="150px"></img>
                            </div>
                            <div  className="absolute flex flex-col mt-32 justify-center justify-items-center items-center  ">
                                <h1 className="font-bold text-blue-700 mt-5 responsive-name-perfil-CAS-P break-all">M. en D. Ulises Bajonero <br></br>
                                Corona
                                </h1>
                                
                                <h2 className="font-bold text-gray-600 mt-5 responsive-contact-perfil-CAS-P"> &nbsp; Coordinador General de
                                Servicios de <br></br>&nbsp; Informatización <br></br>&nbsp;Extensión: 3278 <p></p>&nbsp;Email: bajo@uaq.mx </h2>
                                
                            </div>
                            


                            
                        </div>
                    </div>

   
                    <div className=" w-full flex flex-col justify-center justify-items-center items-center   ">
                        <div className="flex flex-col bg-red-500 absolute z-10 relative  prueba r">
                            
                            <div className=" color-line-gradient-CAS-P absolute  ">
                                    <p className="">line</p>
                            </div>
                            <div className=" color-line-gradient-CAS-P-2 absolute ">
                                    <p className="">line</p>
                            </div>
                        </div>
                        <div className=" flex flex-col responsive-div-card-perfil-CAS justify-center justify-items-center items-center shadow-2xl relative z-40 bg-white ">
                            <div className="color-div-CAS-P  ">
                                <img src={perfil} className="" width="150px" height="150px"></img>
                            </div>
                            <div  className="absolute flex flex-col mt-32 justify-center justify-items-center items-center  ">
                                <h1 className="font-bold text-blue-700 mt-5 responsive-name-perfil-CAS-P break-all">Elvia Aurora <br></br>
                                Centeno Castellanos
                                </h1>
                                
                                <h2 className="font-bold text-gray-600 mt-5 responsive-contact-perfil-CAS-P">  Asistente
                                 <br></br>&nbsp;Email: elvia.centeno@uaq.mx </h2>
                                
                            </div>
                            


                            
                        </div>
                    </div>
                    


 

                </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
              
              <div className=" w-full flex flex-row  ">
                    <div className="w-1/2">
                        <p className="text-gray-500 leading-relaxed text-justify">
                        <b>¿Quienes somos nosotros?</b>
                        <br /><br />
                        La Coordinación General de Servicios de Informatización (CGSI) es el área encargada de brindar los servicios de Internet a través de la Red Institucional de Computo, analizamos y proponemos nuevas tecnologías y servicios de conectividad que garanticen mantener actualizada la infraestructura de comunicaciones y de seguridad. Provee de servicios de conectividad integral alámbrica e inalámbrica, considerando las mejores prácticas y normas establecidas. Además de desarrollar otros proyectos para el beneficio de la comunidad 
                        universitaria.<br /><br />
                        Sin duda el camino se construye día a día y el compromiso de la CGSI es mantener la calidad de los servicios de la RIC e ir incrementando
                        mayor cobertura en la red WiFi para nuestros alumnos, personal administrativo y docentes, los cuales son el principal motivo para seguir creciendo, avanzando, aprendiendo y sumando esfuerzos.
                        Refrendamos el compromiso de abrir los espacios necesarios para que la Red Institucional de Computo este siempre a la vanguardia y a disposición de todos los universitarios. Junto con las facultades seguiremos haciendo las gestiones necesarias para impulsar el desarrollo por medio de la tecnología.
                        Te ofrecemos siempre una solución si tienes problemas de conexión a la red, nos puedes localizar en:
                        </p><p />
                        Tel. 1921200
                        <p />
                        Extensión: 3270
                        <p />
                    </div>
                    <div className="ml-10">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.9107835529526!2d-100.41299598404647!3d20.591700707928226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35acc6fe853f9%3A0x4bf8d2f4b15f84fd!2sCoordinacion%20de%20Servicios%20de%20Informatizaci%C3%B3n!5e0!3m2!1ses-419!2smx!4v1630596726452!5m2!1ses-419!2smx" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" />
                    </div>
                        
                </div>

                    
            </div>
            
        </Fragment>
    );
 
}
const About = () => {
    document.title = 'DGSI | Acerca de nosotros ';
    return ( 
        <Fragment>
            <Header/>
            <Childhtml/>
            <Footer/>
        </Fragment>
     );
}
 
export default About;