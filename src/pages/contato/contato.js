import React from "react";
import './contato.css';
import Header from "../../components/header/header";
import imgContato from '../../assets/bat3.png';
import Footer from "../../components/footer/footer";

function Contato () {
    return (
        <div className="pg-contato">

            <Header />

            <div className="content-container">
                <div className="box-contato">
                    <span className="titulo-contato">Fale Conosco</span>
                    <form className="form-contato" action="./contato.js">
                        <input id="nome" type="text" name="nome" placeholder="Informe seu nome"/>
                        <input id="email" type="email" name="email" placeholder="Informe seu e-mail"/>
                        <input id="assunto" type="text" name="assunto" placeholder="Informe o motivo do contato"/>
                        <textarea id="mensagem" name="mensagem" placeholder="Deixe aqui sua mensagem"></textarea>
                    </form>
                    <button id="button-enviar">Enviar</button>
                </div>
                <img alt="" id="img-contato" src={imgContato} />
            </div>

            <Footer />

        </div>
    )
};

export default Contato;