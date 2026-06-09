import '../../styles/lesson.css';
import CodeBlock from '../CodeBlock';
import Foldable from '../Foldable';

const Lesson14 = {
  name: '14. 생명주기와 useEffect',
  idx: 14,
  content: (
    <div className="lesson-content">
      <h2>생명주기와 useEffect</h2>
      <p>내용</p>
      <h4 style={{ fontSize: '120%', marginLeft: '8px' }}> Mounting</h4>
      <p>컴포넌트가 처음으로 렌더링 되는 시점</p>
      <h4 style={{ fontSize: '120%', marginLeft: '8px' }}> Updating</h4>
      <p>
        props, state가 변경되는 시점 등에 리렌더링 되어 화면에 새롭게 나타남
      </p>
      <h4 style={{ fontSize: '120%', marginLeft: '8px' }}> Unmounting</h4>
      <p>컴포넌트가 DOM에서 제거되는 순간에 이뤄짐</p>

      <Foldable title="시작 코드">
        <CodeBlock
          filename="App.css"
          language="css"
          code={`#root {
          margin: 0 auto;
          }
          
          #root button {
            margin: 4px;
            background-color: #f0f0f0;
            }
            
            label {
              font-size: 1.2em;
              margin-right: 0.6em;
              cursor: pointer;
              }`}
        />

        <CodeBlock
          filename="App.jsx"
          language="jsx"
          code={`import './App.css'
import ClassComp from './ClassComp'
import FuncComp from './FuncComp'
import { useState } from 'react'

const App = () => {
  // 코트 필요

  return (
    <>
      // 코드필요
    </>
  )
}
export default App`}
        />

        <CodeBlock
          filename="ClassComp.jsx"
          language="jsx"
          code={`import { Component } from 'react'
          
          class ClassComp extends Component {
            constructor(props) {
              super(props)
              this.state = { count: 0 }
              }
              
              // 코드 필요
                    
            handleIncrement = () => {
              this.setState(prevState => (
                { count: prevState.count + 1 }
              ))
            }
              
            render() {
              console.log('-- Rendering --')
              return (
                // 코드 필요
              )
            }
          }
          
          export default ClassComp`}
        />

        <CodeBlock
          filename="FuncComp.jsx"
          language="jsx"
          code={`import { useState, useEffect } from 'react'

const FuncComp = () => {
  const [count, setCount] = useState(0)

  // 코드 필요

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1)
  }

  console.log('-- Rendering --')

  return (
    <div>
      <h2>Function Component</h2>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>
        Increase
      </button>
    </div>
  )
}

export default FuncComp`}
        />
      </Foldable>

      <p>
        console에서 로그가 의도대로 출력되지 않는 경우, main.jsx에서
        StrictMode를 비활성화하면 정상적으로 작동한다.
      </p>

      <h3>Hook</h3>
      <p>
        리액트는 필드와 메소드를 사용해 state 및 생명 주기에 관련된 기능들을
        구현한다. 그러나, 우리가 사용하는 함수 문법에는 필드와 메소드가 없기에
        이를 구현할 다른 방법이 필요하다.
        <br />
        이를 위해 도입된 기능을 Hook이라고 한다.
      </p>

      <h3>UseEffect</h3>
      <p>
        리액트의 내장 Hook.
        <br /> useEffect의 두 번째 인자로 빈 배열을 넣으면, 첫 번째 인자로 넣은
        함수는 컴포넌트가 마운트된 직후에(첫 렌더링 시점) 실행된다. =
        componentDidMount 함수의 기능
        <br /> 두 번째 인자를 제거할 경우, 모든 렌더링에 반응하게 된다.
      </p>

      <h3>useEffect의 활용 예</h3>
      <p>
        API를 사용하여 서버에서 받아온 데이터를 화면에 렌더링하는 용도 1. 데이터
        없이도 보여줄 수 있는 부분을 먼저 렌더링한다. (페이지의 기본 틀 =
        마운팅이 먼저 실행된다.)
        <br />
        2. 서버로부터 렌더링 될 요소에 필요한 데이터를 받아온다.
      </p>

      <CodeBlock
        filename="public/data/books.json"
        language="json"
        code={`[
  {
    "id": 1,
    "title": "React Basics",
    "author": "John Doe"
  },
  {
    "id": 2,
    "title": "Advanced React",
    "author": "Jane Smith"
  },
  {
    "id": 3,
    "title": "JavaScript Essentials",
    "author": "Alan Turing"
  },
  {
    "id": 4,
    "title": "CSS Mastery",
    "author": "Rachel Green"
  }
]`}
      />

      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'
import { useState, useEffect } from 'react'

const App = () => {
  // 코드필요

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App`}
      />

      <h3>useEffect의 활용 예 - Unmounting</h3>
      <p>
        컴포넌트가 제거될 때, 남아있는 불필요한 리소스들을 제거하는 용도로
        사용된다.
      </p>

      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'
import { useState } from 'react'
import Timer from './Timer'

const App = () => {
  // 코드 필요

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showTimer}
          onChange={
            (e) => setShowTimer(
              e.target.checked
            )}/>
        Show Timer
      </label>
      {showTimer && <Timer />}
    </>
  )
}

export default App`}
      />
      <CodeBlock
        filename="Timer.jsx"
        language="jsx"
        code={`import { useState, useEffect } from 'react'

const Timer = () => {
  // 코드 필요

  return <p>Timer: {seconds} seconds</p>
}

export default Timer`}
      />
    </div>
  ),
};

export default Lesson14;
