App.js

import React, { useRef, useState }from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email} = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    /*setUsers([...users, user]);*/
    setUsers(users.concat(user));
    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  }

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default App;


CreateUser.js

import React from 'react';

function CreateUser( { username, email, onChange, onCreate } ) {
    return (
        <div>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}            
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default CreateUser;