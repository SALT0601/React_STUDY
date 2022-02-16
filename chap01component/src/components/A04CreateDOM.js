
import React, { useState } from 'react';
let cnt = 4; //여기는 함수 밖이라 리랜더링 안되므로 가능해짐.
//이렇게 밖에 안두고 내부에서도 가능한 방법은 usrRef()를 통해 가능함
function A04CreateDOM() {
    const baseArray = ['NC', '두산', '엘지', 'KT', '키움'];

    const [baseObject, setBaseObject] = useState([
        { id: 1, team: 'NC', value: 'NC' },
        { id: 2, team: '두산', value: 'Doosan' },
        { id: 3, team: '엘지', value: 'LG' },
    ]);

    const [data, setData] = useState({
        teamOne: '',
        teamTwo: '',
        isChecked: false,
    });

    const changeTeam = (evt) => setData({ ...data, [evt.target.name]: evt.target.value });
    const addArray = () => baseArray.push('한화');
    //data를 다 풀고 ischecked 항목을 !data.isChecked 바꿔라
    const showHide = () => setData({ ...data, isChecked: !data.isChecked });


    //let cnt = 4; / / 화면이 리랜더링되면 다시 4로 초기화.id: cnt++ 못함;
    const addTeam = () => {
        const data = { id: cnt++, team: '한화', value: 'Hanwa' }; //키가 중복되면 에러
        setBaseObject(baseObject.concat(data));
    };
    return (
        <div>
            <h3>A04 Make DOM</h3>

            SelectBox: {data.teamOne}<br />
            <select name="teamOne" className="form-control" onChange={changeTeam} >
                <option>선택해주세요</option>
                {/* {} 구문은 for, while, if 등의 제어문 구문은 기술 안됨.
                    map, filter는 가능. 이건 함수이므로. 
                    map((item, index) => {})
                    */}
                {/* 동적 돔 만들기 */}
                {baseArray.map((item, index) => <option key={index}>{item}</option>)}
                {/*각 요소볍ㄹ로 index가 있으니 index 써도 중복 안됨  */}

            </select>

            SelectBox: {data.teamTwo}<br />
            <select name="teamTwo" className="form-control" onChange={changeTeam}>
                <option value="">선택해주세요</option>
                {baseObject.map(item => {
                    return <option value={item.value} key={item.id}>{item.team}</option>; //그냥 item 은 { id: 1, team: 'NC', value: 'NC' }, 이 한줄

                })}
            </select>

            <table className="table">
                <thead>
                    <tr>
                        <th>NO</th><th>Team</th><th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {baseObject.map(item => {
                        return ( //괄호 치면 개행해도 ()로 하나로 리턴 받아서 좋음. 다만 리턴 되는 태그는 하나여야함.
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.team}</td>
                                <td>{item.value}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {/* ||, && 연산자로도 사용한다. 
            &&에서
            앞의 값이 false면 랜더링 안하고  뒤의 구문 무시
            앞의 값이 true면 뒤가 뭔지 알아야해서 뒤를 싱행함*/}
            {data.isChecked &&
                <div className="input-group">
                    <input type="text" className="form-control" />
                    <button className="btn btn-outline-primary btn-sm" onClick={addArray}>ADD</button>
                </div>
            }

            <br />

            <button className="btn btn-outline-primary btn-sm" onClick={addTeam}>ADD TEAM</button>
            <button className="btn btn-outline-primary btn-sm" onClick={showHide}>{data.isChecked ? 'HIDE' : 'SHOW'}</button>
        </div>
    );
}

export default A04CreateDOM;
