import React from 'react'
import Larissa from '../../assets/larissa.webp'
import { Section, Image, ContainerText, Infos } from './style.js'

function LarissaSection() {

    return (
        <>
            <Section>
                <div>
                    <Image src={Larissa} alt="foto Larissa" />
                </div>
                <ContainerText>
                    <Infos>
                        <p>Quem sou eu?</p>
                        <h2>Larissa Matos</h2>
                        <h3>Tradutora</h3>
                        <p>Sou tradutora apaixonada pelo que faço, sempre buscando novos desafios e aprendizados. Como boa libriana, valorizo o equilíbrio em todas as áreas da minha vida, seja no trabalho ou nos momentos de lazer. Casada e sempre pronta para embarcar em uma nova viagem, adoro explorar novos lugares e culturas. Nos momentos de descontração, cantar no chuveiro é minha terapia, assim como não recuso um bom café quentinho para recarregar as energias.</p>
                    </Infos>
                </ContainerText>
            </Section>
        </>
    )
}

export default LarissaSection