import React, { Component } from 'react'

class ComponentLifeCycleEx extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: 0,
            heading: "Component Life Cycle Example"
        }

        this.setNewNumber = this.setNewNumber.bind(this);
    };

    setNewNumber(){
        this.setState({data: this.state.data + 1})
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-info">{this.state.heading}</h1>
                <br/><hr/>
                <div>
                    <button className="btn btn-info" onClick={() => this.setNewNumber()}>Click</button>
                    <Content myNumber= {this.state.data} ></Content>
                </div>
            </div>
        )
    }
}

class Content extends Component {
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
        console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {    
        console.log('Component WILL RECIEVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }    
    render(){        
        return(
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        )
    }
}

export default ComponentLifeCycleEx;