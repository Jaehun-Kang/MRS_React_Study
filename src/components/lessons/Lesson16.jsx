import "../../styles/lesson.css";
import CodeBlock from "../CodeBlock";
import Foldable from "../Foldable";

const Lesson16 = {
  name: "16. 최적화",
  idx: 16,
  content: (
    <div className="lesson-content">
      <h2>최적화</h2>
      <p>
        React에서 최적화란 불필요한 연산이나 렌더링을 방지하여 애플리케이션의
        성능을 개선하는 것
      </p>
      <h3>1. useMemo</h3>
      <CodeBlock
        filename="App.css"
        language="css"
        code={`#root {
  margin: 0 auto;
}

#root button {
  margin: 4px;
  background-color: #f0f0f0;
}`}
      />
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'
import { useState } from 'react'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  // 코드 필요

  // 최적화 코드 추가

  return (
    <>
      <p>Counter 1: {count1}</p>
      // 코드 필요
      <p>Counter 2: {
        heavyCalculation(count2)
        // 최적화를 위한 위 코드 변형 필요
      }</p>
      // 코드 필요
  )
}

export default App`}
      />
      <p>
        이처럼 useMemo는 특정 연산에 불필요한 제실행을 방지하여 어플리케이션의
        성능을 최적화하는데 사용됩니다.
      </p>

      <h3>2. React.memo</h3>
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'
import { useState } from 'react'
import Child from './Child'

function App() {
  const [count, setCount] = useState(0)
  const [active, setActive] = useState(true)

  return (
    <>
      <h2>Parent</h2>
      <button onClick={
        () => setCount(count + 1)
      }>Increase</button>
      <button onClick={
        () => setActive(a => !a)
      }>Change Name</button>
      <p>Count: {count}</p>
      <Child active={active} />
    </>
  )
}

export default App`}
      />
      <CodeBlock
        filename="Child.jsx"
        language="jsx"
        code={`import React from 'react'

function Child({ active }) {
  console.log(
    'Child rendered'
  )
  return (
    <p>
      // 코드 필요
    </p>
  )
}

export default Child
// 최적화를 위한 위 코드 변형 필요 `}
      />
      <p>
        이처럼 React의 메모 기능을 사용해서 자식 컴포넌트의 불필요한 렌더링을
        방지 가능하다.
      </p>

      <h3>3. useCallback</h3>
      <CodeBlock
        filename="Child.jsx"
        language="jsx"
        code={`import React from 'react'

function Child({ 
// 코드 필요
}) {
  console.log(
    'Child rendered'
  )

  return (
    <div>
      <p>Child: {
        active ? 'Active' : 'Not active'
      }</p>
      <button onClick={onClick}>
        Increase
      </button>
    </div>
  )
}

export default React.memo(Child)`}
      />
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'
import { useState } from 'react'
import Child from './Child'

function App() {
  const [count, setCount] = useState(0)
  const [active, setActive] = useState(true)

  // 최적화를 위한 코드 추가

  return (
    <>
      // 코드 필요
      // 최적화를 위한 코드 변형
    </>
  )
}

export default App`}
      />
      <p>
        이처럼 자식 컴포넌트에 props로 넘겨지는 함수이거나 함수 자체의 생성
        비용이 높은 경우 유용하게 사용될 수 있다.
      </p>
    </div>
  ),
};

export default Lesson16;
