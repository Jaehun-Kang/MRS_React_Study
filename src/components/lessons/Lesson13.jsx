import '../../styles/lesson.css';
import CodeBlock from '../CodeBlock';
import Foldable from '../Foldable';

const Lesson13 = {
  name: '13. useRef',
  idx: 13,
  content: (
    <div className="lesson-content">
      <h2>useRef</h2>
      <p>
        렌더링과는 별개로, 변수를 사용하거나 DOM 요소에 접근할 때 사용되는
        기능이다.
      </p>

      <table class="var-table">
        <tbody>
          <tr>
            <td>useState</td>
            <td>값 변경 → 리렌더링 발생</td>
          </tr>
          <tr>
            <td>useReducer</td>
            <td>값 변경 → 리렌더링 발생</td>
          </tr>
          <tr>
            <td>useRef</td>
            <td>값 변경 → 리렌더링 발생 ✖</td>
          </tr>
        </tbody>
      </table>

      <Foldable title="시작 코드">
        <CodeBlock
          filename="APP.jsx"
          language="jsx"
          code={`import './App.css'
        
        
        import Counter from './Counter'
        
        const App = () => (
        <>
        <Counter/>
        </>
        )
        
        export default App`}
        />
        <CodeBlock
          filename="Counter.jsx"
          language="jsx"
          code={`import { useState, useRef } from 'react'

function Counter() {
  // 코드 필요
  
  return (
    <>
      <h2>Counter Counter</h2>
      // 코드 필요
    </>
  )
}

export default Counter`}
        />
      </Foldable>

      <h3>DOM 요소 직접 제어</h3>
      <p>
        useRef 객체에는 숫자, 문자열 등의 값 뿐만 아니라 DOM 요소도 담을 수
        있다. 이 경우 'null'을 넣어 명시적으로 초기화한다.
      </p>
      <h4 style={{ fontSize: '120%', marginLeft: '8px' }}> ref</h4>
      <p>React에서 DOM 요소에 직접 접근하기 위해 사용하는 것이다.</p>
      <CodeBlock
        filename="MyComponent.jsx"
        language="jsx"
        code={`
          import './App.css'
import { useRef } from 'react'

const App = () => {
  // 코드 필요

  return (
    <div>
      // 코드 필요
    </div>
  )
}

export default App
          `}
      />
    </div>
  ),
};

export default Lesson13;
