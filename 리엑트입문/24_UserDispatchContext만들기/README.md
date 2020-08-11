Context API를 사용해서 어떤값을 UserList 안에 있는 user 컴포넌트에 직접 넣어 줄것인가
onToggle과 onRemove 두가지 함수를 user 컴포넌트에 주기 위해서 UserList를 거쳐서 줘야 한다는 것


App.js

import React, { useRef, useReducer, useMemo, useCallback, createContext }from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './useInputs_test';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public@email.com',
      active: true,
  },
  {
      id: 2,
      username: 'tester',
      email: 'tester@email.com',
      active: false,
  },
  {
      id: 3,
      username: 'liz',
      email: 'liz@email.com',
      active: false,
  }
  ]
}

function reducer(state, action) {
  switch (action.type) {

    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id
            ? { ...user, active: !user.active }
            : user
        )
      }
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    default:
      throw new Error('Unhandled action');
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [form, onChange, reset] = useInputs({
    username: '',
    email: '',
  });

  const { username, email } = form;

  const nextId = useRef(4);

  const {users} = state;

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      }
    });
    nextId.current += 1;
    reset();
  }, [username, email, reset]);

  const count = useMemo(() => countActiveUsers(users), [users])

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList
        users={users}
      />
      <div>활성 사용자 수: {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;


UserList.js

import React, { useContext } from 'react';
import { UserDispatch } from './App';

const User = React.memo(function User({ user }) {
    const { username, email, id, active } = user;
    const dispatch = useContext(UserDispatch);

    return (
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer'
            }}
            onClick={() => dispatch({
                type: 'TOGGLE_USER',
                id
            })}>
                {username}
            </b>
            &nbsp;
            <span>({email})</span>
            <button onClick={() => dispatch({
                type: 'REMOVE_USER',
                id
            })}>삭제</button>
        </div>
    );
});

function UserList({ users }) {
    return (
        <div>
            {
                users.map(
                    (user) => (
                        <User
                            user={user}
                            key={user.id}
                        />
                    )
                )
            }
        </div>
    );
}

export default React.memo(UserList);



과제
App.js

import React, { useRef, useReducer, useMemo, useCallback, createContext }from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public@email.com',
      active: true,
  },
  {
      id: 2,
      username: 'tester',
      email: 'tester@email.com',
      active: false,
  },
  {
      id: 3,
      username: 'liz',
      email: 'liz@email.com',
      active: false,
  }
  ]
}

function reducer(state, action) {
  switch (action.type) {

    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id
            ? { ...user, active: !user.active }
            : user
        )
      }
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    default:
      throw new Error('Unhandled action');
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {users} = state;

  const count = useMemo(() => countActiveUsers(users), [users])

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성 사용자 수: {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;


CreateUser.js

import React, { useRef, useContext} from 'react';
import useInputs from './useInputs_test';
import { UserDispatch } from './App';

function CreateUser() {

    const [{ username, email }, onChange, reset] = useInputs({
        username: '',
        email: ''
    });

    const nextId = useRef(4);
    
    const dispatch = useContext(UserDispatch);

    const onCreate = () => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email,
            }
        });
        reset();
        nextId.current += 1;
    };

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

export default React.memo(CreateUser);