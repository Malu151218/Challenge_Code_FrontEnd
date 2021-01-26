import './App.css';

import React from 'react';
import Search from './Components/Search';
import Title from './Components/Title';
import ShowTv from './Components/ShowTv';




export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      series:""
    }
  } //REALIZO LA BÚSQUEDA
  search = (valor) => {
    console.log(valor)
    fetch(`http://localhost:4300/${valor}`)
      .then((res) => { return res.json() })
      .then((json) => {
        console.log("Serie Buscada:", json)
        
        this.setState({series:json})
      })
  }
  render() {
    if(this.state.series === ""){
      return (
        <div className="container">
          <Title/>
          <Search search={this.search}/>
        </div>
      )
    }else{
      return (
        <div className="container">
          <Title/>
          <Search search={this.search} />
          <ShowTv series={this.state.series || []}/>
        </div>
        
      )
    }
  }
}
