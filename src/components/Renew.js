import React from 'react'
import photo from '../assets/svg/Renew.svg'

export function Renew () {
  return (
    <div
      className='flex flex-row '
      style={{
        backgroundImage: 'white'
      }}
    >
      <div
        style={{ minHeight: '693px', marginTop: '100px' }}
        className='flex flex-1 justify-around flex-col p-10'
      >
        <img
          src={photo}
          style={{
            width: '500px',
            height: '368px',
            marginTop: '-100px'
          }}
          className=''
          alt='renovar'
        />
      </div>
      <div className='flex flex-1 flex-col justify-center p-10 '>
        <p className='text-2xl'>
          <b>Renove</b> seu aplicativo atual com as<b> melhores</b> tecnologias
          do mercado e mantenha seus negócios no <b>topo</b>!<b> IMPRESSIONE</b>
          !
        </p>
      </div>
    </div>
  )
}
