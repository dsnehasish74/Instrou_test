import React,{useEffect} from 'react'
import './nav.css'
import Logo1 from '../images/logo1.png'
import Logo2 from '../images/logo2.png'

export default function Nav(){
    const [scrolled,setScrolled]=React.useState(false);
        const handleScroll=() => {
            const offset=window.scrollY;
            if(offset > 200 ){
            setScrolled(true);
            }
            else{
            setScrolled(false);
            }
        }

        useEffect(() => {
            window.addEventListener('scroll',handleScroll)
        })
        let navbarClasses=['navbar'];
        if(scrolled){
            navbarClasses.push('scrolled');
        }
    return(
        <div className="nav-container">
            <div className="nav1">
            <nav className="container nav1_container">
                <a href="#"><img src={Logo1} alt="Atlassian" className="logo1"></img></a>
                <ul className="nav1__links1">
                    <li className="link1"><a href="#">Products<i class="fas fa-angle-down"></i></a></li>
                    <li className="link1"><a href="#">For teams<i class="fas fa-angle-down"></i></a></li>
                    <li className="link1"><a href="#">Support<i class="fas fa-angle-down"></i></a></li>
                </ul>
                <div className="nav__mid"></div>
                <ul className="nav1__links2">
                    <li className="link1 buy_link"><a href="#">Buy now</a></li>
                    <li><i class="fas fa-search"></i></li>
                    <li className="login_link"><a href="#">Log in</a></li>
                </ul>
            </nav>
            </div>

            <div className={navbarClasses.join(" ")}>
            <div className="nav2">
            <nav className="container nav1_container">
                <a href="#"><img src={Logo2} alt="Atlassian" className="logo1"></img></a>
                <ul className="nav1__links1">
                    <li className="link2"><a href="#">Feature</a></li>
                    <li className="link2"><a href="#">Project Guide</a></li>
                    <li className="link2"><a href="#">Pricing</a></li>
                    <li className="link2"><a href="#">Enterprice</a></li>
                </ul>
                <div className="nav__mid"></div>
                <div>
                    <button className="nav__button">Get it free</button>
                </div>
            </nav>
            </div>
            </div>

        </div>
    );
}