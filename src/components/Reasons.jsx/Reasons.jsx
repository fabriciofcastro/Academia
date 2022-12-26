import React from 'react'
import './style.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'


export default function Reasons ()
{
  return (
    <div className='reasons' id='reasons'>
      <div className='left-r'>
        <img src={ image1 } alt="" />
        <img src={ image2 } alt="" />
        <img src={ image3 } alt="" />
        <img src={ image4 } alt="" />
      </div>
      <div className='right-r'>
        <span>Algumas Razões</span>

        <div>
          <span className='stroke-text'> porque </span>
          <span>nos escolher?</span>
        </div>

        <div className='details-r'>
          <div>
            <img src={tick } alt="" />
            <span>MAIS DE 140+ TREINADORES ESPECIALIZADOS</span>
          </div>
          <div>
            <img src={tick } alt="" />
            <span>TREINE MAIS INTELIGENTE E MAIS RÁPIDO DO QUE ANTES</span>
          </div>
          <div>
            <img src={tick } alt="" />
            <span>APTIDÃO CONFIÁVE</span>
          </div>
          <div>
            <img src={tick } alt="" />
            <span>PROGRAMA GRATUITO PARA NOVOS MEMBROS</span>
          </div>
        </div>
        <span style={{
          color: 'var(--gray)',
          fontWeight: '700',
          fontSize: "2.3rem",
          lineHeight: "4rem",
        }} >
        NOSSA PARCERIA
        </span>

        <div className='partners'>
          <img src={nb} alt="nb" />
          <img src={nike} alt="nike" />
          <img src={adidas} alt="adidas" />
        </div>

      </div>
    </div>
  )
}
