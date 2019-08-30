import React, {Component} from 'react';
import './style.scss'

class Bus extends Component {
    render() {
        return (
            <>
                   <div className="bus">
                        <img src={this.props.img}  className="img-bus"/>
                        <p>{this.props.name}</p>
                    </div>
            </>
        );
    }
}

export default Bus;