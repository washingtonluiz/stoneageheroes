import React, { Component } from 'react';
import Api from '../../services/api';
import './index.css';

class Header extends Component {
  constructor(){
    super();
    this.state = {
      listHeroesSearch: [],
      iconTheme: 'fa-moon-o',
      iconSearchMobile: 'fa-search',
      openSearchMobile: '',
      value: '',
      isError: false
    }
  }
  

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }
  handleSearch = async () => {
    if(this.state.value === ''){
      this.setState({isError: true});
    }else{
      Api(`search/${this.state.value}`)
      .then(function (response) {
        if(response.data.response === 'success'){
          console.log(response.data.results);
        }else{
          console.log('Busca não encontrada. Digite o nome corretamente!');
        }
        
      })
      .catch(function (error) {
        console.log(error);
      });
      this.setState({isError: false})
    }
  }
  
  handleSearchMobile = () => {
    this.state.iconSearchMobile === 'fa-search' ? this.setState({iconSearchMobile: 'fa-times'}) : this.setState({iconSearchMobile: 'fa-search'});
    this.state.openSearchMobile === '' ? this.setState({openSearchMobile: 'search-field--open'}) : this.setState({openSearchMobile: ''});
    this.setState({value: ''})
  }

  handleIcon = () => {
    // styleTheme.className.match('theme--dark') ? styleTheme.classList.remove('theme--dark') : styleTheme.classList.add('theme--dark');
    this.state.iconTheme === 'fa-moon-o' ? this.setState({iconTheme: 'fa-sun-o'}) : this.setState({iconTheme: 'fa-moon-o'});
  }

  render(){
    return (
      <header className="header">
        <div className="wrap">
          <div className="header__box">
            <div className="header__box__logo">
              <a href='./'><h1 className="header__box__logo--logo">Stone Age <strong>Heroes</strong></h1></a>
            </div>
            <div className="header__box__search">
              <div className="header__search">
                <i className={`fa ${this.state.iconSearchMobile} search--mobile`} aria-hidden="true" onClick={this.handleSearchMobile}></i>
                <div className={`search-field ${this.state.openSearchMobile}`}>
                  <input type="search" placeholder="Pesquisar..." className="search-field__input" value={this.state.value} onChange={this.handleChange} />
                  <div className="search-field__icon-container" onClick={this.handleSearch}>
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </div>
                </div>
                {this.state.isError &&
                  <div className="header__search__error">
                    <i className="fa fa-exclamation-triangle" aria-hidden="true"></i> Preencha este campo.
                  </div>
                }
                
              </div>
              <div className="header__box__theme">
                <i className={`fa ${this.state.iconTheme}`} aria-hidden="true" onClick={this.handleIcon}></i>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;