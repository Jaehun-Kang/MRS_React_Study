import "../../styles/lesson.css";
import CodeBlock from "../CodeBlock";
import Foldable from "../Foldable";

const Lesson15 = {
  name: "15. 커스텀 훅",
  idx: 15,
  content: (
    <div className="lesson-content">
      <h2>커스텀 훅</h2>

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
        filename="useCounter.js"
        language="jsx"
        code={`import { useState } from 'react'

function useCounter(initialValue = 0) {
  // 코드 필요

  return { count, increment, decrement }
}

export default useCounter`}
      />
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'
import useCounter from './hooks/useCounter'

// 코드 필요

  return (
    <>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>
        Increment
      </button>
      <button onClick={decrement}>
        Decrement
      </button>
    </>
  )
}

export default App`}
      />
      <p>
        내부에서 훅을 사용할 수 있는 것은 다른 훅뿐이다. 커스텀 훅을 만들 때 꼭
        지켜야 할 점은 이처럼 이름이 use로 시작하도록 명명해야 해당 함수를
        훅으로 인식한다.
      </p>
      <p>훅은 반드시 컴포넌트 함수 안에서 실행이 되어야한다는 점이다. </p>
      <h2>useEffect 훅</h2>
      <CodeBlock
        filename="useWindowSize.js"
        language="jsx"
        code={`import { useState, useEffect } from 'react'

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  // 코드 필요

  return windowSize
}

export default useWindowSize`}
      />
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'
import useWindowSize
  from './hooks/useWindowSize'

const App = () => {
  const {width, height}
    = useWindowSize()

  return (
    <>
      <h2>Window Size</h2>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </>
  )
}

export default App`}
      />
      <p>
        state나 생명 주기 관련 기능들을 사용하는 특정 로직을 오듈로 분리해서
        필요한 컴포넌트들에서 재활용할 수 있도록 하는데 리액트의 hook이
        사용된다.
      </p>
      <h2>useFetch 훅</h2>
      <CodeBlock
        filename="package.json"
        language="json"
        code={`{
  "name": "book-server",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2"
  }
}`}
      />
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const PORT = 3000

const books = [
  { 
    id: 1, 
    title: 'The Great Gatsby', 
    author: 'Scott Fitzgerald' 
  }, { 
    id: 2,
    title: '1984',
    author: 'George Orwell'
  }, { 
    id: 3,
    title: "Hamlet",
    author: "Shakespeare" 
  }
]

//코드필요`}
      />
      <p>새로운 파일을 열어서 코드를 적는다.</p>
      <p>
        터미널을 열어 npm i를 치고 json 모듈 설치 후 npm start를 입력해 서버를
        실행한다.
      </p>
      <CodeBlock
        filename="useFetch.js"
        language="js"
        code={`import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // 코드 필요

  return { data, loading, error }
}`}
      />
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'
import { useFetch } from './hooks/useFetch'

const App = () => {
  const { data, loading, error }
   = useFetch('http://localhost:3000/books')

  return (
    <>
      <h2>Book List</h2>
      {loading ? <p>Loading...</p>
      : error ? <p>Error: {error}</p> 
      : (
      <ul>
        // 코드 필요
      </ul>)}
    </>
  )
}
export default App`}
      />
    </div>
  ),
};

export default Lesson15;
