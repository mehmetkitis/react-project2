import React, { useState } from 'react'
import { users } from './user';



let users2 = [];



const Users = () => {
    const [add, setAdd] = useState([]);

    users.map((i, index) => {
        users2 = [...users2, { ...i, user: `${i.name[0].toLowerCase() + i.lastName.toLowerCase()}` }];
    })

    console.log(users2)


    return (
        <div>
            {users[0].name}
        </div>
    )
}

export default Users




