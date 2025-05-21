import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstPage from './Component/FirstPage';
import NextPage from './Component/NextPage';
import NextPage2 from './Component/NextPage2';
import Summary from './Component/Summary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export class App extends Component {
  state = {
    name: "",
    player: " ",
    colors: [],
  };

  handleChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleNameSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", this.state.name);
  };

  getSelected = (e) => {
    e.preventDefault();
    let selected = [];
    let noofchecks = document.getElementById("checksboxes");
    let chks = noofchecks.getElementsByTagName("INPUT");

    for (let i = 0; i < chks.length; i++) {
      if (chks[i].checked) {
        selected.push(chks[i].value);
      }
    }

    this.setState({ colors: selected });
    localStorage.setItem("colors", JSON.stringify(selected));
  };

  handleChangePlayer = (e) => {
    this.setState({ player: e.target.value });
  };

  handlePalyerSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("playername", this.state.player);
  };

  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <FirstPage
                  hName={this.handleChangeName}
                  hNameSubmit={this.handleNameSubmit}
                />
              }
            />
            <Route
              path="/page1"
              element={
                <NextPage
                  hPlayer={this.handleChangePlayer}
                  hPlayerSubmit={this.handlePalyerSubmit}
                />
              }
            />
            <Route
              path="/page2"
              element={<NextPage2 getall={this.getSelected} />}
            />
            <Route path="/page3" element={<Summary />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
