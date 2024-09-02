import React from 'react';
import './DisplayInfor.scss';
import logo from './../logo.svg';

class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser//cập nhật ngược lại nếu true thành false, false thành true
        })
    }
    render() {

        //destructuring array/object
        const { listUsers } = this.props;
        console.log(listUsers);
        //console.table(listUsers);
        //props=> vieets tatws cuar properties: truyen du lieu tu component cha sang con
        //tamplate +logic js
        return (
            <div className='display-infor-container'>
                {/* <img src={logo} /> */}
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide list user: " : "Show list user"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {listUsers.map((user, index) => {

                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>
                                        <div >My name is {user.name}</div>
                                        <div>My age's {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
                                    </div>
                                    <hr />
                                </div>
                            )


                            // if (+user.age > 18) {
                            //     return (
                            //         <div key={user.id} className="green">
                            //             <div>My name is {user.name}</div>
                            //             <div>My age's {user.age}</div>
                            //             <hr />
                            //         </div>
                            //     )
                            // } else {
                            //     return (
                            //         <div key={user.id} className="red">
                            //             <div>My name is {user.name}</div>
                            //             <div>My age's {user.age}</div>
                            //             <hr />
                            //         </div>
                            //     )
                            // }

                        })}
                        {/* <div>My name is {name}</div>
                <div>My age's {age}</div>
                <hr />
                <div>My name is {name}</div>
                <div>My age's {age}</div>
                <hr />
                <div>My name is {name}</div>
                <div>My age's {age}</div> */}

                    </div>
                }
            </div>

        )
    }
}

export default DisplayInfor;