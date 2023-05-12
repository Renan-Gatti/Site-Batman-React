import React from "react";
import './home.css';
import Header from "../../components/header/header";
import Trailer from '../../assets/THE BATMAN – Main Trailer.mp4';
import Footer from "../../components/footer/footer";
import Banner from '../../assets/Banner.jpg';

function Home () {
    return (
       <>
            <Header />

            <img alt="" id="banner" src={Banner}/>
            <div className="content-container">
                <div className="content">
                    <video controls id="trailer">
                        <source src={Trailer} />
                    </video>
                    <div className="sinopse">
                        <p className="texto-sinopse">Batman se aventura no submundo de Gotham City quando um assassino sádico deixa para trás um rastro de pistas enigmáticas. À medida que as evidências começam a se aproximar de casa e a escala dos planos do perpetrador se torna clara, ele deve forjar novos relacionamentos, desmascarar o culpado e trazer justiça ao abuso de poder e à corrupção que há muito atormentam a metrópole.</p>
                        <button id="button-home">Comprar ingresso</button>
                    </div>
                </div>
            </div>

            <div className="cards-container">
                <div className="cards-content">
                    <div className="card banner-1">Robert Pattinson - Batman</div>
                    <div className="card banner-2">Zoe Kravitz - Mulher Gato</div>
                    <div className="card banner-3">Jeffrey Wright - Gordon</div>
                </div>
            </div>

            <Footer />
       </>
    )
}

export default Home;

