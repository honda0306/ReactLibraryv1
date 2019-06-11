import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListView from './components/ListView';
import dummyData from './dummyData';
import './App.css';

class App extends Component {
  state = {
    books: [],
    selectedBook: {}
  }

  componentDidMount() {
    this.setState({
      books: dummyData
    });
  }

  // selectBook = (id) => {
  //   this.setState({
  //     selectedBook
  //   })
  // }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={ (props) => { return(<ListView {...props} books={this.state.books} selectBook={this.selectBook} />)}} />
      </div>
    );
  }
}

export default App;
