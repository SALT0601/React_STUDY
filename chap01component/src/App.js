import { useState } from 'react';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
//App는 합치는 역할만 함
import A01Props from './components/A01Props';
import A02State from './components/A02State';
import A04CreateDOM from './components/A04CreateDOM';
import A05Hook from './components/A05Hook';
import A06Currency from './components/A06Currency';
import A07Style from './components/A07Style';
import A08StyleModule from './components/A08StyleModule';
function App() {
  //useState로 정의된 변수는 값이 변경되면 변겅된 값으로 화면 갱신을 한다.
  const [name, setName] = useState('NolBu');

  //이 변수는 변경되도 화면에 반영되지 않는 일반 변수
  let age = 20;
  const arr = [10, 11, 100];
  const obj = {
    name: '클로버',
    age: 18
  };
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;
  let changeAge = () => age = 100; //내부적으로는 변경 된다.
  const changeName = () => setName('놀부');
  return (
    <div className='container'>
      <div className='col-12'>
        <h1>Component</h1>
      </div>
      <div className='col-12'>
        <A08StyleModule />
      </div>
      <br></br>
      <hr></hr>
      <div className='col-12'>
        <A07Style />
      </div>
      <br></br>
      <hr></hr>
      <div className='col-12'>
        <A06Currency />
      </div>
      <br></br>
      <hr></hr>
      <div className='col-12'>
        <A05Hook />
      </div>
      <br></br>
      <hr></hr>
      <div className='col-12'>
        <A04CreateDOM />
      </div>
      <br></br>
      <hr></hr>

      <div className='col-12'>
        <A02State name={name} age={age} />
      </div>
      <br></br>
      <hr></hr>

      <div className='col-12'>

        {/* 전달 값은 속성 형식으로 전달한다. {변수} 를 "" 로묶지 않는다. 변수를 {} 묶어야 변수의 값이 전달됨*/}
        <A01Props name={name} age={age} ary={arr}
          obj={obj} onAdd={onAdd} changeName={changeName} changeAge={changeAge} />
      </div>

    </div>
  );
}

export default App;
