UserList.js

import React from 'react';

function User({ user, onRemove }) {
    const { username, email, id } = user; 
    return (
        <div>
            <b>{username}</b> <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
}

function UserList({ users, onRemove }) {
    return (
        <div>
            {
                users.map(
                    (user, index) => (
                        <User
                            user={user}
                            key={user.id}
                            onRemove={onRemove}
                        />
                    )
                )
            }
        </div>
    );
}

export default UserList;


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
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} />
    </>
  );
}

export default App;
