import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//Please note that this is all very much just caveman code; clean code would utilize multiple views and fetch stuff when actual components mount, not like this

class App extends Component {

  //state = {restaurants: []}

  constructor(props) {
    super(props);

    this.state = {restaurants: []}
  }

  componentDidMount() {
    fetch('/restaurants')
        .then(res=> res.json())
        .then(restaurants => this.setState({restaurants}))
  };

  render() {
    const listItems = this.state.restaurants.map((restaurant) =>  <li>id:{restaurant.id} user: {restaurant.name}</li>);
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>

            {this.state.restaurants.map(restaurant =>
                <div key={restaurant.id}> name: {restaurant.name} </div>
            )}
          </header>
        </div>
    ); //everythig in the header, like a caveman
  };

}

export default App;
