import React from 'react';


export default class ShowTv extends React.Component {
    render() {
        return (
             <div className="container-series">
                {this.props.series !== null ? <div className="card mb-3" >
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={this.props.series.image.medium} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{this.props.series.name}</h5>
                            <p className="card-text">{this.props.series.summary.replace(/<p>|<b>/g," ").replace("</p>"," ").replace("</b>"," ")}</p>
                            <a href={this.props.series.officialSite}>{ this.props.series.officialSite}</a>
                        </div>
                    </div>
                </div>
            </div>:<span></span>}
            </div>
          );
      }
 }
         
           
 
