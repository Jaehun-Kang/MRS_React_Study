import "../../styles/lesson.css";
import CodeBlock from "../CodeBlock";
import Foldable from "../Foldable";

const Lesson11 = {
  name: "11. State 더 깊이 알기",
  idx: 11,
  content: (
    <div className="lesson-content">
      <h2>State 더 깊이 알기</h2>
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

.user-profile,
.temp-input,
.unit-selector {
  margin: 8px 0;
  padding: 12px 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
}

.user-profile h3 {
  margin: 0;
}

input[type=text], select {
  display: block;
  margin: 8px 0;
  padding: 4px;
  font-size: 0.92em;
}`}
      />

      <CodeBlock
        filename="Profile.jsx"
        language="jsx"
        code={`import { useState } from 'react'

function Profile({ name }) {
  const [status, setStatus] = useState('Available')

  console.log('Profile Rendered')

  return (
    <div className="user-profile">
      // 코드 필요
    </div>
  );
}

export default Profile;`}
      />
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'
import { useState } from 'react'
import Profile from './Profile'

function App() {
  const users = ['Alice', 'Bob', 'Clark']
  // 코드 필요

  console.log('App Rendered')

  return (
    <>
      <h2>User Profile</h2>
      // 코드 필요
    </>
  )
}

export default App;`}
      />
      <p>
        App.jsx에서 status가 있는걸 볼 수 있고 이를 보면 true, false 값으로
        토글링되고 그 값에 따라 가운데에 있는 문구가 바뀌도록 되어 있는 걸 확인
        할 수 있다.
      </p>
      <p>
        Profile.jsx에서 status state를 보면 버튼에 따라 변경 됨을 확인하고 자식
        컴포넌트인 프로필에서 선언되고 사용되는 state임을 알 수 있다.
      </p>
      <p>
        이를 통해 부모컴포넌트의 state가 props로 자식 컴포넌트에 전달되어
        사용되어 사용할 수 있는 점을 알 수 있다.
      </p>
      <h3>main.jsx를 열어 수정 후 콘솔창 클리어하기</h3>
      <p>
        console 확인 후에 어던 컴포넌트의 state가 변경 될 때 해당 컴포넌트가
        리렌더링 된다는 것 대신 부모의 컴포넌트는 해당 state와 관련이 없을 경우
        이렌더링 되지 않는 것을 알 수 있다.
      </p>
      <h3>
        부모에게서 자식에게로 props를 사용하여 전달된 state를 변경하는 버튼
        확인하기
      </h3>
      <p>
        렌더링에 사용되는지 여부와 상관없이 컴포넌트의 state가 변경되면 해당
        컴포넌트가 리렌더링 된다는 점 그리고 자식 컴포넌트의 경우 부모로
        전달받은 props가 변경 될 대도 리렌더링 된다는 점을 알 수 있다.
      </p>
      <h3>부모 컴포넌트에서만 사용되는 state 확인하기</h3>
      <p>
        부모 컴포넌트가 리렌더링 되면 자식 컴포넌트 또한 리렌더링 된다. 즉,
        컴포넌트 stste가 변경 될 때, props가 변경될 때 그리고 부모가 리렌더링 될
        때 리렌더링 된다는 점이 중요하다.{" "}
      </p>
      <h3>state 끌어올리기-온도를 섭씨 또는 화씨로 변환하는 어플리케이션</h3>
      <CodeBlock
        filename="TempInput.jsx"
        language="jsx"
        code={`import React from 'react'

const TempInput = (
  { value, unit, onChange }
) => {
  return (
    <div className='temp-input'>
      // 코드 필요
  )
}

export default TempInput`}
      />
      <CodeBlock
        filename="UnitSelector.jsx"
        language="jsx"
        code={`import React from 'react'

const UnitSelector = ({ unit, onUnitChange }) => {
  return (
    <div className='unit-selector'>
      // 코드 필요
    </div>
  )
}

export default UnitSelector`}
      />
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'
import { useState } from 'react'
import TempInput from './TempInput'
import UnitSelector from './UnitSelector'

const App = () => {
  const [temperature, setTemperature] = useState("")
  const [unit, setUnit] = useState("Celsius")

  const convertedTemp = 
  // 코드 필요

  return (
    <div>
      <h2>Temperature Converter</h2>
      // 코드 필요
    </div>
  )
}

export default App`}
      />
      <p></p>
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

export default Lesson11;
