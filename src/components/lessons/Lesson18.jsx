import '../../styles/lesson.css';
import CodeBlock from '../CodeBlock';
import Foldable from '../Foldable';

const Lesson18 = {
  name: '18. 라우팅',
  idx: 18,
  content: (
    <div className="lesson-content">
      <h2>라우팅</h2>
      <p>
        주어진 URL에 따라 페이지 및 컨텐츠를 제공하는 방식이다.
        <br />
        특정 링크를 클릭했을 때 해당하는 페이지로 이동하도록 하는 등의 용도로
        사용된다.
      </p>
      <p>
        a 태그는 페이지를 이동할 때마다 서버에서 새로운 HTML 문서를 받아온다.
        반면 React의 싱글 페이지 애플리케이션은 처음 로드된 페이지를 유지한 채
        필요한 화면만 변경하여 페이지를 전환한다.
      </p>
      <CodeBlock
        filename="라이브러리 설치용"
        language="jsx"
        code={`react-router-dom`}
      />
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

#root nav > * {
  margin: 0 6px;
}`}
        />
        <CodeBlock
          filename="main.jsx"
          language="jsx"
          code={`import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)`}
        />

        <CodeBlock
          filename="Home.jsx"
          language="jsx"
          code={`const Home = () => (
  <>
    <h2>Home</h2>
    <p>
      Welcome to Web Dev Class!
    </p>
  </>
)

export default Home`}
        />

        <CodeBlock
          filename="About.jsx"
          language="jsx"
          code={`const About = () => (
  <>
    <h2>About</h2>
    <ul>
      {['HTML', 'CSS', 'JavaScript']
        .map((item, idx) => (
          <li key={idx}>{item}</li>
        )
      )}
    </ul>
  </>
)

export default About`}
        />

        <CodeBlock
          filename="Contact.jsx"
          language="jsx"
          code={`const Contact = () => (
  <>
    <h2>Contact</h2>
    <address>
      email: 
      <a href="mailto:yalco@yalco.kr">
          yalco@yalco.kr
      </a>
    </address>
  </>
)

export default Contact`}
        />

        <CodeBlock
          filename="App.jsx"
          language="jsx"
          code={`import './App.css'
import { BrowserRouter, Routes, Route, Link }
  from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      //코드 필요
    </>
  )
}

export default App`}
        />
      </Foldable>

      <h3> Routes, Route</h3>
      <p>
        Routes는 다수의 Root 요소를 포함할 수 있으며, 현재 URL과 path가 일치하는
        Route 하나만 렌더링한다. 각 Route는 path로 URL 경로를, element로
        렌더링할 컴포넌트를 지정한다.
      </p>

      <h3> Link</h3>
      <p>
        Link는 to 속성에 지정한 경로로 URL을 변경하여 페이지를 이동하는
        컴포넌트이다.
        <br />a 태그와 달리 서버에 새로 요청을 보내지 않고, 페이지를
        새로고침하지 않은 채 URL과 히스토리만 프로그래밍적으로 수정하여 해당
        Route를 렌더링한다.
      </p>

      <h3> useNavigate</h3>
      <p>
        useNavigate는 프로그래밍적으로 경로를 변경할 수 있는 훅이다. 반환된
        함수에 이동할 경로를 전달하면 해당 페이지로 이동하며, Link처럼 미리
        경로를 지정하는 방식이 아닌, 동적으로 경로를 변경해야 하는 경우 유용하게
        사용할 수 있다.
      </p>

      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`coimport './App.css'
import { Routes, Route, useParams, useLocation }
  from 'react-router-dom'
import React, { useEffect } from 'react'

function Home() {
  //코드 필요

  return <h1>Home Page</h1>
}

function User() {
  const { id } = useParams()
  const location = useLocation()

  useEffect(() => {
    console.log('Current Path:', location.pathname)
    console.log('URL Parameter (id):', id)
  }, [id, location])

  return <h1>User ID: {id}</h1>
}

function Search() {
  //코드 필요

  useEffect(() => {
    console.log('Current Path:', location.pathname)
    console.log(
      'Query Parameter (keyword):', keyword
    )}, [keyword, location])

  return <h1>Search Keyword: {keyword}</h1>
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/user/:id' element={<User />} />
      <Route path='/search' element={<Search />} />
    </Routes>
  )
}

export default Appde`}
      />

      <h3> useLocation</h3>
      <p>
        현재 URL의 위치 정보를 담은 Location 객체를 반환하는 훅이다. pathname,
        search 등의 정보를 사용할 수 있으며, URL이 변경되면 함께 업데이트된다.
      </p>

      <h3> useParams</h3>
      <p>
        URL의 동적 파라미터를 가져오는 훅이다. :id와 같이 정의된 경로의 값을
        객체 형태로 반환한다.
      </p>

      <h3>잘못된 URL</h3>
      <p>
        등록되지 않은 URL에 접근하는 경우를 처리하기 위해 path="*"를 사용한다.
        *는 다른 Route와 매칭되지 않는 모든 경로를 처리하며, 오류 페이지를
        렌더링할 수 있다.
      </p>

      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/wrong-path">Wrong Path</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/about" element={<h2>About Page</h2>} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </>
  )
}

export default App`}
      />
    </div>
  ),
};

export default Lesson18;
