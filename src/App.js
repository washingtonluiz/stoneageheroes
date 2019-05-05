import React, { Component } from 'react';
import axios from 'axios'; 
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      styleTheme: '.theme--light'
    }
  }

  consultaApi = () => {
    for(let i=1; i<= 5;i++){
      axios.get(`http://superheroapi.com/api/2557663390919470/${i}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        proxy: {
          host: 'localhost',
          port: 3000
        }
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
  
  componentDidMount(){
    // this.consultaApi();
  }
  render(){
    return (
      <div className="content">
        <Header />
        TEste
        <Footer />
      </div>
    );
  }
}

export default App;
