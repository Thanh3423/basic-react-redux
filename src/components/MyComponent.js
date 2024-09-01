import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {

    //jsx: viết code javascript trong html
    render() {
        return (
            <div>

                <UserInfor />
                <br /><br />
                <DisplayInfor name="Thanh" age="21" />
                <hr />
                <DisplayInfor name="Eric" age={"21"} />
            </div>
        );
    }
}


export default MyComponent;