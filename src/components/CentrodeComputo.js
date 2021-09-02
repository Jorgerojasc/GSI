import React , {Fragment} from 'react';

//Importamos loscomponentes
import Header from './Header.js';
import Footer from './Footer';

//Importamos el CSS
import '../CSS/CentrodeComputo.css';

//Importamos las Imganes a usar
import CentroComputo from '../images/CentroComputo.png';
import flecha_abajo from '../images/flecha_abajo.png';
import Excel from '../images/Excel.png';//LOGO DE LOS CURSOS A IMPORTAR


const Childhtml =()=>{
    return(
        <Fragment>
            <div  className=" relative pickgradient  flex items-center w-full">
                <div >
                    <img src={CentroComputo} className="img-gradient"  />

                </div>
                <div className="flex flex-col absolute flex items-center justify-center z-10 inset-0">

                    <div className="text-center">
                        <h1 className=" break-normal responsive-title text-white font-bold  md:text-4xl ">Centro de Cómputo Académico </h1>
                        
                        
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
            <br/>
            <div className="container mx-auto px-6 mt-20 flex flex-col  relative justify-center justify-items-center items-center">
                <div className="w-2/5 responsive-width-div-p-Centro">
                    <p className="text-blue-600 leading-relaxed text-justify">
                        Consiste en ofrecer una amplia variedad de servicios a nuestra
                        Universidad satisfaciendo de esta manera las múltiples
                        necesidades de información y automatización de funciones
                        administrativas y académicas formando, de esta manera, una base
                        firme para la consecución de los objetivos generales de nuestra
                        institución de acuerdo a las expectativas de la sociedad.<br/><br/>
                        Consolidar a nuestra Universidad como un organismo educativo
                        líder y pionero en los avances tecnológicos acordes a las
                        necesidades de cambio que nos exige la globalización manteniendo
                        altos niveles de calidad, solidez y eficacia en los diversos planes de
                        acción tanto internos como externos orientados a dar servicio a la
                        sociedad.
                    </p>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>

                {/* Contenedor de Cursos descomentar solo las estiquetas de HTML cuando haya Cursos Disponibles */}
                
                {/* <div className="flex flex-col fondo-div-cursos-CC">
                    <div className="p-20 responsive-div-text-card-Computo">
                        <p className="text-white font-bold  responsive-text-card-Computo">Cursos <br/> Estos son los servidores a nuestro cargo:</p>
                    </div>
                    
                </div> */}

                {/* Card de atras, meramente para estilo (relleno) */}
                

                {/* <div className="flex responsive-cards-flex-Computo"> */}


                    {/* Card 1 */}
                    {/* <div className=" responsive-card-Monitoreo mt-5 relative shadow-2xl h-32 mx-3 p-4 rounded flex flex-col justify-around items-center overflow-hidden sm:flex-row  w-1/4  bg-white">
                        <img alt="Tv UAQ" className="w-12" src={Excel} />
                    </div> */}


                    {/* Card 2 */}
                    {/* <div className=" responsive-card-Monitoreo mt-5 relative shadow-2xl h-32 mx-3 p-4 rounded flex flex-col justify-around items-center overflow-hidden sm:flex-row  w-1/4  bg-white">
                        <img alt="Streaming" className="w-12 " src={Excel} />
                    </div> */}


                    {/* Card 3 */}
                    {/* <div className=" responsive-card-Monitoreo mt-5 relative shadow-2xl h-32 mx-3 p-4 rounded flex flex-col justify-around items-center overflow-hidden sm:flex-row  w-1/4  bg-white">
                        <img alt="CAS" className="w-12 " src={Excel} />
                    </div> */}

                {/* </div> */}

                    {/* Card de adelante */}
                {/* <div className="flex responsive-cards-flex-back-Computo   "> */}


                    {/* Card 1 */}
                    {/* <div className=" responsive-card-Monitoreo mt-5 relative shadow-2xl h-32 mx-3 p-4 rounded flex flex-col justify-around items-center overflow-hidden sm:flex-row   bg-white">
                        <img alt="Tv UAQ" className="w-12" src={Excel} />

                    </div> */}


                    {/* Card 2 */}
                    {/* <div className=" responsive-card-Monitoreo mt-5 relative shadow-2xl h-32 mx-3 p-4 rounded flex flex-col justify-around items-center overflow-hidden sm:flex-row  w-1/4  bg-white">
                        <img alt="Streaming" className="w-12 " src={Excel} />
                    </div> */}


                    {/* Card 3 */}
                    {/* <div className=" responsive-card-Monitoreo mt-5 relative shadow-2xl h-32 mx-3 p-4 rounded flex flex-col justify-around items-center overflow-hidden sm:flex-row  w-1/4  bg-white">
                        <img alt="CAS" className="w-12 " src={Excel} />
                    </div> */}

                {/* </div> */}

            </div>
        </Fragment>
    );
}


const CentrodeComputo = () => {
    document.title = 'DGSI | Centro de Cómputo Académico ';
    return (
        <Fragment>
            <Header/>
            <Childhtml/>
            <Footer/>
        </Fragment>
    );
}
 
export default CentrodeComputo;