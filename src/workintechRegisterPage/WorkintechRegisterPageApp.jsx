import React, { useState } from 'react'
import WorkintechRegisterPageSideBar from './WorkintechRegisterPageSideBar'
import WorkintechRegisterPageMain from './WorkintechRegisterPageMain'

const WorkintechRegisterPageApp = () => {
    const [users, setUsers] = useState([]);

    const addUser = (newUser) => {
        setUsers([...users, newUser]);
    };
    return (
        <div>
            <WorkintechRegisterPageSideBar users={users} />
            <WorkintechRegisterPageMain addUser={addUser} />
        </div>
    )
}

export default WorkintechRegisterPageApp
