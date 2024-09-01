import React from 'react';

class DisplayInfor extends React.Component {
    render() {
        //destructuring array/object
        const { age, name } = this.props;
        console.log(this.props);
        //props=> vieets tatws cuar properties: truyen du lieu tu component cha sang con
        return (
            <div>
                <div>My name is {name}</div>
                <div>My age's {age}</div>

            </div>

        )
    }
}

export default DisplayInfor;