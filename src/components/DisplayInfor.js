import React from 'react';
import './DisplayInfor.scss';
import logo from './../logo.svg';

// class DisplayInfor extends React.Component {
// //stateless: component k cos state, stateful nguoc lai
//     render() {
//         console.log(">>>call me render")

//         //destructuring array/object
//         const { listUsers } = this.props;
//         //console.table(listUsers);
//         //props=> vieets tatws cuar properties: truyen du lieu tu component cha sang con
//         //tamplate +logic js
//         return (
//             <div className='display-infor-container'>
//                 {true &&
//                     <div>
//                         {listUsers.map((user, index) => {

//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div>
//                                         <div >My name is {user.name}</div>
//                                         <div>My age's {user.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                     <hr />
//                                 </div>
//                             )

//                         })}
//                     </div>
//                 }
//             </div>

//         )
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props;
    return (
        <div className='display-infor-container'>
            {true &&
                <div>
                    {listUsers.map((user, index) => {

                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>
                                    <div >My name is {user.name}</div>
                                    <div>My age's {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr />
                            </div>
                        )

                    })}
                </div>
            }
        </div>

    )
}


export default DisplayInfor;