
import React, { useState } from 'react';

const A05Hook = () => {

    const [data, setData] = useState({
        num: 0,
        str: '아'
    });
    const changData = (evt) => setData({ ...data, [evt.target.name]: evt.target.value });

    const [today, setToday] = useState(new Date());

    setTimeout(() => {
        setToday(new Date());
    }, 3000); //3초 후에 함수가 실행되어서 새로운 값 넣어 값이 변경되니  3초후에 화면 리랜더링 됨
    //리랜더링 될때마다 계속 등록됨. 누적됨

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

                Avg:
                <div className="input-group">
                    <input type="text" name="str" className="form-control" />
                    <button className="btn btn-outline-primary btn-sm">ADD</button>
                </div>


            </div>
        </div>
    );
};

export default A05Hook;
