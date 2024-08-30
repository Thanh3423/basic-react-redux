import React from 'react';

class MyComponent extends React.Component {
    state = {
        name: 'Thanh',
        address: 'Thanh1',
        age: 21
    };

    handleClick(event) {
        console.log(".>>> Click me my button")
        console.log("My name is ", this.state.name)
    }

    handleOnMoverOver(event) {
        console.log(event.pageX)
    }
    //jsx: viết code javascript trong html
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <button onMouseOver={this.handleOnMoverOver}>Hover me</button>

                <button onClick={this.handleClick}>click me</button>
            </div>
        );
    }
}


export default MyComponent;