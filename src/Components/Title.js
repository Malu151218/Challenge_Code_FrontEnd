import React from 'react'
import teve from '../Images/img/cintas.PNG';

export default class Title extends React.Component{
    render(){
        return (
            <div className="container-title">
                <h1 className="m-5"><img src ={teve}alt="..." />     <span></span>TV SHOWS </h1>
                <h2 className="subtitle">Series TV</h2>
            </div>
        )
    }
}