import React, { Component } from 'react';
import Api from './services/api';
import './App.css';

import Header from './components/Header';
import Heroes from './components/heroes';
import Footer from './components/Footer';

let arrayListHeroes = [];

class App extends Component {
  constructor(){
    super();
    this.state = {
      styleTheme: '.theme--light',
      listHeroes: []
    }
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

  componentDidMount(){
    this.consultaApi();
  }
  render(){
    console.log(this.state.listHeroes)
    return (
      <div className="content">
        <Header />
        <div className="content__box-heroes">
          <div className="wrap">
            <h1 className="content--titulo">Lista de todos os super-heróis do universo</h1>
            <p className="content--subtitulo">Saiba as estatísticas de poder, biografia, aparência, trabalho, conexões e imagens</p>
            <Heroes arrayMap={this.state.listHeroes} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
