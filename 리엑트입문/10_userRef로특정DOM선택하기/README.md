특정 엘레먼트의 크기나 위치를 가져와야 하거나, 또는 스크롤바 위치를 가지고 오거나 설정을 해야 하는 경우 또는 포커스를 설정해야 한다던지 특정DOM에 적용을 해야할 경우
ref
useRef
React.createRef()
를 사용한다.


InputSample.js

import React , { useState, useRef }from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });
    const nameInput = useRef();
    const {name, nickname} = inputs;
    const onChange = (e) => {
        const {name, value} = e.target;
        
        setInputs({
            ...inputs,
            [name]: value,
        });
        
    };
    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
        nameInput.current.focus();
    };
    return (
        <div>
            <input 
                name="name" 
                placeholder="이름" 
                onChange={onChange} 
                value={name}
                ref={nameInput}
            />
            <input 
                name="nickname" 
                placeholder="닉네임" 
                onChange={onChange} 
                value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;