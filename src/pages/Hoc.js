import React from 'react';

const MyComponent = ImplementComponent => {
    class NewComponent extends React.Component
    {
        render(){
            return <ImplementComponent name={"Tamil"}/>
        }
    }
    return NewComponent
}

export default MyComponent;