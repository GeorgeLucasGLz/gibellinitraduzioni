import React from 'react'
<<<<<<<<< Temporary merge branch 1
import LarissaSection from './components/LarissaSection'
import Services from './components/Serviços'
=========
import '../src/styles.css'
import {
  Header,
  Navbar
} from '../src/Components/Header/style'
import Logo from '../src/assets/logo.png'
import Italy from '../src/assets/italy.webp'
import { Hero }
  from '../src/Components/HeroSection/style'
>>>>>>>>> Temporary merge branch 2

function App() {

  return (
    <>
<<<<<<<<< Temporary merge branch 1
      <LarissaSection />
      <Services />
=========
      <Header>
        <img src={Logo} className='logo'></img>
        <Navbar>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>More</li>
          </ul>
        </Navbar>
      </Header>
      <Hero>
        <div className='info-hero'>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellendus sequi deserunt qui tempore quisquam id laborum possimus aliquam, voluptatem beatae exercitationem, ex itaque et, ut hic repudiandae fugiat aliquid.</p>

        </div>
        <img src={Italy} className='italy'></img>
      </Hero>

>>>>>>>>> Temporary merge branch 2
    </>
  )
}

export default App
