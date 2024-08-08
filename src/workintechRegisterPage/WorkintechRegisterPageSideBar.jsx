import React from 'react'
import WorkintechRegisterPageUserList from './WorkintechRegisterPageUserList'

const WorkintechRegisterPageSideBar = ({users}) => {
  return (
    <div>
      <h2>Users</h2>
      <WorkintechRegisterPageUserList users={users}/>
    </div>
  )
}

export default WorkintechRegisterPageSideBar
