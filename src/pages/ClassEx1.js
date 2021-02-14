import React, { Component } from 'react'

class ClassEx1 extends Component {
    constructor() {
        super();
        this.state = {
            number: 0,
            heading: "Stateful / Class Component Example",
            subHeading: "Student List",
            subHeading2: "Change State",
            studentList: [
                            {
                                "id":1,
                                "name":"Hariharan",
                                "age":22
                            },
                            {
                                "id":2,
                                "name":"Yasikaran",
                                "age":11
                            },
                            {
                                "id":3,
                                "name":"Dilrukshan",
                                "age":16
                            }
                        ]
        }
    }

    numberIncrement(){
        var number = this.state.number + 1;
        this.setState({
            number: number
        })
    }

    numberDecrement(){
        var number = this.state.number - 1;
        this.setState({
            number: number
        })
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-info">{this.state.heading}</h1>
                <br/><hr/>
                <div>
                    <h2 className="text-info">{this.state.subHeading}</h2>
                    {
                        this.state.studentList.map((student, i) => 
                        <div className="p-5">
                            <h5>ID: {student.id}</h5>
                            <h5>Student Name: {student.name}</h5>
                            <h5>Age: {student.age}</h5>
                        </div>)
                    }
                </div>

                <br/><hr/><br/>

                <div>
                    <h2 className="text-info">{this.state.subHeading2}</h2>
                    <br/><hr/>
                    <div className="row text-center">
                        <div className="col-md-4">
                           <button className="btn btn-danger" onClick={() => this.numberDecrement()}>-</button>
                        </div>
                        <div className="col-md-4">
                            {this.state.number}
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-success" onClick={() => this.numberIncrement()}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClassEx1;