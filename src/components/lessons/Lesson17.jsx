import '../../styles/lesson.css';
import CodeBlock from '../CodeBlock';
import Foldable from '../Foldable';

const Lesson17 = {
  name: '17. Context',
  idx: 17,
  content: (
    <div className="lesson-content">
      <h2>Context</h2>
      <p>
        Props는 부모에서 특정 자식에게 데이터를 전달할 때, 중간에 있는 모든
        단계들을 거쳐 전달해야 하는 방식이다.
        <br />
        Context는 중간 컴포넌트를 거치지 않고 필요한 컴포넌트에만 연결해 직접
        데이터를 전달할 수 있어, 불필요한 Props 전달을 줄이고 유지보수를 쉽게
        해준다.
      </p>
      <Foldable title="시작 코드">
        <CodeBlock
          filename="App.jsx"
          language="jsx"
          code={`import './App.css'
import { useState }
  from 'react'
import Child1
  from './Child1'

function App() {
  const [count, setCount]
    = useState(0)

  return (
    <div>
      <h2>App</h2>
      <Child1
        count={count} setCount={setCount} 
        />
    </div>
  )
}

export default App`}
        />

        <CodeBlock
          filename="Child1.jsx"
          language="jsx"
          code={`import Child2
  from './Child2'

function Child1(
  { count, setCount }
) {
  return (
    <div>
      <h2>Child1</h2>
      <Child2
        count={count}
        setCount={
          setCount
        } 
      />
    </div>
  )
}

export default Child1`}
        />

        <CodeBlock
          filename="Child2.jsx"
          language="jsx"
          code={`function Child2(
  { count, setCount }
) {
  return (
    <div>
      <h2>Child2</h2>
      <p>
      Count: {count}
      </p>
      <button onClick={
        () => setCount(
          count + 1
          )}>
          Increase
          </button>
          </div>
          )
          }
          
          export default Child2`}
        />
      </Foldable>

      <h3>Provider</h3>
      <p>
        Provider는 Context의 데이터를 하위 컴포넌트에 전달하는 컴포넌트이다.
        <br /> 이전에는 'Context.Provider'를 통해 사용했지만, React 19부터는
        '.Provider'를 붙이지 않고 사용할 수 있다.
      </p>
      <CodeBlock
        filename="CountContext.jsx"
        language="jsx"
        code={`import { createContext, useState } from 'react'
          
          const CountContext = createContext()
          
          //코드 필요
          
          export { CountContext, CountProvider }`}
      />

      <Foldable title="CountContext Child">
        <CodeBlock
          filename="App.jsx"
          language="jsx"
          code={`import './App.css'
  import { CountProvider } from './contexts/CountContext'
  import Child1 from './Child1'
  
  function App() {
    return (
      //코드 필요
      )
      }
      
      export default App`}
        />

        <CodeBlock
          filename="Child1.jsx"
          language="jsx"
          code={`import Child2 from './Child2'

function Child1() {
  return (
    <div>
    <h2>Child</h2>
    <Child2 />
    </div>
    )
}

export default Child1`}
        />

        <CodeBlock
          filename="Child2.jsx"
          language="jsx"
          code={`import { useContext } from 'react'
import { CountContext } from './contexts/CountContext'

function Child2() {
  //코드 필요
}

export default Child2
`}
        />
      </Foldable>
      <p>
        하나의 Context에 많은 컴포넌트를 포함하면 값이 변경될 때 불필요한
        리렌더링이 발생할 수 있다. 따라서 용도별로 Context를 분리하면, 특정
        Context의 변경이 다른 Context를 사용하는 컴포넌트에 영향을 주지 않는다.
      </p>

      <Foldable title="ToggleContext, Child">
        <CodeBlock
          filename="ToggleContext.jsx"
          language="jsx"
          code={`import { createContext, useState } from 'react'
          
          const ToggleContext = createContext()
          
          function ToggleProvider({ children }) {
            //코드 필요
              }
              
              export { ToggleContext, ToggleProvider }
              `}
        />

        <CodeBlock
          filename="Child3.jsx"
          language="jsx"
          code={`import { useContext } from 'react'
import Child4 from './Child4'
import { ToggleContext } from './contexts/ToggleContext'

function Child3() {
  //코드 필요

  return (
    <div>
      <h2>Child3</h2>
      //코드 필요
    </div>
  )
}

export default Child3
`}
        />

        <CodeBlock
          filename="Child4.jsx"
          language="jsx"
          code={`import { useContext } from 'react'
import { ToggleContext } from './contexts/ToggleContext'

function Child4() {
  //코드 필요

  return (
    <div>
      <h2>Child4</h2>
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}

export default Child4`}
        />
      </Foldable>
      <p>
        이처럼, useContext 훅을 사용하면 필요한 Context의 데이터만 가져와 사용할
        수 있다.
      </p>
    </div>
  ),
};

export default Lesson17;
