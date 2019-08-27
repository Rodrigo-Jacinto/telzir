import React, { Component } from "react";
import './spending-style.css';
import { Link } from 'react-router-dom';
import imgLogo from './img/logo.png';
import CardRsult from '../../components/CardResult';
import { calculoPlanoNormal, calculoPlanoFaleMais } from './calculoPlanos';


export default class Spending extends Component {

    state = {
        optionsDDestino: [],
        paramsUser: []
    }

    addDestinos = () => {

        /**
         * analisando o desafio, desenvolvi exatamente como está na tabela que mostra o destino (DDD), origem (DDD) e o valor da tarifa, então observei que:
         * 
         * 1 - O DDD 011 sempre está ou na origem ou no destino
         * 2 - A tabela não mostra quanto custa a tarifa de ligação de mesmo DDD por exemplo: 011 - 011
         *
         * analisando essas condições, desenvolvi um algorítmo que só mostra os DDD's destino quando o DDD origem for preenchido primeiro.   
         */


        //se o DDD origem não for o DDD (011) então seguindo a tabela dos DDD's, o select do DDD destino é obrigado ser 011;
        if (Number(this.inputOrigem.value) !== 11 && this.inputOrigem.value !== "") {
            this.setState({ optionsDDestino: ['011'] });
        }

        //Se o DDD origem não for selecionado, o DDD destino não mostra nenhuma opção
        else if (this.inputOrigem.value === "") {
            this.setState({ optionsDDestino: [] });
        }
        else {
            //se nenhuma das condições acima for true, então significa que o DDD 011 foi selecionado, então deve mostrar os outros DDD's no destino
            this.setState({ optionsDDestino: ['016', '017', '018'] });
        }
    }

    enviaForm = (event) => {

        event.preventDefault();

        if (Number(this.minutos.value) > 0) {
            
            let ddOrigem = Number(this.inputOrigem.value);
            let ddDestino = Number(this.inputDestino.value);
            let planoFaleMais = Number(this.inputPlano.value);
            let minutos = Number(this.minutos.value);

            let valorFaleMais = calculoPlanoFaleMais(minutos, planoFaleMais, ddOrigem, ddDestino);
            let valorNormal = calculoPlanoNormal(minutos, ddOrigem, ddDestino);

            let objetoParametros = { ddOrigem, ddDestino, minutos, planoFaleMais, valorFaleMais, valorNormal }
            this.setState({ paramsUser: [objetoParametros] });
        }
        else {
            alert("No campo minutos, apenas digite valores positivos maiores do que zero!");
        }

        //mudo o display do cardresult para que possa criar um efeito na tela quando o usuário calcular várias vezes, pra ele perceber que ta mudando os resultados. 
        if (this.card) {
            setTimeout(() => { this.card.style.display = 'block'; }, 1500);
            this.card.style.display = 'none';
        }
    }


    render() {

        return ([

            <header className="container-fluid bg-header-spending bg-size-mobile">
                <Link to="/"><img src={imgLogo} alt="logo-telzir" /></Link>
                <div className="header-menu-spending">
                    <ul>
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/help">Sobre o Plano</Link></li>
                    </ul>
                </div>
            </header>,

            <section className="container mt-5">
                <div className="pesquisa p-5">
                    <form onSubmit={this.enviaForm}>
                        <div className="row">

                            <div className="form-group  col-12 col-md-3">
                                <select className="form-control" onChange={this.addDestinos} ref={(input) => this.inputOrigem = input} required>
                                    <option value="">Origem (DDD)</option>
                                    <option value="011">011</option>
                                    <option value="016">016</option>
                                    <option value="017">017</option>
                                    <option value="018">018</option>
                                </select>
                            </div>

                            <div className="form-group col-12 col-md-3">

                                <select className="form-control" ref={(input) => this.inputDestino = input} required>

                                    <option value="">Destino (DDD)</option>
                                    {
                                        this.state.optionsDDestino.map(optionValue => {
                                            return (
                                                <option key={optionValue} value={optionValue}>{optionValue}</option>
                                            )
                                        })
                                    }

                                </select>
                            </div>

                            <div className="form-group col-12 col-md-3">
                                <select className="form-control" ref={input => this.inputPlano = input} required>
                                    <option value="">Escolha o Plano</option>
                                    <option value="30">FaleMais 30 min</option>
                                    <option value="60">FaleMais 60 min</option>
                                    <option value="120">FaleMais 120 min</option>
                                </select>

                            </div>

                            <div className="form-group col-12 col-md-3">
                                <input type="number" ref={(input) => { this.minutos = input }} className="form-control" placeholder="minutos da ligação" required />
                            </div>


                        </div>

                        <div className="row">
                            <div className="col-12 text-center pt-3">
                                <button type="submit" className="btn-busca">Calcular</button>
                            </div>
                        </div>

                    </form>
                </div>

            </section>,

            <section className="container mt-5 mb-5">
                <div className="row">

                    <div className="col-md-12">

                        {
                            this.state.paramsUser.map((params) => {
                                return (
                                    <div key={params.ddOrigem} ref={(input) => { this.card = input }}>
                                        <CardRsult paramsUser={params} />
                                    </div>
                                );
                            })
                        }

                    </div> {/* Fim da Col */}

                </div>{/* Fim da Row */}
            </section >
        ]);
    }

}