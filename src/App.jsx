import React from 'react'
import '../src/styles.css'
import {
  Header,
  Navbar
} from '../src/Components/Header/style'
import Logo from '../src/assets/logo2.webp'
import Italy from '../src/assets/italy.webp'
import Bg from '../src/assets/logo.png'
import { Hero }
  from '../src/Components/HeroSection/style'
import LarissaSection from './components/LarissaSection'
import Serviços from './components/Serviços'
import CardReview from './Components/CardReviews'
import CardServices from './components/CardsServices'

function App() {
  return (
    <body className='body'>
      <Header>
        <img src={Logo} className='logo'></img>
        <Navbar>
          <ul>
            <li>Home</li>
            <li>Quem sou eu</li>
            <li>Serviços</li>
            <li>Avaliações</li>
            <li>Enviar documento</li>
            <li className='contato'>Contato</li>
          </ul>
        </Navbar>
      </Header>
      <Hero>
        <div className='info-hero'>
          <h1>SPECIALISTI IN TRADUZIONI GIURIDICHE ITALIANE</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellendus sequi deserunt qui tempore quisquam id laborum possimus aliquam, voluptatem beatae exercitationem, ex itaque et, ut hic repudiandae fugiat aliquid.</p>

        </div>
        <img src={Italy} className='italy'></img>
      </Hero>
      <LarissaSection />
      <CardServices />
      <Serviços />
      <CardReview />
    </body>
  )
}

export default App
