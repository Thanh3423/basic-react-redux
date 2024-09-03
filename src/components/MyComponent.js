import React, { useState } from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';

// class MyComponent extends React.Component {
//     state = {
//         listUsers: [
//             { id: 1, name: "Thanh", age: "16" },
//             { id: 2, name: "Thanh1", age: "231" },
//             { id: 3, name: "Thanh3", age: "24" },
//         ]
//     }

//     handleAddNewUser = (userObj) => {
//         //bad code add user
//         // let listUsersNew = this.state.listUsers;
//         // listUsersNew.unshift(userObj);
//         // this.setState({
//         //     listUsers: listUsersNew
//         // })


//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         })
//     }

//     handleDeleteUser = (userId) => {
//         let listUsersClone = this.state.listUsers;
//         listUsersClone = listUsersClone.filter(item => item.id !== userId);
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }

//     //DRY: don't repeat youself
//     //jsx: viết code javascript trong html
//     //component  = template + logic Js
//     render() {
//         return (
//             <>
//                 <br />
//                 <div className='a'>

//                     <AddUserInfor
//                         handleAddNewUser={this.handleAddNewUser}

//                     />
//                     <br /><br />
//                     <DisplayInfor
//                         listUsers={this.state.listUsers}
//                         handleDeleteUser={this.handleDeleteUser}
//                     />
//                 </div>
//                 <div className='b'>

//                 </div>
//             </>
//         );
//     }
// }

const MyComponent = (props) => {

    const [listUsers, setListUsers] = useState(
        [
            { id: 1, name: "Thanh", age: "16" },
            { id: 2, name: "Thanh1", age: "231" },
            { id: 3, name: "Thanh3", age: "24" },
        ]
    )

    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers])

    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        setListUsers(listUsersClone);
    }

    return (
        <>
            <br />
            <div className='a'>

                <AddUserInfor
                    handleAddNewUser={handleAddNewUser}

                />
                <br /><br />
                <DisplayInfor
                    listUsers={listUsers}
                    handleDeleteUser={handleDeleteUser}
                />
            </div>
            <div className='b'>

            </div>
        </>
    );

}
export default MyComponent;