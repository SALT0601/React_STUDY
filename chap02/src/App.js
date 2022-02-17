
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import TodoTemplate from './components/TodoTemplate';

function App() {
  return (
    <div className='container'>
      <div className='col-12 text-center'>
        <h1>TodoList</h1>
      </div>
      <div className='col-12 text-center'>
        <TodoTemplate />
      </div>
    </div>
  );
}

export default App;
