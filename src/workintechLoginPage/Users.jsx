import React, { useEffect, useState } from 'react'
import { users } from './user';

export let users2 = [];

users.map((i) => {
    users2 = [...users2, { ...i, user: `${i.name[0].toLowerCase() + i.lastName.toLowerCase()}` }];
})

const Users = () => {


    console.log(users2);

    return (
        <div>
            {users[0].name}
        </div>
    )
}

export default Users




