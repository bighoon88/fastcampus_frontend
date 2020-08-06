<div>태그는 꼭 닫혀야 한다!</div>
<Hello />

<> // fragment 태그
    <div>두개 이상의</div>
    <p>태그는 감싸자</p>
</>

const name = '이렇게';
return <div>JavaScript값 보여줄땐, {name}</div>

const style ={
    background: 'gray';
}
return (
    <div style={style}>
        <div className='my-style'>
            style과 className
        </div>
    </div>
)

return (
    <div>
        {/*주석은 이렇게*/}
        <input 
            // 또는 이렇게
        />
    </div>
)