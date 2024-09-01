import React from 'react';

class DisplayInfor extends React.Component {
    render() {

        //destructuring array/object
        const { listUsers } = this.props;
        console.log(listUsers);
        //props=> vieets tatws cuar properties: truyen du lieu tu component cha sang con
        return (
            <div>
                {listUsers.map((user, index) => {
                    return (
                        <div key={user.id}>
                            <div>My name is {user.name}</div>
                            <div>My age's {user.age}</div>
                            <hr />
                        </div>
                    )
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

        )
    }
}

export default DisplayInfor;