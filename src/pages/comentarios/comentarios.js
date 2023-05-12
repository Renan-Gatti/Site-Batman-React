import React from "react";
import './comentarios.css';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import imgCmt01 from '../../assets/coment_1.png';
import imgCmt02 from '../../assets/coment_2.png';
import imgCmt03 from '../../assets/coment_3.png';
import bannerCmts from '../../assets/download__3_-removebg-preview.png';

function Comentarios () {
    return (
        <div>

            <Header />

            <div className="master-container">
                <div className="coments-content-container">
                    <div className="coment-container">
                        <div className="coment cmt01">
                            <img alt="" id="img-cmt01" src={imgCmt01} />
                            <p className="txt cmt01" >Desde a primeira cena em si, fica claro a quantidade de pensamento, trabalho e criatividade que foram necessários para a realização deste filme. Este filme vai assustá-lo, envolvê-lo em seu mistério, excitá-lo com sua ação e surpreendê-lo com seu compromisso de contar uma história verdadeiramente sombria e corajosa sobre a corrupção em Gotham.</p>
                        </div>
                        <div className="coment cmt02">
                            <img alt="" id="img-cmt02" src={imgCmt02} />
                            <p className="txt cmt02">O Batman foi um filme que valeu a pena premiar com cinco estrelas. Eu não poderia culpá-lo. É fascinante e cru, com um apelo mágico e um charme cativante. Normalmente não gosto do gênero, mas fiquei tão surpreso com a beleza desse filme que achei que merecia cinco estrelas.</p>
                        </div>
                        <div className="coment cmt03">
                            <img alt="" id="img-cmt03" src={imgCmt03} />
                            <p className="txt cmt03">O Batman é um filme fantástico. Este filme realmente explora o Batman de uma maneira muito diferente. Robert Pattinson faz um trabalho fenomenal como o cruzado de capa, tanto que, quando você olha para o batman, também vê Bruce Wayne e seu tormento interior e escuridão à espreita. As cenas com Bruce sem a interação do traje e Alfred foram muito eficazes e poderosas. Todos os personagens são fiéis ao que deveriam ser. Todos os atores que incluem Robert Pattinson, Zoe Kravitz, Jeffrey Wright, Andy Serkis, Collin Farrell e Paul Dano fazem um excelente trabalho ao dirigir esses personagens icônicos. Meu único problema é que às vezes os personagens sobrevivem a coisas que não deveriam.</p>
                        </div>
                    </div>
                    <img alt="" id="banner-coments" src={bannerCmts} />
                </div>
            </div>

            <Footer />

        </div>
    )
};

export default Comentarios;