
import React, { useCallback, useEffect, useRef, useState } from 'react';

const A05Hook = () => {

    const [data, setData] = useState({
        num: 0,
        str: '아',
        name: ''
    });



    const [today, setToday] = useState(new Date());

    //값이 유지되는 변수를 정의 할 목적으로 사용한다. 화면 갱신 작업은 이루어지지 않는다.
    const cnt = useRef(1); //다만 리랜더링되어도 초기화 되지않고 바뀌는 값을 가지고 있음.
    //1은 초기화 값.

    // DOM 객체를 참조할 목적으로도 사용한다. 이 목적으로 더 많이 사용
    const inputRef = useRef(); //여기는 초기화 값이 없음

    //setTimeout(() => {
    //     setToday(new Date());
    // }, 3000); //3초 후에 함수가 실행되어서 새로운 값 넣어 값이 변경되니  3초후에 화면 리랜더링 됨
    //리랜더링 될때마다 계속 등록됨. 누적됨
    useEffect(() => {// 3초 후 실행 되면 today가 바뀌면 리랜더링 그리고 useEfrct와 changeData가 새롭게 등록  
        //3초후에 새롭게 등록하면서 내부 변수를 등록
        setTimeout(() => {
            setToday(new Date());
        }, 3000);
    }, [data]); //[]로 의존관계가 없으면 초기화할때 한번만 실행시키고 나머진 스킵.
    //data로 의존관계 주면 data가 변경될때마다 useEffect의 내부 변수를 등록

    useEffect(() => {
        console.log(inputRef.current);  //자바스크립트 객체
        inputRef.current.style.border = '1px solid blue';
    }, []);

    //함수
    const changData = useCallback((evt) => setData({ ...data, [evt.target.name]: evt.target.value }), []);
    const increase = useCallback(() => {
        cnt.current++;
        console.log(cnt);
    }, []);
    const decrease = useCallback(() => {
        cnt.current--;
        console.log(cnt);
    }, []);

    const changeName = useCallback(() =>
        setData({ ...data, name: inputRef.current.value })
        , [data]);

    return (
        <div>
            <h3>A05. useState, useEffect</h3>

            <div>
                Num:  {data.num}
                {/* 폼은 이벤트 핸들러랑 같이 들어가야해서 디폴트로해줌 */}
                <input type="text" name="num" className="form-control"
                    defaultValue={data.num} onChange={changData} /><br />
                Str: {data.str}
                <input type="text" name="str" className="form-control"
                    defaultValue={data.str} onChange={changData} /><br />

                {/* 객체라서 표시데이터로 바꿔줘야함 */}
                Today: {today.toLocaleTimeString()}<br />
                <br />

                Cnt: {cnt.current}<br></br>
                <button className="btn btn-outline-primary btn-sm" onClick={increase}>+</button>
                <button className="btn btn-outline-primary btn-sm" onClick={decrease}>-</button>
                <br></br>

                Avg: {data.name}
                <div className="input-group">
                    <input type="text" name="str" className="form-control" ref={inputRef} />
                    <button className="btn btn-outline-primary btn-sm" onClick={changeName}>ADD</button>
                </div>


            </div>
        </div >
    );
};

export default A05Hook;
