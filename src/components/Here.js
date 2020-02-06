import React from 'react'
import photo from '../assets/svg/Mulher.svg'

export function Here () {
  return (
    <div
      className='flex flex-row '
      style={{
        backgroundImage: 'white',
        height: '200px'
      }}
    >
      <div
        style={{ marginLeft: '50px' }}
        className='flex flex-1 flex-col justify-center p-10 '
      >
        <p className='text-2xl text-right'>
          Aqui na <b>Zephyr Place</b> fazemos a sua ideia se tornar real! Nossa
          experiência é voltada para criação de aplicativos mobile, sempre
          visando o melhor custo benefício, agilidade e perfeição em cada
          desenvolvimento. Podemos ajudar você a alcançar suas metas!
        </p>
      </div>
      <div
        style={{ minHeight: '100px', marginTop: '100px', marginLeft: '200px' }}
        className='flex flex-1 justify-around flex-col '
      >
        <img
          src={photo}
          style={{
            width: '400px',
            height: '368px',
            marginTop: '-100px'
          }}
          className=''
          alt='renovar'
        />
      </div>
    </div>
  )
}
