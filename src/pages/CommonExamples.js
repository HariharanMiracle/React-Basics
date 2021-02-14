import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default class CommonExamples extends Component {
    render() {
        return (
            <div className="container">
               <h1 className="text-info">ReactJS - Refs</h1>
               <App />

               <br/><hr/><br/>

               <h1 className="text-info">ReactJS - Keys</h1>
               <App2 />

               <br/><hr/><br/>

               <h1 className="text-info">ReactJS - React Router</h1>
               <p>npm install react-router</p>
               <p>refer documentation</p>

               <br/><hr/><br/>

            </div>
        )
    }
}


/*
   Start App
*/
class App extends React.Component {
    constructor(props) {
       super(props);
         
       this.state = {
          data: ''
       }
       this.updateState = this.updateState.bind(this);
       this.clearInput = this.clearInput.bind(this);
       this.clearInput2 = this.clearInput2.bind(this);
    };
    updateState(e) {
       this.setState({data: e.target.value});
    }
    clearInput() {
       this.setState({data: ''});
       ReactDOM.findDOMNode(this.refs.myInput).focus();
    }
    clearInput2() {
      this.setState({data: ''});
    }
    render() {
       return (
          <div>
             <input className="form-control" value = {this.state.data} onChange = {this.updateState} 
                ref = "myInput"></input>
             <br/>
             <button className="btn btn-primary" onClick = {this.clearInput}>CLEAR</button>&nbsp;
             <button className="btn btn-primary" onClick = {this.clearInput2}>CLEAR 2</button>
             <h4>{this.state.data}</h4>
          </div>
       );
    }
 }
 /*
   End App
*/


/*
   Start App
*/
class App2 extends Component {
   constructor() {
      super();
		
      this.state = {
         data:[
            {
               component: 'First...',
               id: 1
            },
            {
               component: 'Second...',
               id: 2
            },
            {
               component: 'Third...',
               id: 3
            }
         ]
      }
   }
   render() {
      return (
         <div>
            <div>
               {this.state.data.map((dynamicComponent, i) => <Content2 
                  key = {i} componentData = {dynamicComponent}/>)}
            </div>
         </div>
      );
   }
}
class Content2 extends Component {
   render() {
      return (
         <div>
            <div>{this.props.componentData.component}</div>
            <div>{this.props.componentData.id}</div>
         </div>
      );
   }
}