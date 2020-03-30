import React from 'react'
import Menu from '../../../../components/Menu'
import Footer from '../../../../components/Footer'
import { Header } from '../../../../styled/Header'
import { Waves } from '../../../../components/Waves'
import { Link } from 'react-scroll'
import { Button } from '../../../../components/button'
import { Here } from '../../../../components/Heremobile/Heremobile'
import {
  Container,
  HeadContainer,
  ContainerDown,
  Img,
  TextTitle,
  Section,
  Image,
  Tools,
  P,
  P2
} from './styles'

import photo from '../../../../assets/svg/Mulher-lampada.svg'
import section1 from '../../../../assets/svg/Section1.svg'
import section2 from '../../../../assets/svg/Section2.svg'
import section3 from '../../../../assets/svg/Section3.svg'
import section4 from '../../../../assets/svg/Section4.svg'
import section5 from '../../../../assets/svg/Section5.svg'
import section6 from '../../../../assets/svg/Section6.svg'
import Ai from '../../../../assets/image/AI/balao_illustrator.png'
import Git from '../../../../assets/image/Git/balao_git.png'
import Node from '../../../../assets/image/Node/balao_node.png'
import Reacts from '../../../../assets/image/Balao/balao_react.png'
import XD from '../../../../assets/image/XD/balao_xd.png'
import StickyHeader from 'react-sticky-header'
import 'react-sticky-header/styles.css'
function MobileHome () {
  return (
    <div>
      <Header>
        <StickyHeader header={<Menu />}> </StickyHeader>
        <HeadContainer>
          <TextTitle>
            <strong>Renove</strong> seus aplicativos com as
            <strong> melhores </strong>
            tecnologias do mercado e mantenha o seu negócio no
            <strong> topo!</strong>
          </TextTitle>
          <Link to='middle' smooth duration={500}>
            <Button> SAIBA MAIS</Button>
          </Link>
          <Img src={photo} styleclassName='object-cover' alt='img' />
        </HeadContainer>
        <Waves />
      </Header>
      <Container>
        <Here />
        <div style={{ height: '0', marginBottom: '-2vh' }} id='middle' />
        <Section className='flex flex-col p-2'>
          <P>NOSSAS ETAPAS BÁSICAS</P>
          <div
            style={{
              marginTop: '10vh',
              backgroundColor: 'white',
              width: '100vw',
              minHeight: '35vh',
              alignItems: 'center'
            }}
            className='flex flex-col'
          >
            <div>
              <Image src={section1} alt='Mobile' />
            </div>
            <div className='flex flex-col'>
              <p
                style={{ fontSize: '5vh', fontWeight: 600 }}
                className=' mx-8 p-3 text-center'
              >
                1. Descubra
              </p>
              <p style={{ fontSize: '3vh' }} className=' mx-8 p-3 text-center'>
                O primeiro passo é descobrir o problema que precisa ser resolvido
              </p>
            </div>
          </div>
          <div
            className='flex flex-col'
            style={{
              minHeight: '35vh',
              alignItems: 'center',
              width: '100vw'
            }}
          >
            <div>
              <Image src={section2} alt='Mobile' />
            </div>
            <div className='flex flex-col'>
              <p
                style={{ fontSize: '5vh', fontWeight: 600 }}
                className=' mx-8 p-3 text-center'
              >
                2. Desenvolva um MVP
              </p>
              <p style={{ fontSize: '3vh' }} className=' mx-8 p-5 text-center'>
                Um MVP é um produto com um conjunto mínimo de recursos que
                resolve um problema definido
              </p>
            </div>
          </div>
          <div
            className='flex flex-col'
            style={{
              backgroundColor: 'white',
              minHeight: '35vh',
              alignItems: 'center',
              width: '100vw'
            }}
          >
            <div>
              <Image src={section3} alt='Mobile' />
            </div>
            <div className='flex flex-col'>
              <p
                style={{ fontSize: '5vh', fontWeight: 600 }}
                className=' mx-10 p-3 text-center'
              >
                3. Estabeleça o MVP
              </p>
              <p style={{ fontSize: '3vh' }} className=' mx-10 p-5 text-center'>
                Quando o produto estiver pronto para ser amplamente distribuido,
                ele já terá clientes estabelecidos
              </p>
            </div>
          </div>
          <div
            className='flex flex-col'
            style={{
              mineHight: '35vh',
              alignItems: 'center',
              width: '100vw'
            }}
          >
            <div>
              <Image src={section4} alt='Mobile' />
            </div>
            <div className='flex flex-col'>
              <p
                style={{ fontSize: '5vh', fontWeight: 600 }}
                className=' mx-10 p-3 text-center'
              >
                4. Avalie seus resultados
              </p>
              <p
                style={{ fontSize: '3vh' }}
                className=' mx-10 p-3 text-center '
              >
                Medir as reações e comportamentos dos clientes em relação aos
                produtos construídos e, em seguida, decidir se deve perseverar ou
                dinamizar a ideia
              </p>
            </div>
          </div>
          <div
            className='flex flex-col'
            style={{
              backgroundColor: 'white',
              alignItems: 'center',
              minHeight: '35vh',
              width: '100vw'
            }}
          >
            <div>
              <Image src={section5} alt='Mobile' />
            </div>
            <div className='flex flex-col'>
              <p
                style={{ fontSize: '5vh', fontWeight: 600 }}
                className=' mx-10 p-3 text-center'
              >
                5. Aprenda
              </p>
              <p style={{ fontSize: '3vh' }} className=' mx-10 p-5 text-center'>
                O objetivo de um MVP é a maneira mais barata de testar sua
                solução e ajudar a iniciar o processo de aprendizado o mais
                rápido possível
              </p>
            </div>
          </div>
          <div
            className='flex flex-col'
            style={{
              minHeight: '35vh',
              alignItems: 'center',
              width: '100vw'
            }}
          >
            <div>
              <Image src={section6} alt='Mobile' />
            </div>
            <div className='flex flex-col'>
              <p
                style={{ fontSize: '5vh', fontWeight: 600 }}
                className=' mx-10 p-3 text-center'
              >
                6. Evolua sua solução
              </p>
              <p style={{ fontSize: '3vh' }} className=' mx-10 text-center'>
                Expanda para o mercado e atraia mais usuários, saiba que você
                pode realmente investir em uma ideia testada e validada
              </p>
            </div>
          </div>
        </Section>
        <ContainerDown>
          <P>FERRAMENTAS QUE USAMOS</P>
          <Tools style={{ marginTop: '20vh' }} background={Reacts}>
            <P2>
              O <strong> React Native </strong>é uma biblioteca que permite
              criar aplicativos para celular usando apenas JavaScript. Ele usa o
              mesmo design que o React.
            </P2>
          </Tools>
          <Tools background={Node}>
            <P2>
              O <b> Node.JS </b> pode ser definido como um ambiente de execução
              JavaScript server-side. Isso significa que com o Node.JS é
              possível criar aplicações JavaScript.
            </P2>
          </Tools>
          <Tools background={Git}>
            <P2>
              <b>Git </b> é um sistema de controle de versões, usado
              principalmente no desenvlvimento de software, mas pode ser usado
              para registrar o histórico de adições de qualquer arquvio.
            </P2>
          </Tools>
          <Tools background={XD}>
            <P2>
              O <b> Adobe XD </b> é uma ferramenta de desing de experiência do
              usuário baseada em vetor para aplicativos Web, e aplicativos
              móveis.
            </P2>
          </Tools>
          <Tools background={Ai}>
            <P2>
              O <b> Adobe Ilustrator </b> é um programa utilizado por designers
              gráficos com foco em ilustrações. Ele permite uma interação maior
              entre os usuários e desenvolvedores.
            </P2>
          </Tools>
        </ContainerDown>
      </Container>
      <Footer />
    </div>
  )
}

export default MobileHome
