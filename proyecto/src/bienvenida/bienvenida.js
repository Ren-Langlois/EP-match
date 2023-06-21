import logo from './imagenes/logo.png';
import iconoLogin from './imagenes/icono-login.png';
import iconoRegistro from './imagenes/icono-registro.png';
import bienvenidaArriba from './imagenes/imagen-arriba.png';
import bienvenidaAbajo from './imagenes/imagen-abajo.png';
import './bienvenida.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Inicio() {
  const history = useNavigate();
  const redirectToLogin = () => {
    history('/login');
  };
  const redirectToRegister= () => {
    history('/register');
  };

  return (
   
    <div className='contenedor-bienvenida'>
      <div className="bienvenida-info">
        <img src={logo} className="bienvenida-logo" alt="logo" />
        <h1 className='titulo-bienvenida'>EP Match</h1>
        <h2 className='subtitulo-bienvenida'>Conocer gente nueva y buscar entretenimientos</h2>
      </div>
      <div className='contiene-botones'>
        <button type="button" className="boton-bienvenida2" onClick={redirectToRegister}>
          <img src={iconoRegistro} alt="icono" className="icono" />
          <p className="boton-texto">&nbsp;&nbsp;REGISTRARSE</p>
        </button>
        <button type="button" className="boton-bienvenida1" onClick={redirectToLogin}>
          <img src={iconoLogin} alt="icono" className="icono" />
          <p className="boton-texto">&nbsp;&nbsp;INICIAR SESION</p>
        </button>
      </div>
      <div className="linea"></div>
      <img src={bienvenidaArriba} className="bienvenidaArriba" alt="bienvenida" />
      <img src={bienvenidaAbajo} className="bienvenidaAbajo" alt="bienvenida" />
    </div>
  );
}


  export default Inicio;