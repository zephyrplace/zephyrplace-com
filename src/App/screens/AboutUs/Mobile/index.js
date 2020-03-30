import React from 'react'
import Menu from '../../../../components/Menu'
import Footer from '../../../../components/Footer'
import {
  ContainerBig,
  Container,
  ContainerImg,
  P,
  P2,
  P3,
  Container2,
  Div1,
  Div2,
  Div3,
  Image
} from './styles'

import photo from '../../../../assets/image/sobre/img_sobre.png'
import Equipe1 from '../../../../assets/image/Equipe1/Equipe1.jpg'
import Equipe2 from '../../../../assets/image/Equipe2/Equipe2.jpg'
import Equipe3 from '../../../../assets/image/Equipe3/Equipe3.jpg'
import Equipe4 from '../../../../assets/image/Equipe4/Equipe4.jpg'
import Equipe5 from '../../../../assets/image/Equipe5/Equipe5.jpg'
import Equipe6 from '../../../../assets/image/Equipe6/Equipe6.jpg'

function MobileAboutUs () {
  return (
    <ContainerBig>
      <Menu />
      <Container>
        <P style={{ marginTop: '10vh' }}>
          <strong>Conheça </strong> nossa história!
        </P>
        <img
          style={{ width: '70vw', marginTop: '10vh' }}
          src={photo}
          alt='foto'
        />
      </Container>
      <Container2>
        <div style={{ width: '80vw' }}>
          <Div1 style={{}} className='flex flex-row text-center'>
            <P2 className='p-3 '>
              <b>Como a ZP surgiu </b>
            </P2>
          </Div1>
          <div className='flex flex-row'>
            <P3 className='p-3 text-center'>
              A Zephyr Place surgiu há alguns anos atrás quando um time de
              <b> pessoas revolucionárias </b>decidiu criar algo que ajudasse
              tanto as grandes empresas quanto os menores empreendedores a
              crescer e expandir os seus horizontes através das melhores
              tecnologias do mercado que serviriam de base para tudo o que ainda
              estava por vir.
            </P3>
          </div>
        </div>
        <div style={{ width: '70vw', marginTop: '10vh' }}>
          <Div2 style={{}} className='flex flex-row text-center '>
            <P2 className='p-3 '>
              <b>Nossa missão </b>
            </P2>
          </Div2>
          <div className='flex flex-row'>
            <P3 className='p-3 text-center'>
              <b>Renovar, Inovar e Impressionar! </b> Trabalhamos para que os
              nossos clientes tenham um grande upgrade nos seus projetos atuais
              com as melhores tecnologias disponíveis no mercado
            </P3>
          </div>
        </div>
        <div style={{ width: '70vw', marginTop: '10vh' }}>
          <Div3 style={{}} className='flex flex-row text-center'>
            <P2 className='p-3 '>
              <b>Nossa visão </b>
            </P2>
          </Div3>
          <div className='flex flex-row'>
            <P3 className='p-3 text-center'>
              Queremos ampliar os nossos negócios e ajudar cada vez mais pessoas
              através da tecnologia, que tem se tornado um dos motores da nossa
              sociedade atual, para que todos tenham a oportunidade de
              <b> crescer e evoluir!</b>
            </P3>
          </div>
        </div>
      </Container2>
      <ContainerImg>
        <div
          style={{
            padding: '5vh 5vw',
            width: '100%',
            justifyContent: 'space-between'
          }}
          className='flex flex-row'
        >
          <Image src={Equipe1} />
          <Image src={Equipe2} />
        </div>
        <div
          style={{
            padding: '5vh 5vw',
            width: '100%',
            justifyContent: 'space-between'
          }}
          className='flex flex-row'
        >
          <Image src={Equipe3} />
          <Image src={Equipe6} />
        </div>
        <div
          style={{
            padding: '6vh 5vw',
            width: '100%',
            justifyContent: 'space-between'
          }}
          className='flex flex-row'
        >
          <Image src={Equipe4} />
          <Image src={Equipe5} />
        </div>
      </ContainerImg>
      <Footer />
    </ContainerBig>
  )
}
export default MobileAboutUs
