import React from 'react'
import './Hero.css'




const Hero = () => {
    return (
        <div >
            <section className="section-hero">
                <div className="hero">
                    <div className="hero-text-box">
                        <h1 className="heading-primary"> Prekės.lt – elektroninė parduotuvė, savo veiklą pradėjusi dar 2007 metais
                        </h1>

                        <p className="hero-description" >
                            Galime pasidžiaugti jog per šį laikotarpį pavyko užmegzti santykius su daugiau kaip 500 prekybos
                            partnerių ir dėl šios priežasties savo klientams galime pasiūlyti aukštos kokybės, žinomų ir savo
                            vardą
                            rinkoje jau pelniusių gamintojų prekes itin gera kaina.

                        </p >
                        <a href="https://colorlib.com/etc/regform/colorlib-regform-32/" className="btn btn--full " > Registruokis</a >
                        <a href="#cta1" className="btn btn--outline">Sužinok daugiau&darr;</a >
                        <div class="customers">
                            <div classname="customers-img" >
                                <img src='/img/customers/46.jpg' style={{ width: 80, height: 80, borderRadius: 80 / 2, }} />
                                <img src="/img/customers/52.jpg" style={{ width: 80, height: 80, borderRadius: 80 / 2, }} />
                                <img src="/img/customers/63.jpg" style={{ width: 80, height: 80, borderRadius: 80 / 2, }} />
                                <img src="/img/customers/87.jpg" style={{ width: 80, height: 80, borderRadius: 80 / 2, }} />




                            </div>
                            <p classname="customers-text"><div>9 iš 10</div> klientų mus rekomenduoja ir kitiems! </p>
                        </div>
                    </div >

                    <div classname="hero-img-box">
                        <img src="/img/hero1.png" classname="hero-png" />

                    </div>

                </div >

            </section >




        </div >
    )
}

export default Hero
