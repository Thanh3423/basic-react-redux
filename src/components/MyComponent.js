import React from 'react';

class MyComponent extends React.Component {
    state = {
        name: 'Thanh',
        address: 'Thanh1',
        age: 21
    };

    handleClick(event) {
        console.log(".>>> Click me my button")
        console.log("random ", Math.floor((Math.random() * 100) + 1))
        //merge State => react class
        this.setState({
            name: 'Eric',
            age: Math.floor((Math.random() * 100) + 1)
            // address: 'Thanh1',
            // age: 21
        })

        // this.setState({
        //     age: Math.floor((Math.random() * 100) + 1)
        // })
    }

    handleOnMoverOver(event) {
        //console.log(event.pageX)
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })

    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    //jsx: viết code javascript trong html
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type='text'
                        onChange={(event) => this.handleOnChangeInput(event)} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}


export default MyComponent;