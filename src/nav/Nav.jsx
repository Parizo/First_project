import './Nav.css'




const Nav = () => {
    return (
        <div>

            <div class='header sticky'>

                <img class='logo' src='/img/logo.png' />
                <nav class='main-nav'>
                    <ul class="main-nav-list">
                        <li><a class="main-nav-link1" href="#">PAGRINDINIS</a> </li>
                        <li><a class="main-nav-link2" href="#cta">PREKĖS</a> </li>
                        <li><a class="main-nav-link3" href="#cta1">ATSILIEPIMAI</a> </li>
                        <li><a class="main-nav-link4" href="#cta2">KONTAKTAI</a> </li>
                        <li><a className="main-nav-link5" href="https://colorlib.com/etc/regform/colorlib-regform-32/">REGISTRACIJA</a> </li>


                    </ul>

                </nav>
            </div>
        </div>

    )
}

export default Nav
