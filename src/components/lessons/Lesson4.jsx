import "../../styles/lesson.css";
import CodeBlock from "../CodeBlock";
import Foldable from "../Foldable";

const Lesson4 = {
  name: "4. 컴포넌트 기초",
  idx: 4,
  content: (
    <div className="lesson-content">
      <h2>컴포넌트 기초</h2>
      <div>
        <h3>컴포넌트란?</h3>
        <p>웹페이지의 구성요소들을 재사용 가능한 단위로 나눈 것</p>
        <CodeBlock
          filename="Component.jsx"
          language="jsx"
          code={`function Component() {

  return (
    <>
    </>
  )

export default Component;`}
        />
        <p>
          위처럼 Camal Case 네이밍과 .jsx 확장자가 있어야 컴포넌트로 인식한다.
        </p>
        <p>
          하나의 컴포넌트는 하나의 요소만 반환 가능하기 때문에 2개 이상의 요소는
          빈 프래그먼트로 감싸야 한다.
        </p>
        <CodeBlock
          filename="App.jsx"
          language="jsx"
          code={`function App() {

  return (
    <>
      <h1>Hello</h1>
      <h2>World</h2>
    </>
  )

export default App;`}
        />
        <p>
          특정 컴포넌트 안에서 활용될 작은 컴포넌트는 아래와 같이 한 파일에
          작성해도 된다.
        </p>
        <CodeBlock
          filename="App.jsx"
          language="jsx"
          code={`function Hello() {
  return <h1>Hello</h1>;
}

function App() {

  return (
    <>
      <Hello />
      <h2>World</h2>
    </>
  )

export default App;`}
        />
        <p>
          하지만 코드가 길어질 경우나 여러 컴포넌트에 사용할 경우에는 파일을
          분리해주는 것이 좋다.
        </p>
        <p>export와 import를 적절히 해주어야 하는 것을 기억하자.</p>
        <CodeBlock
          filename="Child.jsx"
          language="jsx"
          code={`function Child() {

  return (
    <p>This is a child component.</p>}
  )
}

export default Child;`}
        />
        <CodeBlock
          filename="App.jsx"
          language="jsx"
          code={`import Child from './Child';

function Hello() {
  return <h1>Hello</h1>;
}

function App() {

  return (
    <>
      <Hello />
      <h2>World</h2>
      <Child />
    </>
  )

export default App;`}
        />
      </div>
      <div>
        <h3>컴포넌트 작성 방법</h3>
        <p>1. 클래스 컴포넌트</p>
        <p>리액트 초기에 사용하던 방법으로 요즘은 잘 사용하지 않는 방식</p>
        <CodeBlock
          filename="Components.jsx"
          language="jsx"
          code={`import React, { Component } from 'react';

class ClassComp extends Component {
  render() {
    return <p>Class Comp</p>;
  }
}

export default ClassComp;
`}
        />
        <p>2. 일반 함수형 컴포넌트</p>
        <CodeBlock
          filename="Components.jsx"
          language="jsx"
          code={`import React from 'react';

function FunctionComp() {
  return <p>Function Comp</p>;
}

export default FunctionComp;
`}
        />
        <p>3. 화살표 함수 컴포넌트</p>
        <p>간결하고 this 바인딩 문제로부터 자유로워 많이 쓰이는 방식</p>
        <CodeBlock
          filename="Components.jsx"
          language="jsx"
          code={`import React from 'react';

const ArrowFunctionComp = () => {
  return <p>Arrow Function Comp</p>;
};

export default ArrowFunctionComp;
`}
        />
        <p>
          화살표 함수는 한 줄짜리 표현식일 경우 return 구문 없이도 사용
          가능하다.
        </p>
        <CodeBlock
          filename="Components.jsx"
          language="jsx"
          code={`import React from 'react';

const ArrowFunctionComp = () => <p>Arrow Function Comp</p>;

export default ArrowFunctionComp;
`}
        />
      </div>
    </div>
  ),
};

export default Lesson4;
