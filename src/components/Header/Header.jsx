import React from 'react'
import { Link } from 'react-scroll'
import Logo from '../../assets/logo.png'
import './style.css'

function Header ()
{
  return (
    <header className='header'>
      <img src={ Logo } alt="Logo" className='logo' />
      <nav className='menu'>
        <Link className='link' to='/' >Home</Link>
        <Link className='link' to='/' >Programas</Link>
        <Link className='link' to='/' >Horários</Link>
        <Link className='link' to='/' >Planos</Link>
        <Link className='link' to='/' >Termimonologia</Link>

      </nav>
    </header>
  )
}

export default Header