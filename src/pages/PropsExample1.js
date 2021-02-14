import React, { Component } from 'react'

class PropsExample1 extends Component {
    constructor(props){
        super(props);

        this.state = {
            heading: "Child component updating state",
            text: "Initalized..."
        }

        this.updateText = this.updateText.bind(this);
    };

    updateText(){
        this.setState({
            text: "Updated..."
        })
    }

    render() {
        return (
            <div>
                <h1 className="text-info">{this.state.heading}</h1>
                <br/><hr/>
                <Content myText = {this.state.text} myUpdateText = {this.updateText} />
            </div>
        )
    }
}

class Content extends Component{
    render(){
        return(
            <div>
                <div class="row">
                    <div class="col-md-6">
                        <button className="btn btn-info" onClick={() => this.props.myUpdateText()}>Click</button>
                    </div>
                    <div class="col-md-6">
                        <h3>{this.props.myText}</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default PropsExample1;