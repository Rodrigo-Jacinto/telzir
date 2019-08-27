import React from 'react';
import { Link } from 'react-router-dom';
import imgLogo from './img/logo.png';
import './help-style.css';
import imgPessoas from './img/pessoa-celular1-test.jpg';

const Help = () => (

    <div className="bg-help">

        <header className="container-fluid bg-header-help bg-size-mobile">
            <Link to="/"><img src={imgLogo} alt="logo-telzir" /></Link>
            <div className="header-menu-help">
                <ul>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/spending">Calcule Aqui</Link></li>
                </ul>
            </div>
        </header>

        <section className="container space-section">

            <div className="row space-title-normal">
                <div className="col-12 col-md-12">
                    <h3>Plano Normal</h3>
                </div>
            </div>

            <div className="row">


                <div className="col-12 col-md-6">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Origem</th>
                                <th scope="col">Destino</th>
                                <th scope="col">R$/minuto</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>011 - SP</td>
                                <td>016 - SP</td>
                                <td>1.90</td>
                            </tr>

                            <tr>
                                <td>016 - SP</td>
                                <td>011 - SP</td>
                                <td>2.90</td>
                            </tr>

                            <tr>
                                <td>011 - SP</td>
                                <td>017 - SP</td>
                                <td>1.70</td>
                            </tr>

                            <tr>
                                <td>017 - SP</td>
                                <td>011 - SP</td>
                                <td>2.70</td>
                            </tr>

                            <tr>
                                <td>011 - SP</td>
                                <td>018 - SP</td>
                                <td>0.90</td>
                            </tr>

                            <tr>
                                <td>018 - SP</td>
                                <td>011 - SP</td>
                                <td>1.90</td>
                            </tr>

                        </tbody>
                    </table>
                </div>

                <div className="col-12 col-md-6 text-plano-normal">
                    <p>
                        No plano normal da Telzir, o cliente pode fazer uma chamada de uma cidade para outra pagando
                        uma tarifa fixa por minuto, com o preço sendo pré-definido em uma lista com os códigos DDDs de origem e destino.
                    </p>
                </div>
            </div>


        </section>

        <section className="container-fluid space-section bg-plano-plus">

            <div className="row">
                <div className="col-12 col-md-12 title-plano-plus">
                    <h3>Plano Fale Mais</h3>
                </div>
            </div>


            <div className="row">

                <div className="col-12 col-md-5 mb-3">
                    <img src={imgPessoas} className="img-fluid" alt="Pessoas no Celular" />
                </div>

                <div className="col-12 col-md-7 text-plano-plus">
                    <p>
                         Com o Plano FaleMais da Telzir, o cliente adquire um plano e pode falar de graça até um determinado tempo (em minutos) e só paga os minutos excedentes economizando dinheiro e falando mais. Os minutos excedentes tem apenas um acréscimo de 10% sobre a tarifa normal do minuto. Os planos são FaleMais 30 (30 minutos), FaleMais 60 (60 minutos) e FaleMais 120 (120 minutos).
                    </p>
                </div>

            </div>

        </section>


        <section className="container space-section bg-plano-table">

            <div className="row">
                <div className="col-12 col-md-12 title-plano-table">
                    <h3>Exemplo de Ligações FaleMais/Normal </h3>
                </div>
            </div>

            <div className="row">

                <div className="col-md-12">
                    <div className="table-responsive-xl">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Origem</th>
                                    <th scope="col">Destino</th>
                                    <th scope="col">Tempo</th>
                                    <th scope="col">Plano FaleMais</th>
                                    <th scope="col">Com FaleMais</th>
                                    <th scope="col">Sem FaleMais</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>011</td>
                                    <td>016</td>
                                    <td>20</td>
                                    <td>FaleMais 30</td>
                                    <td>R$ 0,0</td>
                                    <td>R$ 38,00</td>
                                </tr>

                                <tr>
                                    <td>011</td>
                                    <td>017</td>
                                    <td>80</td>
                                    <td>FaleMais 60</td>
                                    <td>R$ 37,40</td>
                                    <td>R$ 136,00</td>
                                </tr>

                                <tr>
                                    <td>018</td>
                                    <td>011</td>
                                    <td>200</td>
                                    <td>FaleMais 120</td>
                                    <td>R$ 167,20</td>
                                    <td>R$ 380,00</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col-12 col-md-12">
                    <Link to="/spending" className="btn-introducao btn-calcule btn-calcule-help" role="button">Calcule Aqui</Link>
                </div>

            </div>

        </section>


    </div>
);

export default Help;