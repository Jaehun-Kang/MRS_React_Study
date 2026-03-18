import '../../styles/lesson.css';
import CodeBlock from '../CodeBlock';
import Foldable from "../Foldable";

const Lesson1 = {
  name: '1. 프로젝트 생성하기',
  idx: 1,
  content: (
    <div className="lesson-content">
      <h2>프로젝트 생성하기</h2>
      {/* <p>내용</p> */}
      <h3>프로젝트 루트 폴더 생성</h3>
      <p>1. 프로젝트를 넣을 폴더를 생성후 해당 폴더를 VSCode로 연다.</p>
      <p>2. 터미널을 열고 다음과 같이 입력한다.</p>
      <CodeBlock
        filename="Terminal"
        language="bash"
        code={`npm create vite@latest`}
      />
      <p>3. 프로젝트명 설정, 라이브러리 선택(React), 언어 선택(JavaScript)을 한다.</p>
      <p>특정 폴더 자체를 React 프로젝트로 만들고 싶다면 위쪽 코드 대신 아래처럼 쓰면 된다.</p>
      <CodeBlock
        filename="Terminal"
        language="bash"
        code={`npm create vite@latest . -- --template react`}
      />

      <h3>React 라이브러리 설치</h3>
      <p>1. 생성된 폴더를 다시 VSCode로 연다.</p>
      <p>2. 터미널에 다음과 같이 입력하여 라이브러리를 설치한다.</p>
      <CodeBlock
        filename="Terminal"
        language="bash"
        code={`npm i`}
      />
    </div>
  ),
};

export default Lesson1;
