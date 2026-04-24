import "../../styles/lesson.css";
import CodeBlock from "../CodeBlock";
import Foldable from "../Foldable";

const Lesson12 = {
  name: "12. useReducer",
  idx: 12,
  content: (
    <div className="lesson-content">
      <h2>useReducer</h2>
      <p>관리해야할 상태의 로직이 복잡할 때 사용되는 기능이다.</p>
      <h3>이름 및 출생연도 입력 웹페이지</h3>
      <CodeBlock
        filename="App.css"
        language="css"
        code={`#root {
      margin: 0 auto;
      }
      
      #root button {
      margin: 4px;
      padding: 0.4em 0.8em;
      background-color: #f0f0f0;
      }
      
      input[type=text] {
      display: block;
      margin: 8px 0;
      padding: 4px;
      font-size: 0.92em;
      }`}
      />
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'
import { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [year, setYear] = useState('')
  const [warning, setWarning] = useState('')

  const handleNameChange = (newName) => {
    // 코드 필요
  }

  const handleYearChange = (newYear) => {
    const age = new Date().getFullYear() - newYear
    // 코드 필요
  }

  return (
    <div>
      // 코드 필요
      <p>Name: {name}</p>
      <p>Year: {year}</p>
    </div>
  )
}

export default App
`}
      />
      <h3>User Reduser 사용하기</h3>
      <CodeBlock
        filename="reducers/userReducer.js"
        language="js"
        code={`export const initialState = {
  name: '',
  year: '',
  warning: ''
}

//코드필요`}
      />
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'
import React, { useReducer } from 'react'
import { userReducer, initialState }
 from './reducers/userReducer'

function App() {
  const [state, dispatch]
   = useReducer(userReducer, initialState)

  return (
    <div>
      // 코드 필요
      <p>Name: {state.name}</p>
      <p>Year: {state.year}</p>
    </div>
  )
}

export default App
`}
      />
      <p>
        {" "}
        state와 dispatch 이름을 사용하는데 state는 현재의 상태값들을 가진
        객체고, 뒤에 dispatch는 이를 수정하는데 사용되는 함수이다.
      </p>
      <p>
        {" "}
        dispatch 함수의 인자로 들어가는 객체의 type 속성 값에 따라 actio 중
        하나로 동작하고 action은 하나의 객체를 반환한다. 또 객체는 state 값들을
        스프레드 연산자로 가져온 다음 수정된 속성들의 값에 덮어씌운다.
      </p>
      <p>
        {" "}
        나이 입력창은 계산 값에 따라 반영 되므로 일정 숫자를 넘어가면 경고
        문구가 나온다. 이는 해당 입력창의 value 값이 수정되지 않기 때문이다.
      </p>
      <h3>초기 값이 함수를 통해 지정되도록 useReduser를 사용하는 방법</h3>
      <CodeBlock
        filename="App.css"
        language="css"
        code={`#root {
      margin: 0 auto;
      }
      
      #root button {
      margin: 4px;
      padding: 0.4em 0.8em;
      background-color: #f0f0f0;
      }
      
      input[type=text] {
      display: block;
      margin: 8px 0;
      padding: 4px;
      font-size: 0.92em;
      }`}
      />
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'
import { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [year, setYear] = useState('')
  const [warning, setWarning] = useState('')

  const handleNameChange = (newName) => {
    // 코드 필요
  }

  const handleYearChange = (newYear) => {
    const age = new Date().getFullYear() - newYear
    // 코드 필요
  }

  return (
    <div>
      // 코드 필요
      <p>Name: {name}</p>
      <p>Year: {year}</p>
    </div>
  )
}

export default App
`}
      />
      <h3>User Reduser 사용하기</h3>
      <CodeBlock
        filename="data.js"
        language="js"
        code={`const externalData = {
  name: 'jane doe',
  year: 1995
}

export default externalData`}
      />
      <p>data.js는 외부로 부터 들어오는 데이터</p>
      <CodeBlock
        filename="reducers/userReducer.js"
        language="js"
        code={`export const initialState = {
  name: '',
  year: '',
  warning: ''
}

export function userReducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { 
        ...state, 
        name: action.payload.trim().toLowerCase() }
    case 'SET_YEAR': {
		  const age = new Date().getFullYear() - action.payload
		  if (age < 18) {
		    return { 
		      ...state, 
		      warning: 'Must be at least 18 yrs old!' 
		    }
		  }
		  return { 
		    ...state, 
		    year: action.payload, 
		    warning: '' 
		  }
		}
    // 코드 필요
}

// 코드 필요
`}
      />
      <p>
        userReducer.js는 위의 InitialState 객체 대신 이 init 함수가 가운데의
        함수와 함게 앱 컴포넌트가 임포트 된다.
      </p>
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'
import React, { useReducer } from 'react'
// 코드 필요

function App() {
  const [state, dispatch]
   = useReducer(// 코드 필요/, // 코드 필요)

  return (
    <div>
      <input
        type="text" placeholder="Enter name"
        value={state.name}
        onChange={(e) => dispatch({ 
          type: 'SET_NAME',  payload: e.target.value })}
      />
      <input
        type="number" placeholder="Enter birth year"
        value={state.year}
        onChange={(e) => dispatch({ 
          type: 'SET_YEAR', payload: e.target.value })}
      />
      {state.warning
       && <p style={{ color: 'red' }}>{state.warning}</p>}
      <p>Name: {state.name}</p>
      <p>Year: {state.year}</p>
      // 코드 필요
    </div>
  )
}

export default App
`}
      />
      <p>코드 복붙 없이 추가 진행</p>
      <p>
        이 init과 같은 초기화 함수는 초기값을 계산하는데 비용이 많이 들거나
        복잡한 로직이 필요할 때 사용된다.
      </p>
      <h3>숫자 버튼으로 보는 meta 속성</h3>
      <CodeBlock
        filename="reducers/countReducer.js"
        language="js"
        code={`export const initialState = {
  count: 0
}

export function countReducer(state, action) {
  const { value } = action.payload
  const { x, y } = action.meta
  switch (action.type) {
    // 코드 필요
      }
    case 'DEC':
      // 코드 필요
  }
}
`}
      />
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'
import React, { useReducer } from 'react'
import { countReducer, initialState }
from './reducers/countReducer'

function App() {
  const [state, dispatch]
  = useReducer(countReducer, initialState)

  const handleClick = (type, value, event) => {
    const { clientX: x, clientY: y } = event
    dispatch({
      type, payload: { value }, meta: { x, y }
    })
  }

  return (
    <>
      <p>Count: {state.count}</p>
      // 코드 필요
    </>
  )
}

export default App
`}
      />
      <p>
        action에 meta라는 속성이 추가로 사용된다. 이 속성은 컴포넌트의 상태와는
        별개로 디버깅 및 로깅, 분석 등에 사용될 추가적인 데이터를 실어
        내보내는데 사용된다.
      </p>
      <p>
        이처럼 페이로드에 실린 값은 보통 웹페이지의 렌더링으로 결과가 나타날
        데이터로 주로 사용된다.
      </p>
      <p>
        화면에 직접적으로 나타나는 것 이외의 용도로 사용되는 데이터들은 보통
        meta 속성으로 실어 내보내진다.
      </p>
    </div>
  ),
};

export default Lesson12;
