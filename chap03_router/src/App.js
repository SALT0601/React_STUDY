import 'bootstrap/dist/css/bootstrap.css';
// npm i bootstrap@4

//https://velog.io/@soryeongk/ReactRouterDomV6 => 6버전 방법

// npm un react-router  => 6버전 삭제
// npm i react-router@5  => 5는 아래 기술한대로

// npm un react-router-dom => 6버전 삭제
// npm i react-router-dom@5
// npm i react-loader-spinner

import { Link, Route, Switch, NavLink } from 'react-router-dom';
import A01FunctionProps from './components/A01FunctionProps';
import A02FunctionState from './components/A02FunctionState';
import A03Currency from './components/A03Currency';
import A04History from './components/A04History';
import A05MatchParam from './components/A05MatchParam';
import A06Arguments from './components/A06Arguments';
import A07ChildComponent from './components/A07ChildComponent';
import NotFoundComponent from './components/NotFoundComponent';

function App() {
  const user = { name: 'HungBu', age: 20 };
  const ary = ['a', 'b', 'c'];
  const onPlus = (x, y) => {
    return `${x} + ${y} = ${x + y}`;
  };

  const style = { color: 'orange', fontWeight: 'bold', backgroundColor: 'red' };

  return (
    <div className="card-body">
      <h1>Router</h1>

      <div>
        <NavLink activeStyle={style} to="/">Index</NavLink>  | {' '}
        <NavLink activeStyle={style} to="/props">props</NavLink>  |{' '}
        <NavLink activeStyle={style} to="/state">State</NavLink>  |{' '}
        <Link to="/currency">Currency</Link>  |{' '}
        <Link to="/history">History</Link>  |{' '}
        <Link to="/params/5/data/hoho">hoho</Link>  |{' '}
        <Link to="/params/3/data/haha">haha</Link>  |{' '}
        <Link to="/args?no=5&name=hehe&add=Seoul#TOP">args</Link>  |{' '}
        <Link to="/child">child</Link>  |{' '}
        <Link to="/abc">ABC</Link>  |{' '}

      </div>
      <hr></hr>

      {/* Route가 기술된 영역에 지정한 컴퍼넌트가 표시된다 
        exact => path의 매칭 여부
        </switch> => 매칭되는 path를 만나면 </switch> 태그를 벗어난다.(하위검색 안함)
      */}
      <Switch>
        {/* exact={true} -> 정확히 일치하는 패스만 나옴 */}
        <Route path="/" exact={true} render={() => <div>
          <h1>Index Page</h1>
          <div>Hello World</div>
        </div>} />
        {/* props 값을 전달할 필요가 있는 경우 */}
        {/*A01FunctionProps에 props한거 다 있어야함  */}
        <Route path="/props" render={() => <A01FunctionProps
          name="NolBu" age={20} arr={ary} user={user} onPlus={onPlus} isChecked={true} />} />
        {/* props 값 전달 없이 순수하게 표시만 하는 경우 */}
        <Route path="/state" component={A02FunctionState}></Route>
        <Route path="/currency" component={A03Currency}></Route>
        <Route path="/history" component={A04History}></Route>
        {/* path/:no => no는 임의의 이름이 들어올 수 있는 패스 이름이 되면서 변수명 역할을 한다.
        params/10 뒤에 이렇게 아무거나 쳐도 링크가 이동한다. 
        :이 없으면 변수명 아니다.*/}
        <Route path="/params/:no/data/:name" component={A05MatchParam}></Route>

        {/* 주소줄에 ?no=5$name=Nolbu&add=Seoul 형태로 전달. 여기서는 기술하지 않고 Link에서 기술 */}
        <Route path="/args" component={A06Arguments}></Route>
        <Route path="/child" component={A07ChildComponent}></Route>
        {/* 맨 마지막에 기술한다 */}
        <Route path="/*" component={NotFoundComponent}></Route>
      </Switch>
    </div>
  );
}

export default App;
