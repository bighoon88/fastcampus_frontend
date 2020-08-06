UserList.js

import React from 'react';

function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList() {
    const users = [
        {
            id: 1,
            username: 'velopert',
            email: 'public@email.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@email.com'
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@email.com'
        }
    ];

    return (
        <div>
            {
                users.map(
                    (user, index) => (<User user={user} key={user.id}/>)
                )
            }
        </div>
    );
}

export default UserList;


App.js

import React from 'react';
import UserList from './UserList';

function App() {
  return (
    <UserList />
  );
}

export default App;
