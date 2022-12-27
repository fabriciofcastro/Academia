import React from 'react'
import './style.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import { v4 as id } from 'uuid';

export default function Plano ()
{
  
  return (
    <div className='plans-container'>
    <div className='blur plans-blur-1'></div>
    <div className='blur plans-blur-2'></div>
      <div className='programs-header' style={ {
        gap: '2rem',

      } }>
        <span>PRONTO PARA COMEÇAR</span>
        <span>SUA JORNADA
        </span>
        <span className='stroke-text'>AGORA CONOSCO</span>
      </div>

      <div className='plans'>
        { plansData.map( (plan) => (
          <div className='plan' key={id()}>
            { plan.icon }
            <span>{ plan.name }</span>
            <span>{ plan.price }</span>

            <div className='features'>
              { plan.features.map( ( feature ) => (
                <div className='feature' key={id()}>
                  <img src={ whiteTick } alt="" />
                  <span >{ feature }</span>
                </div>
              ) ) }
            </div>

            <div>
              <span>Veja mais benefícios</span>
            </div>
            <button className='btn'>Saber Mais</button>
          </div>
        ) ) }
      </div>
    </div>
  )
}
