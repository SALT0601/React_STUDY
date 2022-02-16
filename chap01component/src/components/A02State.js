import React, { useState } from 'react';

function A02State(props) {
    //props는 읽기 전용 변수라서 여기(내부)에서 변경할 수 없다.
    const { name, age } = props;

    //이 state에서만 사용할 내부 변수(변경되어도 화면 갱신은 이루어지지 않음)
    const nick = '하트';
    //이 state에서만 사용할 내부 변수(변경되어도 화면 갱신이 이루어짐)
    //mport React, { useState } from 'react'; 와 같이 import 된다.
    //변수이름, set변수이름 ->(변수 이름을 바꿀 메서드. 보통 변수이름 앞에 set을 써줌)
    // const [변수명, 변수를 변경할 함수명] = useState(초기화값);

    //변수 명으로는 값을 수정할 수 없다. 수정은 항상 같이 기술한 함수로 변경
    const [user, setUser] = useState('스페이드');  //배열로 선언하니까 const로 써도 변경됨
    const [num, setNum] = useState(18);
    const [check, setCheck] = useState(true);
    const [arr, setArr] = useState([11, 20, 200]);
    const [obj, setObj] = useState({
        name: 'Diamond',
        age: 50
    });

    //함수
    //값 조작 (기본형)
    const changeUser = (evt) => setUser('nana'); //자바스크립트는 암묵적으로 첫번째 매개변수는 이벤트로 받음
    const changeNum = (n) => setNum(n); //매개변수 이용하려면 첫번째가 이벤트가 되어야해서 아래에서 이벤트를 만들어서 매개변수 받게함
    const changeCheck = () => setCheck(!check); //묵시적으로 넘어가니 evt 생략가능. 다만 내부에서 이벤트 쓸 땐 넣어줌

    //배열 조작(리퍼런스 형)
    const addArray = () => {
        const num = Math.ceil(Math.random() * 100);
        //setArr(arr.push(num));    //Error
        setArr(arr.concat(num)); //새배열을 만들어서 그 배열을 리턴해줌
    };
    const updateArray = (index, value) => {
        //setArr(arr[index])
        //const data = arr.map((item, i) => index === i ? value : item);
        const data = arr.map((item, i) => {
            if (index === i) return value;
            else return item;
        });
        setArr(data);//새로운 배열로 넣어줘야함
    };
    const deleteArray = (index) => {
        const data = arr.filter((item, i) => index !== i ? true : false);
        //false면 스킵
        setArr(data);   //새로운 배열로 넣어줘야함
    };

    //객체 변경(리퍼런스 형)
    const addObject = (key, value) => {
        //object[key] = value; => Error
        const data = { ...obj, [key]: value };//obj 복사해서 값이 있으면 변경되고 없으면 추가된다.
        //문자열로 넘어오면 []대괄호로 묶는다.
        setObj(data);
    };
    const updateObject = (key, value) => {
        const data = { ...obj, [key]: value };
        setObj(data);
    };
    const deleteObject = (key) => {
        delete obj[key];  //주소값은 바뀌지 않음
        setObj({ ...obj }); //그래서 지운거의 오브젝트를 다시 풀어서 새로 만들어 넣어준다.
    };
    return (
        <div>
            <h3>A02 State</h3>
            <div>
                prosps: {name} / {age} <br></br>
                nomal var : {nick} <br></br>
            </div>
            <br></br>
            <div>
                user: {user}<br></br>
                num: {num}<br></br>
                {/* true, false값은 표시되지 않으므로 화면에 안나옴 */}
                {/* 그래서 다른 값으로 치환해서 표현 */}
                check: {check ? '동의' : '아니'}<br></br>
                arr: {arr[0]} / {arr[1]} / {arr[5]}<br></br>
                obj: {obj.name} / {obj.age} / {obj.address}<br></br>
            </div>
            <div>
                {/* 동적 돔으로 생성 */}
                {arr.map((item, index) => <span key={index}>{item} </span>)}
            </div>

            <div>
                <button onClick={changeUser}>User</button><br></br>
                {/* //(evt) 함수로 이벤트 객체 받고 이 함수가 실행되면서 매개변수 받으면 첫번쨰 매개변수는 이벤트가됨.
                매개변수 이용하려면 이방법으로 해야함  */}
                <button onClick={(evt) => changeNum(3)}>Num</button><br></br>
                <button onClick={changeCheck}>Check</button><br></br>

                <button onClick={addArray}>Add Array</button><br></br>
                <button onClick={() => updateArray(1, 200)}>Update Array</button><br></br>
                <button onClick={() => deleteArray(0)}>Delete Array</button><br></br>

                <button onClick={() => addObject('address', 'Seoul')}>Add Object</button><br></br>
                <button onClick={() => updateObject('address', 'Busan')}>Update Object</button><br></br>
                <button onClick={() => deleteObject('address')}>Delete Object</button><br></br>
            </div>

        </div>
    );
}

export default A02State;