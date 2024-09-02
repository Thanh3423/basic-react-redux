import React from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Thanh", age: "16" },
            { id: 2, name: "Thanh1", age: "231" },
            { id: 3, name: "Thanh3", age: "24" },
        ]
    }

    handleAddNewUser = (userObj) => {
        //bad code add user
        // let listUsersNew = this.state.listUsers;
        // listUsersNew.unshift(userObj);
        // this.setState({
        //     listUsers: listUsersNew
        // })


        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }

    //DRY: don't repeat youseft
    //jsx: viết code javascript trong html
    render() {

        return (
            <div>

                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}

                />
                <br /><br />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                />
            </div>
        );
    }
}


export default MyComponent;