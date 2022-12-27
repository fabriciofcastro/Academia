import React from 'react'
import './style.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

export default function Plano ()
{
  return (
    <div className='plans-container'>
      <div className='programs-header' style={ {
        gap: '2rem',

      } }>
        <span>PRONTO PARA COMEÇAR</span>
        <span>SUA JORNADA
        </span>
        <span className='stroke-text'>AGORA CONOSCO</span>
      </div>

      <div className='plans'>
        { plansData.map( (plan, i) => (
          <div className='plan'>
            { plan.icon }
            <span>{ plan.name }</span>
            <span>{ plan.price }</span>

            <div className='features'>
              { plan.features.map( ( feature, i ) => (
                <div className='feature'>
                  <img src={ whiteTick } alt="" />
                  <span key={ i }>{ feature }</span>
                </div>
              ) ) }
            </div>

            <div>
              <span>See more benefits</span>
            </div>
            <button className='btn'>Saber Mais</button>
          </div>
        ) ) }
      </div>
    </div>
  )
}
