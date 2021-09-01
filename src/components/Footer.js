import React from 'react';
import '../CSS/Footer.css';

//Importamos imagenes
import footerImage from '../images/footer-fondo.png';
import logoCGSIW from '../images/Logo-CGSI-white.png';

const Footer = () => {
    return (  
        <footer className="footer bg-white relative pt-1 mt-32 ">
            <div className="container mx-auto px-6 ">

                <div className="sm:flex sm:mt-8 ">
                    <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                        <div className="flex flex-col">
                            <span className="font-bold text-gray-700 uppercase mb-2">Adminitración central</span>
                            <span className="my-1"><a href="https://www.uaq.mx/" className="text-gray-500  text-md hover:text-blue-500">Página principal</a></span>
                            <span className="my-1"><a href="https://www.uaq.mx/index.php/conocenos/rectoria" className="text-gray-500  text-md hover:text-blue-500">Rectoría</a></span>
                            <span className="my-1"><a href="https://www.uaq.mx/index.php/conocenos/secretarias" className="text-gray-500  text-md hover:text-blue-500">Secretarías</a></span>
                            <span className="my-1"><a href="https://www.uaq.mx/index.php/conocenos/direcciones" className="text-gray-500  text-md hover:text-blue-500">Direcciones</a></span>
                            <span className="my-1"><a href="https://www.uaq.mx/index.php/conocenos/coordinaciones" className="text-gray-500  text-md hover:text-blue-500">Coordinaciones</a></span>
                            <span className="my-1"><a href="https://www.uaq.mx/index.php/conocenos/bachilleres" className="text-gray-500  text-md hover:text-blue-500">Bachilleres</a></span>
                            <span className="my-1"><a href="https://www.uaq.mx/index.php/conocenos/facultades" className="text-gray-500  text-md hover:text-blue-500">Facultades</a></span>
                            <span className="my-1"><a href="https://campus.uaq.mx/" className="text-gray-500  text-md hover:text-blue-500">Campus</a></span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Enlaces</span>
                            <span className="my-1"><a href="https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000002-0000-0ff1-ce00-000000000000&redirect_uri=https%3a%2f%2foutlook.office365.com%2fowa%2f&resource=00000002-0000-0ff1-ce00-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid&msafed=0&client-request-id=13c83ae4-b828-456c-8c6c-268ee6bfdf1b&protectedtoken=true&domain_hint=uaq.mx&nonce=637035784622155704.fdb05405-14ad-4598-be84-4575da2f410f&state=DYtBCoQwDABb_cU-wFs1rUlTD7JvidSCYBEFXZ-_Ocwwl7HGmFZpFAsqw3FkGIkTxhA8EQP2JS9ACOQ8SnZIU3LLmlCLKUso6KFYfT_D8ZPhe62y1_mWs69v9-S5yrb_AQ&sso_reload=true" className="text-gray-500 text-md hover:text-blue-500">Correo empleados UAQ</a></span>
                            <span className="my-1"><a href="https://directorio.uaq.mx/" className="text-gray-500  text-md hover:text-blue-500">Directorio</a></span>
                            <span className="my-1"><a href="http://perseo.uaq.mx/cas/" className="text-gray-500 text-md hover:text-blue-500">CAS</a></span>
                            <span className="my-1"><a href="http://tv.uaq.mx/" className="text-gray-500  text-md hover:text-blue-500">TV UAQ</a></span>
                            <span className="my-1"><a href="http://radio.uaq.mx/" className="text-gray-500 text-md hover:text-blue-500">Radio UAQ</a></span>
                            <span className="my-1"><a href="https://www.uaq.mx/index.php/conocenos/sobre-la/calendario" className="text-gray-500 text-md hover:text-blue-500">Calendario escolar</a></span>
                            <span className="my-1"><a href="http://bibliotecas.uaq.mx/" className="text-gray-500  text-md hover:text-blue-500">Biblioteca</a></span>
                            <span className="my-1"><a href="https://transparencia.uaq.mx/index.php/contraloria-social" className="text-gray-500 text-md hover:text-blue-500">Contraloría Social</a></span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Comunidades</span>
                            <span className="my-1"><a href="https://www.uaq.mx/index.php/comunidad/alumnos" className="text-gray-500  text-md hover:text-blue-500">Alumnos</a></span>
                            <span className="my-1"><a href="https://directorio.uaq.mx/" className="text-gray-500  text-md hover:text-blue-500">Directorio</a></span>
                            <span className="my-1"><a href="https://comunidad.uaq.mx:8011/email/" className="text-gray-500  text-md hover:text-blue-500">Solicitud de e-mail Alumnos UAQ</a></span>
                            <span className="my-1"><a href="https://www.uaq.mx/index.php/comunidad/Docentes" className="text-gray-500  text-md hover:text-blue-500">Docentes</a></span>
                            <span className="my-1"><a href="https://www.uaq.mx/index.php/comunidad/administrativos" className="text-gray-500  text-md hover:text-blue-500">Administrativos</a></span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Educación continua</span>
                            <span className="my-1"><a href="https://www.uaq.mx/index.php/oferta-educativa/programas-educativos" className="text-gray-500  text-md hover:text-blue-500">Programas educativos</a></span>
                            <span className="my-1"><a href="https://www.uaq.mx/index.php/convocatorias" className="text-gray-500  text-md hover:text-blue-500">Convocatorias</a></span>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className=" degradado-cont container mx-auto h-56 w-auto mt-20 " style={{backgroundImage: `linear-gradient(rgba(0, 1, 68, .5) 0%,  rgba(0, 1, 68, .5) 100%), url(${footerImage})`}}>
                
                <div className="container  w-4/5 float-left h-full flex responsive-div-logo ">
                    <img src={logoCGSIW} className="my-10 responsive-logo" />

                </div>
                <div className="flex flex-col flex items-left  text-center w-full md:w-1/5  float-right md:h-full bg-gray-900 ">
                    <span className=" text-gray-400  block text-2xl responsive-number">(442) 192-12-00</span>
                    <span className="text-gray-400  responsive-ext" >Extensión <span className="text-2xl responsive-ext-number">3270</span></span>
                    <div className="my-4">
                        <span className="text-gray-400 block text-sm responsive-email">Email: cgsi@uaq.edu.mx</span>
                    </div>

                    

                </div>
            </div>
            
            <div className="container mx-auto px-6">
                <div className="mt-16   items-center ">
                    <span className="text-gray-500 text-lg font-bold ">Cerro de las Campanas, s/n, Las Campanas <br/>
                        Edificio de Biblioteca Central, planta alta, Centro Universitario. C.P. 76010
                    </span>
                    <div className="sm:w-2/3 py-6">
                        <p className="text-sm text-blue-500 font-bold mb-2  ">
                            © Coordinación de Informatización - 2021
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;