import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Thanh", age: "21" },
            { id: 2, name: "Thanh1", age: "231" },
            { id: 3, name: "Thanh3", age: "24" },
        ]
    }

    //DRY: don't repeat youseft
    //jsx: viết code javascript trong html
    render() {

        return (
            <div>

                <UserInfor />
                <br /><br />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                />
            </div>
        );
    }
}


export default MyComponent;