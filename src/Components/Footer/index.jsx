import React from "react";
import { SectionFooter, Container } from './style.js'
import Logo from '../../assets/logo2.webp'

function Footer() {

    return (
        <>
            <SectionFooter>
                <Container>
                    <div>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div>
                        <p>suportecontef@gmail.com</p>
                        <p>(75) 8126-7563</p>
                    </div>
                </Container>
                <p>Copyright © 2024 Gibellini Traduzioni, 55.033.801/0001-45. Todos os direitos reservados.</p>
                <a target="_blank" href="https://www.freelings.com.br/">Desenvolvido por Freelings Co®.</a>
            </SectionFooter>

        </>
    )
}

export default Footer