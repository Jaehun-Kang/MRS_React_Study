import '../../styles/lesson.css';
import CodeBlock from '../CodeBlock';
import Foldable from '../Foldable';

const Lesson10 = {
  name: '10. State 기초',
  idx: 10,
  content: (
    <div className="lesson-content">
      <h2>State 기초</h2>

      <Foldable title="시작 코드">
        <CodeBlock
          filename="App.jsx"
          language="jsx"
          code={`import './App.css'
import { useState } from 'react'


function App() {


  const [count, setCount] = useState(0)


  console.log(useState(0))


  return (
    <>
    {/*코드필요*/}
    </>
  )
}


export default App`}
        />
      </Foldable>

      <h3>리렌더링이란?</h3>
      <p>
        사용자 화면에 View(내용)를 보여 주는 것을 렌더링이라고 한다.
        <br />
        리액트는 리렌더링이 발생할 때마다 이전의 가상 DOM과 새 가상 DOM을
        비교하여 바뀐 부분만 골라내어 업데이트한다. 이 덕에, 웹페이지가 새로
        고침되지 않은 채 내용만 바뀌는 걸 확인할 수 있다.
      </p>
      <br />
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'
import { useState } from 'react'

function App() {

{/*코드필요*/}

  }

  return (
    <>
      <button onClick={togglePinned}>
        {isPinned && '📌'} Pinn This!
      </button>
    </>
  )
}

export default App`}
      ></CodeBlock>

      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`
import './App.css'
import { useState } from 'react'

function App() {

  {/*코드 필요*/}

  return (
    <>
      <h3>Todo List</h3>
      <ul>
        {/*코드 필요*/}
      </ul>
      <p>Typing: {newTodo}</p>
      <input type='text' value={newTodo}
        onChange={
          (e) => setNewTodo(e.target.value)}/>
      <button onClick={() => addTodo(newTodo)}>
        Add New Task
      </button>
    </>
  )
}

export default App
  `}
      ></CodeBlock>
    </div>
  ),
};

export default Lesson10;
