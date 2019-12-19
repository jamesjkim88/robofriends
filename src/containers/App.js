import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components//Scroll';
import './App.css';

class App extends Component {
  // declaring state
  constructor(){
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  // making ajax whenever dom is loaded
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { this.setState({ robots: users })})
  };

  // changing search field state to input target value
  onSearchChange = (evt) => {
    this.setState({
      searchField: evt.target.value
    });
  }

  render(){
  const filterRobots = this.state.robots.filter(robot => {
    return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
  });
    return (
      <div className="tc">
        <h1 className="header">Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList robots={filterRobots}/>
        </Scroll>
      </div>
    )
  }
}

// const App = () => {
//   return (
//     <div className="tc">
//       <h1>Robo Friends</h1>
//       <SearchBox />
//       <CardList robots={robots}/>
//     </div>
//   )
// }

export default App;
