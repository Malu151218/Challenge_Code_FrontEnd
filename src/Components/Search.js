import React, { Component } from 'react';
import {Form, FormControl, Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

class Search extends Component {

    constructor(props) {
        super(props);
        this.state={
            input:""
        }
    }
    
    clickHandler = () => this.props.clickHandler(this.state.input)

    inputHandler = (e) => this.setState({input:e.target.value})

    render() {
        return (
            <div className="text-center px-auto py-5 bg-dark text-white">
                <h1 className="m-5">TV_SERIES</h1>
                <h2 className="m-5">TV/Stream</h2>
                <Form className="container-sm d-flex justify-content-center" inline>
                    <FormControl onChange={this.inputHandler} type="text" placeholder="Ingrese el nombre de la serie" className="w-75" />
                    <Button variant="outline-info" onClick= {this.clickHandler}>Search</Button>
                </Form>
            </div>
        );
    }
}

export default Search;