import React from 'react'
import './style.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Calories from '../../assets/calories.png'
import Heart from '../../assets/heart.png'

function Hero ()
{
  return (
    <div className='hero'>
      <div className='left-h'>
        <Header />
       { /** the-best-ad' */}
        <div className='the-best-ad' >
          <div></div>
          <span>a melhor musculação da cidade</span>
        </div>
         {/** END the-best-ad' */}

         {/** HERO - TEXT */}
        <div className='hero-text' >
          <div>
            <span className='stroke-text'>dê forma</span>
            <span> ao seu </span>
          </div>
          <div>
            <span>corpo ideal</span>
          </div>

          <div>
            <span>
            Aqui iremos ajudá-lo a moldar e projetar seu corpo ideal e viver sua vida ao máximo
            </span>
          </div>
        </div>

        <div className="figures" >
          <div>
            <span>+140</span>
            <span>treiandores expecializados</span>
          </div>
          <div>
            <span>+978</span>
            <span>membros da comunidade</span>
          </div>
          <div>
            <span>+50</span>
            <span>programa de condicionamento físico</span>
          </div>
        </div>


      {/** hero button  */}
        <div className='hero-buttons'>
          <button className='btn'>Iniciar</button>
          <button className='btn'>Saber Mais</button>
        </div>
      </div>  {/** end LEFT-H */}


      <div className='right-h'>
        <button className='btn'>Login</button>

        <div className='heart-rate'>
          <img src={ Heart } alt="imagem coração " />
          <span>Frequência cardíaca</span>
          <span>116 bpm</span>
        </div>

        <img className='hero-image' src={hero_image} alt=" hero image" />
        <img className='hero-image-back' src={hero_image_back} alt="hero image back" />

        <div className='calories' >
          <img src={Calories} alt="Caloriais" />
          <div>
            <span>Caloriais Bunned</span>
            <span> 220 Kcal</span>
          </div>
         
        </div>
      </div> 
      
      
      {/* end div hero*/}
    </div>
  )
}

export default Hero