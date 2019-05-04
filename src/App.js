import React, { Component } from 'react';
import axios from 'axios'; 
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {

  consultaApi = () => {
    for(let i=0; i<= 731;i++){
      axios.get('http://superheroapi.com/api/2557663390919470/'+i)
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
