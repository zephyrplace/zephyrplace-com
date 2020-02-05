import React from 'react'
import logo from '../assets/svg/Caminho 1.svg'
import zephyrplace from '../assets/svg/Grupo 57.svg'

export function Menu () {
  return (
    <div className='flex justify-between'>
      <div className='flex justify-around'>
        <img src={logo} className='flex-1' alt='logo' />
        <img src={zephyrplace} className='flex-1 ml-10' alt='logo' />
      </div>
      <div className='flex flex-auto justify-around items-center'>
        <a className='text-white text-lg font-bold'>HOME</a>
        <a className='text-white text-lg font-bold'>SOBRE NÓS</a>
        <a className='text-white text-lg font-bold'>SERVIÇOS</a>
        <a className='text-white text-lg font-bold'>BLOG</a>
        <a className='text-white text-lg font-bold'>CONTATO</a>
      </div>
    </div>
  )
}
