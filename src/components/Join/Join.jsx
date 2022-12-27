import React, { useRef } from 'react'
import './style.css'
import emailjs from '@emailjs/browser';

export default function Join ()
{

  const form = useRef()

  const enviarEmail = ( e ) =>
  {
    e.preventDefault();

    emailjs.sendForm( 'service_nsi3loz', 'template_xycq2xd', form.current, '0x7APxLsm5rVSW5Av' )
      .then( ( result ) =>
      {
        console.log( result.text );
      }, ( error ) =>
      {
        console.log( error.text );
      } );
  };

  return (
    <div className='join' id='join-us'>
      <div className='left-j'>
        <hr />
        <div>
          <span className='stroke-text'>Leia para </span>
          <span>subir de nível</span>
        </div>
        <div>
          <span>Seu corpo </span>
          <span>na melhor <span className='stroke-text'>forma</span></span>
        </div>

      </div>
      <div className='right-j'>
        <form ref={ form } className='email-container' onSubmit={ enviarEmail }>
          <input type="email" id="" name='user_email' placeholder='Digite seu e-mail' />
          <button className='btn btn-j'>Assinar agora</button>
        </form>
      </div>
    </div>
  )
}
