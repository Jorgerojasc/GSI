import React, {useState, useEffect} from 'react';

import '../CSS/inicio.css';

const Modal = () => {
    const[modal, setModal] = useState(1);


    const cerrarModal = ()=>{
        //0 -> oculto ,  1 -> visible
        if(modal == 1){
            document.querySelector('.hidde-modal').classList.add('hidden');
            setModal(0);
        }
        
    }
 
    const responsiveModal = ()=>{
        if(!window.matchMedia('only screen and (min-width: 400px)').matches){
            
            document.querySelector('.prueba-Modal').classList.remove('modal-responsive');
            document.querySelector('.prueba-Modal').classList.add('modal-responsive-2');



            
        }
        else{
            document.querySelector('.prueba-Modal').classList.remove('modal-responsive-2')
            document.querySelector('.prueba-Modal').classList.add('modal-responsive');
            
        }
    }

    return ( 
        // <!-- div de la imagen de fondo-->

        <div onLoad={()=>responsiveModal()}   className="min-w-screen h-screen animated fadeIn faster hidde-modal  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover fixed"  id="modal-id" >

    
            {/* <!-- Div del alert o recuadro blanco-->  */}
            <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
            <div className="  modal-responsive w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white overflow-y-auto " >
              {/* <!--content--> */}
              <div className="">
                {/* <!--body--> */}
                <div className="text-center p-5 flex-auto justify-center">
                        
                        {/* <!-- Icono de Atención--> */}
                    <svg height="512pt" viewBox="0 -18 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 flex items-center text-red-500 mx-auto"><path d="m504.351562 384.339844-194.191406-352.320313c-10.519531-19.085937-30.828125-32.019531-54.160156-32.019531s-43.640625 12.933594-54.160156 32.019531l-194.191406 352.320313c-4.871094 8.835937-7.648438 18.988281-7.648438 29.792968 0 34.136719 27.671875 61.8125 61.8125 61.8125h388.375c34.140625 0 61.8125-27.675781 61.8125-61.8125 0-10.804687-2.777344-20.957031-7.648438-29.792968zm0 0" fill="#41494e" /><path d="m477.285156 399.257812-194.1875-352.320312c-5.453125-9.890625-15.835937-16.03125-27.097656-16.03125-5.523438 0-10.832031 1.484375-15.453125 4.15625 4.804687 2.777344 8.863281 6.835938 11.644531 11.875l167.09375 398.101562h30.902344c17.042969 0 30.90625-13.863281 30.90625-30.90625 0-5.28125-1.28125-10.285156-3.808594-14.875zm0 0" fill="#ffa433" /><path d="m450.1875 414.132812c0-5.28125-1.28125-10.285156-3.808594-14.875l-194.1875-352.320312c-2.78125-5.039062-6.839844-9.097656-11.644531-11.875-4.800781 2.777344-8.863281 6.835938-11.640625 11.875l-194.191406 352.324219c-2.527344 4.585937-3.808594 9.589843-3.808594 14.871093 0 17.042969 13.863281 30.90625 30.90625 30.90625h357.472656c17.039063 0 30.902344-13.863281 30.902344-30.90625zm0 0" fill="#ffc43b" /><g fill="#41494e"><path d="m271.453125 367.773438c0 8.535156-6.917969 15.453124-15.453125 15.453124s-15.453125-6.917968-15.453125-15.453124c0-8.53125 6.917969-15.453126 15.453125-15.453126s15.453125 6.921876 15.453125 15.453126zm0 0" /><path d="m256 166.890625c-8.535156 0-15.453125 6.917969-15.453125 15.453125v123.621094c0 8.53125 6.917969 15.453125 15.453125 15.453125s15.453125-6.921875 15.453125-15.453125v-123.621094c0-8.535156-6.917969-15.453125-15.453125-15.453125zm0 0" /></g></svg>
    
    
                    <h2 className="text-xl font-bold py-4 ">Bienvenido a DGSI</h2>
                    <p className="text-sm text-gray-500 px-8">Nuestro sitio web esta en construcción.</p> 
                    <p className="text-sm text-gray-500 px-8">Lamentamos las molestias que esto ocasiona.</p>    
                </div>
                {/* <!--footer--> */}
                <div className="p-3  mt-2 text-center space-x-4 md:block">
    
                    {/* <!-- Boton de seguir navegando--> */}
                    <a  onClick={()=>cerrarModal()}  className=" cursor-pointer mb-2 md:mb-0 bg-blue-500 border border-blue-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-600">Continuar navegando</a>
                </div>
              </div>
            </div>
          </div>
     );
}
 
export default Modal;