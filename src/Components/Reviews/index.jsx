import React from 'react'
import { Section, Container, Cards } from './style.js'
import Person1 from '../../assets/person1.jpg'
import Person2 from '../../assets/person2.jpg'
import Person3 from '../../assets/person3.jpg'

function Review() {

    return (
        <>
            <Section>
                <p>O que nossos clientes estão dizendo...</p>
                <h2>Depoimentos</h2>
                <Container>
                    <Cards>
                        <img src={Person1} alt="foto cliente" />
                        <h3>Lilian</h3>
                        <p>"Trabalhar com a Gibellini Traduzioni foi uma excelente experiência. A equipe foi extremamente profissional e entregou traduções precisas e de alta qualidade, sempre dentro do prazo. Recomendo fortemente seus serviços!"</p>
                    </Cards>
                    <Cards>
                        <img src={Person2} alt="foto cliente" />
                        <h3>Nathália</h3>
                        <p>"Trabalhar com a Gibellini Traduzioni foi uma excelente experiência. A equipe foi extremamente profissional e entregou traduções precisas e de alta qualidade, sempre dentro do prazo. Recomendo fortemente seus serviços!"</p>
                    </Cards>
                    <Cards>
                        <img src={Person3} alt="foto cliente" />
                        <h3>Cristina</h3>
                        <p>"Trabalhar com a Gibellini Traduzioni foi uma excelente experiência. A equipe foi extremamente profissional e entregou traduções precisas e de alta qualidade, sempre dentro do prazo. Recomendo fortemente seus serviços!"</p>
                    </Cards>
                </Container>
            </Section>
        </>
    )
}

export default Review