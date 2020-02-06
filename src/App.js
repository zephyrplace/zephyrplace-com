import React from 'react'
import { Header } from './styled/Header'
import { Menu } from './components/Menu'
import { Create } from './components/Create'
import { Renew } from './components/Renew'
import CardCAP from './components/Card-CAP'
import CardTVM from './components/Card-TVM'
import CardApoyo from './components/Card-APOYO'
import CardBPP from './components/Card-BPP'
import { Button } from './components/button'
import { Here } from './components/Here'

import photo from './assets/svg/Mulher.svg'
import { Waves } from './components/Waves'

function App () {
  return (
    <div>
      <Header>
        <Menu />

        <div className='flex flex-wrap flex-1 items-center'>
          <div className='flex w-full md:w-2/4 lg:w-2/4 xl:w-2/4 p-2'>
            <img
              src={photo}
              className='flex-1 rounded-full object-cover'
              alt='img'
            />
          </div>
          <div className='flex w-full md:w-2/4 lg:w-2/4 xl:w-2/4 flex-col p-2'>
            <div className='flex-1 title text-white'>
              <b>Renove</b> seus aplicativos com as <b>melhores </b>
            tecnologias do mercado e mantenha o seu negócio no <b>topo!</b>
            </div>
            <br />
            <Button> SAIBA MAIS</Button>
          </div>
        </div>
        <Waves />
      </Header>

      <div
        style={{ height: '350vh', marginBottom: 70 }}
        className='flex flex-col items-center mx-auto justify-around'
      >
        <CardCAP />
        <CardTVM />
        <CardBPP />
        <CardApoyo />
      </div>
      <Here />
      <Renew />
      <Create />
    </div>
  )
}

export default App
