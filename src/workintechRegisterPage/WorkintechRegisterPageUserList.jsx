import React from 'react'

const WorkintechRegisterPageUserList = ({users}) => {
  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <li key={index} >
            {user.adSoyad}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WorkintechRegisterPageUserList
