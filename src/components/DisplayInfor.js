import React, { useEffect, useState } from 'react';
import './DisplayInfor.scss';
import logo from './../logo.svg';


const DisplayInfor = (props) => {
    const { listUsers } = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }

    console.log('>>>Call me render')

    useEffect(
        () => {
            if (listUsers.length === 0) {
                alert('You delete all the users')
            }
            console.log('>>>Call me useEffect')
        }, [listUsers]
    );
    //trong code co the viet nhieu hanm useEffect

    return (

        <div className='display-infor-container'>
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Hide list user" : "Show list users"}
                </span>
            </div>
            {isShowHideListUser &&
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