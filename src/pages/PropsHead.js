import React, { Component } from 'react'
import SubProp1 from './PropsHead/SubProp1';
import SubProp2 from './PropsHead/SubProp2';

class PropsHead extends Component {

    constructor(){
        super();

        this.state = {
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-info">Props Example</h1>
                <br/><hr/>
                <SubProp1 heading2="Props sent from PropsHead.js"/>
                <SubProp2 para={this.state.para}/>
            </div>
        )
    }
}

export default PropsHead;