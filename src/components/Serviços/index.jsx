import React from 'react'
import Motivo1 from '../../assets/motivo1.jpg'
import Motivo2 from '../../assets/motivo2.jpg'
import Motivo3 from '../../assets/motivo3.jpg'
import { Section, Image1, Image2, Image3 } from './style.js'

function Services() {

    return (
        <>
            <Section>
                <h2>3 motivos para escolher a <span>Gibellini</span></h2>
                <h2>para traduzir seus documentos</h2>
                <div>
                    <Image1 src={Motivo1} alt="" />
                    <Image2 src={Motivo2} alt="" />
                    <Image3 src={Motivo3} alt="" />
                </div>
            </Section>
        </>
    )
}

export default Services