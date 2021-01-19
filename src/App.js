import React, { Component } from 'react';
import Search from './Components/Search';
import Results from './Components/Results';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      search:"", // Variable utilizada para guardar el  resultado del Backend
      err:"", // informaré sobre algún posible error
      ip:"", // Guadó la IP que obtengo del FrontEnd
      URL:"http://localhost:3005/search/shows/"  /* "http://api.tvmaze.com/singlesearch/shows?q=" */

    }
  }

  componentDidMount(){
    // solicito la ip y la guardo en state
    fetch(`https://geolocation-db.com/json/1a811210-241d-11eb-b7a9-293dae7a95e1`)
    .then(res => res.json())
    .then(data => {
      this.setState({ip:data.IPv4})
      console.log ("LA IP ES: ",this.state.ip)
    })
  }


  // PARAMETRO COMPONENTE SEARCH
  clickHandler = (input) => {

    // CLEAN STATES
    this.setState({ err:""})
    this.setState({ search:""})

    // BUSQUEDA
    fetch(`${this.state.URL}${input}`)
    .then(res => res.json())
    .then(search => {
      search.search !== undefined? this.setState({ err:""}) : this.setState({ err:search.search})
      this.setState({ search: search.search});
      console.log("resultado desde back: ",search.search)
      console.log("error desde back: ",this.state.err)
    })
    .catch(err=> {
      this.setState({ err: err})
      console.log("error desde catch: ",err)
    })
    
    fetch(`${this.state.URL}ip`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ip: this.state.ip })
    })
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      console.log("IP search", res)
    });
  }
  
  render() {
    return (
      <div>
        <Search clickHandler={this.clickHandler}/>
        <Results err= {this.state.err} search={this.state.search}/>
      </div>
    );
  }
}

export default App;