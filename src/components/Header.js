import React, {Fragment} from 'react';
import '../CSS/header.css';

//importar Logos
import logoUaq from '../images/Logo-UAQ.png';
import logoDGSI from '../images/Logo-CGSI.png'

const Header = () => {
    
    const esconderMenu = ()=>{
        
        document.querySelector("#nav-content").classList.toggle("hidden");
    }

    
    const muestraSubMenu = ()=>{
        //verificar que en en el submenu para dispositivos con dimensiones mas grandes no activen esta funcion, solo disponible para dispositivos pequeños
        if(!window.matchMedia('only screen and (min-width: 1024px)').matches){

            const existe =  document.querySelector('.despliega-submenu');
            //si aun no se ha desplegado el submenu, desplegar
            if(existe === null){
                document.querySelector('.submenu').classList.remove('submenu-hidden');
                document.querySelector('.submenu').classList.add('despliega-submenu');
                return;
            }

            //en caso del que el submenu este desplegado, ocultarlo
            document.querySelector('.submenu').classList.add('submenu-hidden');
            document.querySelector('.submenu').classList.remove('despliega-submenu');

        }

    }

    

    return ( 
        <Fragment>
           
           <nav className="flex items-center justify-between flex-wrap bg-white p-6 relative w-full h-auto mx-auto z-20 top-0">
                <div className="flex items-center flex-shrink-0 mr-6 ">
                    <a className=" flex flex-row text-white no-underline hover:text-white hover:no-underline" href="#">
                        <img className="responsive-logos-head" src={logoUaq} />
                        <img className="responsive-logos-head" src={logoDGSI} />
                        
                    </a>
                </div>

                <div className="block lg:hidden">
                    <button id="nav-toggle" onClick={()=>esconderMenu()} className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:bg-gray-200 responsive-button-menu">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>

                <div className="responsive-color-div w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0 mt-10" id="nav-content">
                    <ul className="list-reset lg:flex justify-center flex-1 items-center" id="menu">
                        <li className=" mr-3 hover:bg-gray-300"><a href="/" className="inline-block py-2 px-4 font-bold responsive-text-color no-underline text-xl hover:bg-gray-300 responsive-text-menu " >Inicio</a></li>
                        
                        <li className="menu_item container-submenu hover:bg-gray-300 cursor-pointer"  onClick={()=>muestraSubMenu()}>
                            <a href="#" className="inline-block py-2 px-4 font-bold responsive-text-color no-underline text-xl submenu-btn hover:bg-gray-300 responsive-text-menu" >Departamentos<i className="fas fa-angle-down"></i></a>
                            <ul className="submenu submenu-hidden ">
                                <li className="menu_item"><a href="infraestructura.html" className="menu_link">Infraestructura Física</a></li>
                                <li className="menu_item"><a href="redIna.html" className="menu_link">Red Inalámbrica</a></li>
                                <li className="menu_item"><a href="routing.html" className="menu_link">Switching & Routing</a></li>
                                <li className="menu_item"><a href="videoconferencia.html" className="menu_link">Videoconferencia</a></li>
                                <li className="menu_item"><a href="seguridad.html" className="menu_link">Seguridad Perimetral</a></li>
                                <li className="menu_item"><a href="/Monitoreo" className="menu_link">Monitoreo</a></li>
                                <li className="menu_item"><a href="/Centro-de-Computo" className="menu_link">Centro de Compúto</a></li>
                                <li className="menu_item"><a href="/CAS" className="menu_link">CAS</a></li>
                            </ul>
                        </li>
                        <li className="menu_item hover:bg-gray-300"><a href="contacto.html" className="inline-block py-2 px-4 font-bold responsive-text-color no-underline text-xl hover:bg-gray-300 responsive-text-menu">Acerca de nosotros</a></li>
				    </ul>

                </div>
            </nav>

            


           
        </Fragment>


     );
}
 
export default Header;
