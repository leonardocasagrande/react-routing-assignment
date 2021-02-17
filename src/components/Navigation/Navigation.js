import React from 'react';
import {NavLink} from 'react-router-dom';

const navigation = (props) => {
    return (
        <nav>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/courses">Courses</NavLink>
        </nav>
    );
}

export default navigation;
