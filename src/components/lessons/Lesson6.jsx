import "../../styles/lesson.css";
import CodeBlock from "../CodeBlock";
import Foldable from "../Foldable";

const Lesson6 = {
  name: "6. 조건부 렌더링과 리스트 렌더링",
  idx: 6,
  content: (
    <div className="lesson-content">
      <h2>조건부 렌더링과 리스트 렌더링</h2>
      <p>첫 시작</p>
      <CodeBlock
        filename="App.css"
        language="jsx"
        code={`#root {
  margin: 0 auto;
}`}
      />
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'

function App() {

  const isLoggedIn = true

 return (
    <>
      {<h1>JSX</h1>}

      // 코드가 필요해요

      {isLoggedIn ? (
        <>
          <h2>Welcome back!</h2>
          <p>You are logged in. Enjoy your time here!</p>
        </>
      ) : (
        <>
          <h2>Hello, Guest!</h2>
          <p>Please log in to access more features.</p>
        </>
      )}
    </>
  )
}

export default App`}
      />
      <p>
        Boolean 은 상수, bool ? A : B 은 삼항연산자로 구문 전체가 물음표 앞에
        있는 값에 따라 콜론 양쪽에 있는 값들 중 한 값을 반환하는 표현식이다.
        물음표 앞에 true 또는 true와 같이 취급되는 값이 들어오면 콜론 앞에 있는
        값이 반환되고 false 또는 false와 같이 취급되는 값이 들어오면 콜론 뒤에
        있는 값이 반환된다.
      </p>
      <p>예제</p>
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'

function getUserContent(userStatus) {
  return (
    // 코드가 필요해요
    )
  );
}

function App() {

 return (
    <>
      {getUserContent("admin")}
    </>
  )
}

export default App`}
      />
      <p>
        이처럼 실무에서 사망 연산자를 다양하게 응요하여 조건부 렌더링을 구현할
        수 있다.
      </p>
      <p>예제</p>
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'

function App() {

  const hasMessages = true;
  const message = "Hello, World!"

  return (
    <>
    // 코드가 필요해요
    </>
  )
}

export default App`}
      />
      <p>
        &&는 앞의 값이 참일 경우 뒤의 요소가 렌더링 되어 화면에 나타나게 된다.
        즉 뒤에 JSX요소가 그대로 나온다. 반대로 false라면 화면에 나타나지
        않는다.
      </p>
      <h3>리스트 렌더링</h3>
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'

function App() {

 return (
    <>
      // 코드 필요해요
    </>
  )
}

export default App`}
      />
      <p>
        중괄호 표현식에는 배열을 넣을 수 있다. 버튼 요소들을 쉼표로 구분해
        유용하게 사용할 수 있다.
      </p>
      <p>
        자바스크립트에는 map이라는 메소드가 있다. 이는 매개 변수를 받아 처리한
        값을 반환하는 함수를 매개 변수로 받는다. 이러한 값을 리스트 렌더링이라고
        한다.{" "}
      </p>
      <p>
        리스트 렌더링을 할 때는 반복될 요소에 이처럼 키라는 속성을 설정해
        주어야하고 변동 사항을 빠르게 파악하기 위해선 각 요소에 번호표를
        붙여주어야 한다.{" "}
      </p>
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'

function App() {

  const fruits = ["Apple", "Banana", "Cherry"]

 return (
    <>
      // 코드를 넣어주세요
    </>
  )
}

export default App`}
      />
      <p>개발자도구를 통해 세 개의 요소가 있는걸 확인 할 수 있다. </p>
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'

function App() {

  const books = [
    { id: 1, title: 'React Basics',
      published: true, publisher: 'Manning' },
    { id: 2, title: 'Advanced Hooks',
      published: false, publisher: 'OReilly' },
    { id: 3, title: 'JSX in Depth',
      published: true, publisher: 'Packt' }
  ];
  const publisheds = books.filter(book => book.published)

  return (
    <>
      // 코드를 넣어주세요
    </>
  )
}

export default App`}
      />
    </div>
  ),
};

export default Lesson6;
