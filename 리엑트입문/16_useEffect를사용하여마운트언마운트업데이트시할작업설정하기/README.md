UserList.js

import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
    const { username, email, id, active } = user;
    // useEffect(() => {
    //     console.log('컴포넌트가 화면에 나타남');
    //     // props -> state
    //     // REST API
    //     // D3 Video.js
    //     // setInterval, setTimeout
    //     return () => {
    //         console.log('컴포넌트가 화면에서 사라짐');
    //         // clearInterval, clearTimeout
    //         // 라이브러리 인스턴스 제거
    //     }
    // }, []);
    
    useEffect(() => {
        console.log('user 값이 설정됨');
        console.log(user);
        return () => {
            console.log('user 값이 바뀌기 전');
            console.log(user);
        }
    }, [user]);

    return (
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer'
            }}
            onClick={() => onToggle(id)}>
                {username}
            </b>
            &nbsp;
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
}

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {
                users.map(
                    (user) => (
                        <User
                            user={user}
                            key={user.id}
                            onRemove={onRemove}
                            onToggle={onToggle}
                        />
                    )
                )
            }
        </div>
    );
}

export default UserList;