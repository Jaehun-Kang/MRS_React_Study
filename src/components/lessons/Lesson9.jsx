import '../../styles/lesson.css';
import CodeBlock from '../CodeBlock';
import Foldable from '../Foldable';

const Lesson9 = {
  name: '9. 이벤트 핸들링',
  idx: 9,
  content: (
    <div className="lesson-content">
      <h2>이벤트 핸들링</h2>
      <p>
        웹페이지에서 이벤트란?
        <br />
        사용자의 행동이나 브라우저의 동작 등에 의해 발생하는 사건들을 말한다.
      </p>
      <p>
        중괄호 안에는 실행문이 아닌, 이벤트가 발생했을 때 수행할 '함수'를
        집어넣는다.
      </p>
      {/* <Foldable title="리액트에서 활용되는 여러 이벤트 속성들">
        <p>내용</p>
        <CodeBlock filename="MyComponent.jsx" language="jsx" code={`code`} />
      </Foldable> */}
      <Foldable title="시작 코드">
        <CodeBlock
          filename="App.css"
          language="jsx"
          code={`#root {
  margin: 0 auto;
}

#root button {
  margin: 4px;
  padding: 0.4em 0.8em;
  background-color: #f0f0f0;
}`}
        />

        <CodeBlock
          filename="App.jsx"
          language="jsx"
          code={`import './App.css'

function App() {

  function handleClick() {
    console.log('Event 1')
  }

  return (
    <>
      {*/코드 필요/*}
    </>
  )
}

export default App`}
        />
      </Foldable>
      <h3>분리된 컴포넌트에 적용하기</h3>
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'
import Button from './Button'

function App() {

  return (
    <>
    {*/코드 필요/*}
    </>
  )
}

export default App`}
      />
      <CodeBlock
        filename="Button.jsx"
        language="jsx"
        code={`const Button = ({name}) => (
  <button>
  {*/코드 필요/*}
  </button>
)

export default Button`}
      />
      <h3>마우스 이벤트</h3>
      <p>onMouseEnter, onMouseLeave, onDoubleClick, onContextMenu</p>
      <CodeBlock
        filename="Button.jsx"
        language="jsx"
        code={`const handleEvent = (name, which) => {
  console.log(name, which)
}

const Button = ({name}) => (
  <button>
  {*/코드 필요/*}
  </button>
)

export default Button`}
      />
      <h3>이벤트 객체</h3>
      <p>
        (e)?
        <br />
        이벤트의 상세 정보를 담는 객체이다.
      </p>
      <h3>Synthetic Event</h3>
      <p>
        DOM의 이벤트 객체들과 유사한 속성들을 가지지만, 리액트에 의해 추가적인
        최적화가 적용된 이벤트 개체이다.
        <br />
        브라우저마다 이벤트 구현 방법에 차이가 있는데, Synthetic Event는 이를
        랩핑하여 모든 브라우저에서 일관되게 동작하도록 돕는다.
      </p>
      <p>외에도 효율적인 이벤트 처리로 성능을 높이는 등의 이점이 있다.</p>
      <h3>키보드 이벤트</h3>
      <p>onFocus, onBlur, onChange, onKeyDown, onKeyUp</p>
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'

function App() {

  return (
    <>
      <input
        {/*코드 필요*/}
      />
    </>
  )
}

export default App`}
      />
    </div>
  ),
};

export default Lesson9;
