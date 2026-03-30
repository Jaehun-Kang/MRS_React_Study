import "../../styles/lesson.css";
import CodeBlock from "../CodeBlock";
import Foldable from "../Foldable";

const Lesson5 = {
  name: "5. JSX 문법 기초",
  idx: 5,
  content: (
    <div className="lesson-content">
      <h2>JSX 문법 기초</h2>
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

const element1 = <h2>Hello, world!</h2>;
const element2 = (
  <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
  </ul>
)

console.log(element1)
console.log(element2)

 return (
    <>
      {/* JSX Practices */}
      <h1>JSX</h1>
    </>
  )
}

export default App`}
      />
      <p>
        중괄호 표현식은 변수나 상수로 선언된것을 나타내줌, 혹은 따옴표("")를
        사용해서 표현 가능함
      </p>
      <p>예제</p>
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'

function BasicExpressions() {
  const name = "John";
  const age = 25;
  const isAdmin = true;
  
  return (
    <div>
// 이곳에 코드 필요
    </div>
  );
}

function App() {
 return <BasicExpressions />
}

export default App`}
      />
      <p>
        불리언은 값을 그대로 넣어도 오류는 안 나지만 렌더링 되지 않기에
        중괄호에서 렌더링 되는건 문자열과 숫자 밖에 없다.
      </p>
      <p>예제-객체와 배열</p>
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'

function ObjectArrayExpressions() {
  const user = {
    name: "Jane",
    email: "jane@example.com"
  };
  const colors = ["red", "blue", "green"];
  const numbers = [1, 2, 3, 4, 5];
  
  return (
    <div>
// 이곳에 코드 필요
    </div>
  );
}

function App() {
 return <ObjectArrayExpressions />
}

export default App`}
      />
      <p>배열의 length 속성으로 접근하면 해당 배열의 크기가 숫자로 변환된다</p>
      <p>예제-객체와 배열</p>
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'

function FunctionExpressions() {
  const getGreeting = (name) => '이곳에도 코드 필요';
  
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };
  
  const calculateTotal = (items) => {
    return items.reduce((sum, item) => sum + item.price, 0);
  };

  const items = [
    { id: 1, price: 10 },
    { id: 2, price: 20 }
  ];
  
  return (
    <div>
    // 이곳에 코드 필요
    </div>
  );
}


function App() {
 return <FunctionExpressions />
}

export default App`}
      />
      <p>
        문자열이나 숫자를 반환하는 형태의 자바스크립트 표현식들은 다
        사용가능하다.
      </p>
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'

const element1 = <h2>Hello, world!</h2>;
const element2 = (
  <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
  </ul>
)

function ElementExpressions () {
  return (
    <section>
// 이곳에 코드 필요
    </section>
  )
}

function App() {
 return <ElementExpressions />
}

export default App`}
      />
      <p>JSX 요소들 역시 이와 같이 중괄호 표현식에 사용가능하다.</p>
    </div>
  ),
};

export default Lesson5;
