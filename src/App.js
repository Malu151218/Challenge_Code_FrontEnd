import React, { Component } from 'react';
import Search from './Components/Search';
import Results from './Components/Results';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      result:"", // Variable utilizada para guardar el  resultado del Backend
      error:"", // informaré sobre algún posible error
      ip:"", // Guadó la IP que obtengo del FrontEnd
      URL:"http://localhost:4500/search/shows/"  /* "http://api.tvmaze.com/singlesearch/shows?q=" */

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
    this.setState({ error:""})
    this.setState({result :""})

    // BUSQUEDA
    fetch(`${this.state.URL}${input}`)
    .then(res => res.json())
    .then(result => {
      result.result !== undefined? this.setState({ error:""}) : this.setState({ error:result.result })
      this.setState({ result: result.result });
      console.log("resultado desde back: ",result.result )
      console.log("error desde back: ",this.state.error)
    })
    .catch(error => {
      this.setState({ error: error})
      console.log("error desde catch: ",error)
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
      console.log("IP ENVIADA", res)
    });
  }
  
  render() {
    return (
      <div>
        <Search clickHandler={this.clickHandler}/>
        <Results error= {this.state.error} result={this.state.result}/>
      </div>
    );
  }
}
export default App;
