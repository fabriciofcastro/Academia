import React, { useState } from 'react'
import style from './style.css'
import { depoimentos } from '../../data/depoimentosData'
import rightArrow from '../../assets/rightArrow.png'
import leftArrow from '../../assets/leftArrow.png'

export default function Depoimentos() {

  const [selecionados, setSelecionados] = useState(() => 0)
  const size = depoimentos.length

  function backImage() {
    selecionados === 0 
    ? setSelecionados(() => size -1)
    : setSelecionados(prev => prev -1 )
  }

  function nextImage() {
    selecionados === size -1
    ? setSelecionados(0 ) 
    : setSelecionados(item => item + 1)
  }

  return (
    <div className='depoimentos'>
      <div className='left-t'>
        <span>Depoimentos</span>
        <span className='stroke-text'>o que estão</span>
        <span>disendo sobre nós</span>
        <span>
          {depoimentos[selecionados].review }
        </span>
        <span style={{
          display: 'flex',
          gap: '1rem',
        }}>
          <span style={{ 
            color: 'var(--orange)'           
          }}>
            {depoimentos[selecionados].name } 
          </span> 
          <span> 
           - { depoimentos[selecionados].status}
          </span>
         
        </span>
       
      </div>

      <div className='right-t'>
      <div></div> {/** quadrado */}
      <div></div> {/** quadrado */}
          <img src={depoimentos[selecionados].image} alt="" />
          <div className='arrows'>
            <img
                onClick={backImage} 
                src={leftArrow} 
                alt="" />
            <img 
                onClick={nextImage}
                src={rightArrow} 
                alt="" />
          </div>
          
      </div>    
    </div>
  )
}
