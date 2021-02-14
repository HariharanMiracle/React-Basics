import React, { Component } from 'react'
import Hoc from './Hoc';

class HocEx2 extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export default Hoc(HocEx2);