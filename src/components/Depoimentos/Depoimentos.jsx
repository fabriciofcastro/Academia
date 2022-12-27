import React, { useState } from 'react'
import style from './style.css'
import { depoimentos } from '../../data/depoimentosData'
import { v4 as id } from 'uuid';
import rightArrow from '../../assets/rightArrow.png'
import leftArrow from '../../assets/leftArrow.png'

export default function Depoimentos() {

  const [selecionados, setSelecionados] = useState(() => 0)
  const size = depoimentos.length

  return (
    <div className='depoimentos'>
      <div className='left-t'>
        <span>Depoimentos</span>
        <span className='stroke-text'>What they</span>
        <span>say about us</span>
        <span>
          {depoimentos[selecionados].review }
        </span>
        <span>
          <span style={{ 
            color: 'var(--orange)'
          }}>
            {depoimentos[selecionados].name}
          </span>
          - {depoimentos[selecionados].status}
        </span>
      </div>

      <div className='right-t'>
      <div></div>
      <div></div>
          <img src={depoimentos[selecionados].image} alt="" />

          <div className='arrows'>
            <img src={leftArrow} alt="" />
            <img src={rightArrow} alt="" />
          </div>
          
      </div>
    </div>
  )
}
