import React, { Component } from 'react';
import './index.css';

class Heroes extends Component {
    constructor(){
        super();
        this.state = {
            iconHeart: 'fa-heart-o'
        }
    }

    handleFavorite = (event) => {
        event.preventDefault();
        this.state.iconHeart === 'fa-heart-o' ? this.setState({iconHeart: 'fa-heart'}) : this.setState({iconHeart: 'fa-heart-o'});
    }
  
  render(){
    return (
        <ul className="list-heroes">
            {
            this.props.arrayMap.map(item => {
                return (
                    <li className="list-heroes__item" key={item.name}>
                        <div className="list-heroes__item__box-image" onClick={ ()=> this.props.handleInfoHero(item.id)}>
                            <div className="list-heroes__item__image" style={{background: `url(${item.image.url}) center center no-repeat`, backgroundSize: 'cover'}}></div>
                        </div>
                        <div className="list-heroes__item__box-data">
                            <div>
                                <h2>{item.name}</h2>
                                <span className="list-heroes__item--favorite" onClick={this.handleFavorite}><i className={`fa ${this.state.iconHeart}`} aria-hidden="true"></i></span>
                            </div>
                            {item.appearance.race === 'null' ? (
                                <h3><span>Raça: </span> <span>Indefinida</span></h3>
                            ):(
                                <h3><span>Raça: </span> <span>{item.appearance.race}</span></h3>
                            )

                            }
                        </div>
                    </li>
                )
            })
            }
        </ul>
    );
  }
}

export default Heroes;