import React from 'react';

function A01Props(props) {          //props 는 React가 알아서 주입해주는 참조변수
    const { comp, name, age, ary, obj, onAdd, changeName, changeAge, num } = props;
    //각자의 오브젝트에서 값을 꺼내 각각의 변수에 대입 가능.
    //디스트럭쳐링이라고 한다. 이렇게 쓰면 props.comp라고 안적고 comp라고만 적을 수 있다.
    return (
        <div>
            <h3>A01 Props Component</h3>

            <div>
                {/* 변수는 보관법으로 */}
                comp: {props.comp}<br />
                Name: {props.name}<br />
                Age: {props.age + 100}<br />
                Array: {props.ary[0]} / {props.ary[1]} / {props.ary[5]}<br />
                Object: {props.obj.name} / {props.obj.age} / {props.obj.address}<br />
                onAdd: {props.onAdd(10, 20)}<br />
                Num: {props.num * 100}<br />
                <button className='btn btn-primary btn-sm' onClick={changeName}>Change Name</button>

            </div>
            <hr />

            <div>
                comp: {comp}<br />
                Name: {name}<br />
                Age: {age + 100}<br />
                Array: {ary[0]} / {ary[1]} / {ary[5]}<br />
                Object: {obj.name} / {obj.age} / {obj.address}<br />
                onAdd: {onAdd(10, 20)}<br />
                Num: {num * 10}<br />
                <button className='btn btn-primary btn-sm' onClick={changeName}>Change Name</button>
            </div>
        </div>
    );
}

export default A01Props;

// 값이 안넘어오면 에러같은게 뜨니까 디폴트로 정해놓고 안넘어오는 것은 디폴트로 정해진걸로 치환해줌
A01Props.defaultProps = {
    num: 1000
};
