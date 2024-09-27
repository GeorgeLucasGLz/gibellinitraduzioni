import React from 'react'
import { Section, Container, Cards, Perfil, BgCard } from './style.js'
import Person1 from '../../assets/person1.jpg'
import Person2 from '../../assets/person2.jpg'
import Person3 from '../../assets/person3.jpg'
import BgCards from '../../assets/bg-cards.jpg'


function Review() {

    return (
        <>
            <Section>
                <p>O que nossos clientes estão dizendo...</p>
                <h2>Depoimentos</h2>
                <Container>
                    <Cards>
                        <Perfil src={Person1} alt="foto cliente" />
                        <h3>Lilian</h3>
                        <p>"Trabalhar com a Gibellini Traduzioni foi uma excelente experiência. A equipe foi extremamente profissional e entregou traduções precisas e de alta qualidade, sempre dentro do prazo. Recomendo fortemente seus serviços!"</p>
                        <BgCard src={BgCards} alt="fundo" />
                    </Cards>
                    <Cards>
                        <Perfil src={Person2} alt="foto cliente" />
                        <h3>Nathália</h3>
                        <p>"Trabalhar com a Gibellini Traduzioni foi uma excelente experiência. A equipe foi extremamente profissional e entregou traduções precisas e de alta qualidade, sempre dentro do prazo. Recomendo fortemente seus serviços!"</p>
                        <BgCard src={BgCards} alt="fundo" />
                    </Cards>
                    <Cards>
                        <Perfil src={Person3} alt="foto cliente" />
                        <h3>Cristina</h3>
                        <p>"Trabalhar com a Gibellini Traduzioni foi uma excelente experiência. A equipe foi extremamente profissional e entregou traduções precisas e de alta qualidade, sempre dentro do prazo. Recomendo fortemente seus serviços!"</p>
                        <BgCard src={BgCards} alt="fundo" />
                    </Cards>
                </Container>
            </Section>
        </>
    )
}

export default Review