import React from 'react'
import { NavLink } from 'react-router-dom';


const TestFile = () => {
  return (
    <div>
      <ul>
        <li>
            <NavLink to="/task">Messages</NavLink>
        </li>

        <li>
            <NavLink to="/a">Messages</NavLink>
        </li>

      </ul>
    </div>
  )
}

export default TestFile

