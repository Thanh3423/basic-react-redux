import React from 'react';

class MyComponent extends React.Component {
    //jsx: viết code javascript trong html
    render() {
        return (
            <div>my first component
                {Math.random()}
            </div>
        );
    }
}


export default MyComponent;