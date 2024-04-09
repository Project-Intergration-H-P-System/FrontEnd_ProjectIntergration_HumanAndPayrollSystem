import React from 'react'
import "./Header.css";
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle}
 from 'react-icons/bs'

function Header() {
  return (
    <header className='header'>
        <div className='header-left'>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/>
        </div>
    </header>
  )
}

export default Header