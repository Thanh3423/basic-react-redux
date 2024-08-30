import React from 'react';

class MyComponent extends React.Component {
    state = {
        name: 'Thanh',
        address: 'Thanh1',
        age: 21
    };
    //jsx: viết code javascript trong html
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
            </div>
        );
    }
}


export default MyComponent;