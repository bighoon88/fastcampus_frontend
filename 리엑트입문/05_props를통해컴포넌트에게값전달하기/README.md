props는 properites의 줄임말
컴포넌트를 사용할때 특정값을 전달해주고 싶을때 사용
부모 -> 자식 
    props
    <child value="value" />


<Hello name="react" color="red" />
name과 color의 값이 props

function Hello({color, name}) {
Hello 컴포넌트에서 props라는 값을 color와 name이라는 파라미터를 통해서 가져올수 있다.

기본값을 설정하기 위해서는
Hello.defaultProps = {
    name: '이름없음'
}
사용

Wrapper 컴포넌트 에서는 children이라는 props를 사용
function Wrapper({children}) {
    const style = {
        border: '2px solid black',
        padding: 16
    };

    return <div style={style}>{children}</div>
}
App.js의 Wrapper태그사이에 넣는 내용을 의미
