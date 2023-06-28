import '../stylesheet/login.css';
import { Link } from 'react-router-dom';
import imagenRegistro from "../imagenes/imagen-registro.png";
import iconoRegistro from '../bienvenida/imagenes/icono-registro.png';
import { useNavigate } from 'react-router-dom';
import ojito from  "../bienvenida/imagenes/ojo.png";
import React, { useState } from 'react';

export default function RegisterPage(){

  const history = useNavigate();

  const redirectToAnotherRoute = () => {
    history('/');
  };

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  
  return(
    <div className='contenedor-login'>
      <img className="img" src={imagenRegistro} alt="registro"></img>
      <div className='info'>
        <h1 className='titulo'>REGISTRO
          <hr className='barra-abajo2'></hr>
        </h1>
        <div className='contenedor-texto-login'>
          <input className='input-login' type='mail' placeholder="Email"></input>
          <hr className='barra-input'></hr>
          <input className='input-login' type='number' placeholder="Teléfono"></input>
          <hr className='barra-input'></hr>
          <input className='input-login' type='text' placeholder="Nombre de usuario"></input>
          <hr className='barra-input'></hr>
          <div>
            <input
              className='input-login-contra'
              type={showPassword ? 'text' : 'password'}
              value={password}
              placeholder='Contraseña'
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              src={ojito} classname='ojo'
              alt="Mostrar contraseña"
              onClick={handleTogglePassword}
            />
          </div>
          <hr className='barra-input'></hr>
          <h5>Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></h5>   
        </div>
        <button type="button" className="boton" onClick={redirectToAnotherRoute}>
          <img src={iconoRegistro} alt="icono" className="icono" />
          <p className="boton-texto">&nbsp;&nbsp;REGISTRARSE</p>
        </button>
       </div>
     </div>
   );
}
  