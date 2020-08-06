어떤 값을 변경 했을 때 리랜더링을 하지않고 사용을 해야하는경우
setTimeout, setInterval의 id
외부라이브러리를 사용하여 생성된 인스턴스
Scroll위치
등 ...


UserList.js

import React from 'react';

function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList({ users }) {
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

import React, { useRef }from 'react';
import UserList from './UserList';

function App() {
  const users=[
    {
        id: 1,
        username: 'velopert',
        eamil: 'public@email.com'
    },
    {
        id: 2,
        username: 'tester',
        eamil: 'tester@email.com'
    },
    {
        id: 3,
        username: 'liz',
        eamil: 'liz@email.com'
    }
  ];

  const nextId = useRef(4);

  const onCreate = () => {
    console.log(nextId.current);
    nextId.current += 1;
  }

  return (
    <UserList users={users} />
  );
}

export default App;
