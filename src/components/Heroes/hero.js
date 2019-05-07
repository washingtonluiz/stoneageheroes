import React, { Component } from 'react';
import Api from '../../services/api'; 
import './hero.css';

let arrayBiography = []
let arrayAppearance = []
let arrayPower = []
let arrayWork = []
let arrayConnections = []

class Hero extends Component {
    constructor(){
        super();
        this.state = {
            activeTab: '1',
            biography: [],
            appearance: [],
            power: [],
            work: [],
            connections: [],
        }
    }

    handleClick = (event) => {
        event.preventDefault();
        this.setState({activeTab: event.target.id});
    }

    handleBiography = async (atribute) => {
        await Api(`${this.props.idHero}/${atribute}`)
        .then(function (response) {
        arrayBiography.push(response.data);
        })
        .catch(function (error) {
        console.log(error);
        });
        this.setState({biography: arrayBiography})
    }
    handleAppearance = async (atribute) => {
        await Api(`${this.props.idHero}/${atribute}`)
        .then(function (response) {
        arrayAppearance.push(response.data);
        })
        .catch(function (error) {
        console.log(error);
        });
        this.setState({appearance: arrayAppearance})
    }
    handlePower = async (atribute) => {
        await Api(`${this.props.idHero}/${atribute}`)
        .then(function (response) {
        arrayPower.push(response.data);
        })
        .catch(function (error) {
        console.log(error);
        });
        this.setState({power: arrayPower})
    }
    handleWork = async (atribute) => {
        await Api(`${this.props.idHero}/${atribute}`)
        .then(function (response) {
        arrayWork.push(response.data);
        })
        .catch(function (error) {
        console.log(error);
        });
        this.setState({work: arrayWork})
    }
    handleConnections = async (atribute) => {
        await Api(`${this.props.idHero}/${atribute}`)
        .then(function (response) {
        arrayConnections.push(response.data);
        })
        .catch(function (error) {
        console.log(error);
        });
        this.setState({connections: arrayConnections})
    }

    componentDidMount(){
        this.handleBiography('biography');
        this.handleAppearance('appearance');
        this.handlePower('powerstats');
        this.handleWork('work');
        this.handleConnections('connections');
    }

  render(){
      console.log(arrayAppearance)
    return (
        <div className="content__box-hero">
            <div className="content__box-hero__back">
                <span onClick={this.props.handleVoltar}><i className="fa fa-arrow-left" aria-hidden="true"></i> Voltar</span>
                <nav className="content__box-hero__menu">
                    <ul className="content__box-hero__menu__list">
                        <li id="1" className={this.state.activeTab === '1' ? 'active' : ''} onClick={this.handleClick}>Biografia</li>
                        <li id="2" className={this.state.activeTab === '2' ? 'active' : ''} onClick={this.handleClick}>Aparência</li>
                        <li id="3" className={this.state.activeTab === '3' ? 'active' : ''} onClick={this.handleClick}>Poder</li>
                        <li id="4" className={this.state.activeTab === '4' ? 'active' : ''} onClick={this.handleClick}>Trabalho</li>
                        <li id="5" className={this.state.activeTab === '5' ? 'active' : ''} onClick={this.handleClick}>Conexões</li>
                    </ul>
                </nav>
            </div>
            {this.props.hero.map((item) => {
                return (
                    <div className="content__box-hero__parent" key={item.id}>
                        <div className="content__box-hero__hero-data">
                            <div className="content__box-hero__hero-data--image" style={{background: `url(${item.image.url}) center center no-repeat`, backgroundSize: 'cover'}}><span>{item.name}</span></div>
                            
                            <div className="content__box-hero__hero-data__resume">
                                <div className={`content--tab ${this.state.activeTab === '1' ? 'active' : ''}`}>
                                    {
                                        this.state.biography.map((item) => {
                                            return (
                                                <div key={item.id}>
                                                    <h2>Biografia</h2>
                                                    <p>
                                                        <label>Nome:</label>
                                                        <span>{item.name}</span>
                                                    </p>
                                                    <p>
                                                        <label>Nome Completo:</label>
                                                        <span>{item.fullName}</span>
                                                    </p>
                                                    <p>
                                                        <label>Naturalidade:</label>
                                                        <span>{item.placeOfBirth}</span>
                                                    </p>
                                                    <p>
                                                        <label>Editora:</label>
                                                        <span>{item.publisher}</span>
                                                    </p>
                                                    <p>
                                                        <label>Primeira Aperência:</label>
                                                        <span>{item.firstAppearance}</span>
                                                    </p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className={`content--tab ${this.state.activeTab === '2' ? 'active' : ''}`}>
                                    {
                                        this.state.appearance.map((item) => {
                                            return (
                                                <div key={item.id}>
                                                    <h2>Aparência</h2>
                                                    <p>
                                                        <label>Raça:</label>
                                                        <span>{item.race}</span>
                                                    </p>
                                                    <p>
                                                        <label>Sexo:</label>
                                                        <span>{item.gender}</span>
                                                    </p>
                                                    <p>
                                                        <label>Altura:</label>
                                                        <span>{item.height[1]}</span>
                                                    </p>
                                                    <p>
                                                        <label>Peso:</label>
                                                        <span>{item.weight[1]}</span>
                                                    </p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className={`content--tab ${this.state.activeTab === '3' ? 'active' : ''}`}>
                                    {
                                        this.state.power.map((item) => {
                                            return (
                                                <div key={item.id}>
                                                    <h2>Estatísticas de poder</h2>
                                                    <p>
                                                        <label>Inteligência:</label>
                                                        <span>{item.intelligence}</span>
                                                    </p>
                                                    <p>
                                                        <label>Força:</label>
                                                        <span>{item.strength}</span>
                                                    </p>
                                                    <p>
                                                        <label>Poder:</label>
                                                        <span>{item.power}</span>
                                                    </p>
                                                    <p>
                                                        <label>Combate:</label>
                                                        <span>{item.combat}</span>
                                                    </p>
                                                    <p>
                                                        <label>Velocidade:</label>
                                                        <span>{item.speed}</span>
                                                    </p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className={`content--tab ${this.state.activeTab === '4' ? 'active' : ''}`}>
                                    {
                                        this.state.work.map((item) => {
                                            return (
                                                <div key={item.id}>
                                                    <h2>Trabalho</h2>
                                                    <p>
                                                        <label>Ocupação:</label>
                                                        <span>{item.occupation}</span>
                                                    </p>
                                                    <p>
                                                        <label>Base:</label>
                                                        <span>{item.base}</span>
                                                    </p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className={`content--tab ${this.state.activeTab === '5' ? 'active' : ''}`}>
                                    {
                                        this.state.connections.map((item) => {
                                            return (
                                                <div key={item.id}>
                                                    <h2>Conexões</h2>
                                                    <p>
                                                        <label>Afiliados:</label>
                                                        <span>{item.occupation}</span>
                                                    </p>
                                                    <p>
                                                        <label>Parentes:</label>
                                                        <span>{item.relatives}</span>
                                                    </p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )})
            }
      </div>
    );
  }
}

export default Hero;