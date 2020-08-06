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
