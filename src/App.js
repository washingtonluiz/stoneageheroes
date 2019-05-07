import React, { Component } from 'react';
import Api from './services/api';
import './App.css';

import Header from './components/Header';
import Heroes from './components/Heroes';
import Hero from './components/Heroes/hero';
import Footer from './components/Footer';

let arrayListHeroes = [];
let arrayHero = [];

class App extends Component {
  constructor(){
    super();
    this.state = {
      styleTheme: '.theme--light',
      showListHeroes: true,
      showHero: false,
      listHeroes: [],
      hero: [],
      biography: [],
      idHero: ''
    }
  }

  handleVoltar = () =>{
    this.setState({showListHeroes: true});
    this.setState({showHero: false});
    this.setState({hero: []});
  }

  consultaApi = async() => {
    for(let i=1; i<= 10;i++){
      await Api(`${i}`)
      .then(function (response) {
        arrayListHeroes.push(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    this.setState({listHeroes: arrayListHeroes})
  }

  handleInfoHero = async (id) => {
    await Api(`${id}`)
      .then(function (response) {
        arrayHero.push(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
      this.setState({hero: arrayHero})
      this.setState({idHero: id});
    this.setState({showListHeroes: !this.state.showListHeroes, showHero: !this.state.showHero});
  }

  componentDidMount(){
    this.consultaApi();
  }
  render(){
    return (
      <div className="content">
        <Header />
          <div className="content__box-heroes">
            <div className="wrap">
              <h1 className="content--titulo">Lista de todos os super-heróis do universo</h1>
              <p className="content--subtitulo">Saiba as estatísticas de poder, biografia, aparência, trabalho, conexões e imagens</p>
              {this.state.showListHeroes && 
                <Heroes arrayMap={this.state.listHeroes} handleInfoHero={this.handleInfoHero.bind(this)} />
              }

              {this.state.showHero &&
                <Hero hero={this.state.hero} idHero={this.state.idHero} handleVoltar={this.handleVoltar} />
              }
            </div>
          </div>
        <Footer />
      </div>
    );
  }
}

export default App;
