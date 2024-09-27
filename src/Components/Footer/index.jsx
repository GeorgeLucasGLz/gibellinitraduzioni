import React from "react";
import { SectionFooter } from './style.js'
import Logo from '../../assets/logo2.webp'

function Footer() {

    return (
        <>
            <SectionFooter>
                <div>
                    <img src={Logo} alt="logo" />
                </div>

            </SectionFooter>
        </>
    )
}

export default Footer