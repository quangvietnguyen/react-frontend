import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Viet Q. Nguyen',
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Toronto_Skyline_Summer_2020.jpg',
            places: 4
        }
    ]
    return (
        <UsersList items={USERS}/>
    )
};

export default Users;