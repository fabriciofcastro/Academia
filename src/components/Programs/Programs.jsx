import React from 'react'
import './style.css'
import { programsData } from '../../data/programsData'
import RighArrow from '../../assets/rightArrow.png'
import { v4 as id } from 'uuid';

export default function Programs ()
{
  return (
    <div className='programs' id='programs'>
      <div className='programs-header'>
        <span className='stroke-text'>Explore nosso</span>
        <span>Programa</span>
        <span className='stroke-text'>para formar</span>
      </div>   
  
      <div className='program-categories'>
        { programsData.map( programs => (
          <div className='category' key={id()}>
            { programs.image }
            <span> { programs.heading }</span>
            <span>{ programs.details }</span>
            <div className='join-now'>
              <span>Saber Mais</span>
              <img src={ RighArrow } alt="" />
            </div>
          </div>
        ) ) }
      </div>
    </div>
  )
}
