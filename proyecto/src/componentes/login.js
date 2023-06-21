import React from 'react';
import '../stylesheet/login.css';
import { Link } from 'react-router-dom';
import imagenLogin from "../imagenes/imagen-login.png";
import iconoLogin from '../bienvenida/imagenes/icono-login.png';
import { useNavigate } from 'react-router-dom';

export default function LoginPage(){
  const history = useNavigate();

  const redirectToAnotherRoute = () => {
    history('/');
  };

  return(
    <div className='contenedor-login'>
      <img className="img-login" src={imagenLogin} alt="login"></img>
      <div className='info'>
       
        <h1 className='titulo'>INICIO DE SESIÓN
          <hr className='barra-abajo'></hr>
        </h1>
        <div className='contenedor-texto-login'>
          <input className='input-login'type='text' placeholder="Nombre de usuario"></input>
          <hr className='barra-input'></hr>
          <input className='input-login'type='password' placeholder="Contraseña"></input>
          <hr className='barra-input'></hr>
          <h5>No tienes cuenta? <Link to="/register">Registrate</Link></h5>
        </div>
        {/* <a>Olvidé mi contraseña</a> */}
        <button type="button" className="boton" onClick={redirectToAnotherRoute}>
          <img src={iconoLogin} alt="icono" className="icono" /> 
          <p className="boton-texto">&nbsp;INICIAR SESION</p>
        </button>
      </div>
    </div>
  );
}
