import React from 'react'
import photo1 from '../assets/image/IMG_0352_1_.jpg'
import photo2 from '../assets/image/IMG_0293.jpg'
import photo3 from '../assets/image/IMG_0363_1_.jpg'

export function AboutUs () {
  return (
    <div className='flex justify-between' style={{ backgroundImage: 'linear-gradient(var(--color-secondary), white' }}>
      <div style={{ minHeight: '693px' }} className='flex flex-1 justify-around relative'>
        <img src={photo3} style={{ width: '394px', height: '344px' }} className='object-scale-down rounded z-30 absolute left-0 opacity-75' alt='photo 3' />
        <img src={photo2} style={{ width: '363px', height: '693px' }} className='object-scale-down rounded z-20 absolute right-0 opacity-75' alt='photo 2' />
        <img src={photo1} style={{ width: '358px', height: '317px' }} className='object-scale-down rounded z-10 absolute left-0 bottom-0 ml-20 opacity-75' alt='photo 1' />
      </div>
      <div className='flex flex-1 flex-col justify-center p-10'>
        <a className='text-primary text-6xl font-bold'>Quem somos?</a>
        <p className='text-2xl'>Somos uma empresa de tecnologia focada no desenvolvimento de softwares mobile e web. Nós da Zephyr Place estamos preparados para transformar sua ideia em realidade!</p>
      </div>
    </div>
  )
}
