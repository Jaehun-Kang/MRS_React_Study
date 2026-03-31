import "../../styles/lesson.css";
import CodeBlock from "../CodeBlock";
import Foldable from "../Foldable";

const Lesson7 = {
  name: "7. JSX 속성과 스타일링",
  idx: 7,
  content: (
    <div className="lesson-content">
      <h2>JSX 속성과 스타일링</h2>

      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'

function App() {

  const disableInput = true

  return (
    <>
      <label
        htmlFor="username"        // for
      >
        Username:
      </label>
      <input
        // 코드 필요

        className="input-field"   // class
        autoComplete="off"        // autocomplete

        maxLength={20}            // maxlength
        spellCheck={true}         // spellcheck
        readOnly={false}          // readonly
        tabIndex={0}              // tabindex

        // 코드 필요
      />
    </>
  )
}

export default App`}
      />
      <p>
        1. className은 실무에서 자주 사용된다. for와 class의 이름이 자주 바뀌는
        이유는 자바 스크립트에 예약어이기 때문이다. 예약어는 특정 용도로 쓰임이
        정해져 변수명이나 속성명 등으로 쓰일 수 없는 키워드들이다.{" "}
      </p>
      <p>
        2. 그 외의 속성들은 자바 스크립트 객체로 변환된다. 이 언어들은 네이빙
        컨벤션을 따른다.
      </p>
      <p> 3. 이 속성들 또한 중괄호가 사용된다.</p>

      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'
import reactLogo from '코드 필요'

const reactLogoAlt = 'React Logo'
console.log(reactLogo)

function App(){
  return(
    <>
      {/* 코드 필요 */}
    </>
  )
}

export default App`}
      />
      <p>이처럼 이미지를 사용할 때는 임포트 과정을 거쳐야 한다.</p>
      <h3>JSX 요소들의 CSS 스타일을 적용</h3>
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'

function App() {

  return (
    <>
      {/* 코드 필요 */}
    </>
  )
}

export default App`}
      />
      <p>
        중괄호 표현식 안에 작성할 수 있다는 것은 외부의 변수나 상수에 저장하고
        쓸 수도 있다는 의미이다.
      </p>
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'

function App() {
  
  const divStyle = {
    backgroundColor: 'lightblue',
    margin: '12px',
    padding: '20px',
    borderRadius: '8px'
  }

  return (
    <>
      <div style={divStyle}>
        DIV 1
      </div>

      <div
        // 코드 필요
      >
        DIV 2
      </div>
    </>
  )
}

export default App`}
      />
      <p>
        아래 코드가 필요한 부분은 객체 스프레딩이다. 이는 기존 객체의 속성들을
        활용하여 새로운 객체를 만드는데 사용된다.
      </p>
      <p>
        두 번째 DIV는 이처럼 새 속성을 만든 다음 위에 작성된 객체의 속성들을
        스프레딩으로 가져온다. 그리고 나서 배경색의 값은 이처럼 새로운 값으로
        덮어씌우고 글자 색과 글자 두께의 스타일들을 추가하여 오른쪽과 같은
        결과를 만드는 것이다.
      </p>
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'

function App() {

  const styleA = {
    color: 'darkred',
    fontWeight: 'bold',
  }
  
  const styleB = {
    color: 'navy',
    textDecoration: 'underline',
  }

  // false로도 값 변경 해보기
  const isPrimary = true

  return (
    <>
      <div 
        // 코드 필요
      >
        This text has dynamic styling.
      </div>

      <span
        style={{
          // 코드 필요
        }}
      >
        So does this text.
      </span>
    </>
  )
}

export default App`}
      />
      <h3>CSS 모듈 </h3>
      <p>1.css</p>
      <CodeBlock
        filename="ButtonA.css"
        language="css"
        code={`.button {
  {/* 코드 필요 */}
}`}
      />
      <CodeBlock
        filename="ButtonA.css"
        language="css"
        code={`.button {
  {/* 코드 필요 */}
}`}
      />
      <p>2.jsx</p>
      <CodeBlock
        filename="ButtonA.jsx"
        language="jsx"
        code={`import React from 'react';
import './ButtonA.css';

function ButtonA() {
  return (
    <button className="button">
      Button A
    </button>
  )
}

export default ButtonA`}
      />
      <CodeBlock
        filename="ButtonB.jsx"
        language="jsx"
        code={`import React from 'react';
import './ButtonB.css';

function ButtonB() {
  return (
    <button className="button">
      Button B
    </button>
  )
}

export default ButtonB`}
      />
      <p>
        이 두 버튼 모두 버튼 이라는 문자열의 클래스명을 사용하여 모든 스타일
        명을 따라 모두 적용된다. 그래서 css모듈 기능을 사용해면 스타일 충돌을
        없앨 수 있다.
      </p>
      <p>1.css</p>
      <CodeBlock
        filename="ButtonA.module.css"
        language="css"
        code={`.button {
  background-color: skyblue;
  padding: 10px;
  font-size: 16px;
}
.slider { padding: 0; }
#topmenu { margin: 0; }`}
      />
      <CodeBlock
        filename="ButtonB.module.css"
        language="css"
        code={`.button {
  border: 2px solid red;
  margin: 15px;
  text-transform: uppercase;
}`}
      />
      <p>2.jsx</p>
      <CodeBlock
        filename="ButtonA.jsx"
        language="jsx"
        code={`import React from 'react';
import styles from './ButtonA.module.css';

function ButtonA() {
  console.log(styles)

  return (
    <button className={styles.button}>
      Button A
    </button>
  )
}

export default ButtonA`}
      />
      <CodeBlock
        filename="ButtonB.jsx"
        language="jsx"
        code={`import React from 'react';
import styles from './ButtonB.module.css';

function ButtonB() {
  console.log(styles)

  return (
    <button className={styles.button}>
      Button B
    </button>
  )
}

export default ButtonB`}
      />
    </div>
  ),
};

export default Lesson7;
