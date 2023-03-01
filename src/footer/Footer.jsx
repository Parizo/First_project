import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div class='allFooter'>
            <div class='containerGrid' id='cta2'>
                <div class='faddress-col'><img class='logo' src='/img/logo.png' />
                    <p class='copyright'> 
                        Copyright &copy; 2023 by A.M, Inc. All rights reserved.
                    </p>

                </div>
                <div class='nav-col'>
                    <p class='nav1'>Contact us </p>
                    <address class='footer-nav'>
                        <p>Laisvės pr. 75, Vilnius, LT-06144</p>
                        <p>
                            <a class='footer-link' href='tel:+370 504 5894'>+37060133334</a><br></br>
                            <a class='footer-link' href='mailto:prekes@prekes.com'>prekes@prekes.lt</a>
                        </p>
                    </address>
                </div>
                <div class='nav-col'>Vartotojas

                    <ul class='footer-nav'>
                        <li><a class='footer-link' href='#'>Registruotis</a></li>
                        <li><a class='footer-link' href='#'>Prisijungti</a></li>
                        <li><a class='footer-link' href='#'>iOS app</a></li>
                        <li><a class='footer-link' href='#'>Android app</a></li>
                    </ul>
                </div>

                <div class='nav-col'>Įmonė

                    <ul class='footer-nav'>
                        <li><a class='footer-link' href='#'>Apie</a></li>
                        <li><a class='footer-link' href='#'>Verslui</a></li>
                        <li><a class='footer-link' href='#'>Partneriai</a></li>
                        <li><a class='footer-link' href='#'>Karjiera</a></li>
                    </ul>
                </div>

                <div class='nav-col'>Resusrsai

                    <ul class='footer-nav'>
                        <li><a class='footer-link' href='#'>Užsakymu vieta</a></li>
                        <li><a class='footer-link' href='#'>Pagalbos centras</a></li>
                        <li><a class='footer-link' href='#'>Privatumas ir terminai</a></li>
                        <li><a class='footer-link' href='#'>Istorija</a></li>
                    </ul>
                </div>



            </div>
        </div>

    )
}

export default Footer
