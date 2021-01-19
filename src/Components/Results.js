import React, { Component } from 'react';
import {Card} from 'react-bootstrap'

class Results extends Component {

    render() {
        return (
            <div className= "bg-dark">
                {(this.props.err !== "" || this.props.err === undefined)&& <h4 className= "h1 text-center text-danger mx-auto py-5">Not Found Series, Please Try Again</h4> ||
                this.props.resultado === "" && <></> ||
                <Card className= "text-center mx-auto" style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={this.props.resultado.image.medium} />
                    <Card.Body>
                        <Card.Title><h3>{this.props.resultado.name}</h3></Card.Title>
                        <Card.Text><h5>{this.props.resultado.summary}</h5></Card.Text>
                    </Card.Body>
                    <Card.Footer><h5>{this.props.resultado.officialSite}</h5></Card.Footer>
                </Card>
                }
            </div>
        );
    }
}

export default Results;