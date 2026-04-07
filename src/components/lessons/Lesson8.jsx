import '../../styles/lesson.css';
import CodeBlock from '../CodeBlock';
import Foldable from '../Foldable';

const Lesson8 = {
  name: '8. 컴포넌트의 Props',
  idx: 8,
  content: (
    <div className="lesson-content">
      <h2>컴포넌트의 Props</h2>
      {/* <h3>소제목</h3>
      <p>내용</p> */}
      {/* 레이아웃을 컴포넌트로 만들고, 매개변수처럼 데이터를 주입해서 요소들이 렌더링되도록 만들면 웹페이지를 쉽고 효율적이게 만들 수 있다. */}
      <h3>Props</h3>
      <p>
        리액트에서는 'props'라는 객체를 통해, 컴포넌트 간에 데이터를 전달할 수
        있다. 자식 컴포넌트는 키로 객체에 접근하여 데이터를 가져와 사용한다.
      </p>
      <Foldable title="시작 코드">
        <CodeBlock
          filename="Card.module.css"
          language="jsx"
          code={`.card {
  width: 224px;
  margin: 12px auto;
  padding: 24px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card h2 {
  margin: 0 0 8px;
  font-size: 1.33rem;
  color: #333;
}

.card p {
  margin: 2px 0;
}

.card p:last-child {
  font-size: 0.92rem;
  color: #888;
}`}
        />

        <p>
          'title', 'content', 'author'와 같은 데이터들이 HTML의 속성처럼
          작성되어 있다.
        </p>
        <CodeBlock
          filename="InfoCard.jsx"
          language="jsx"
          code={`import styles from './Card.module.css'

const InfoCard = (props) => (
  <div className={styles.card}>
    <h2>{props.title}</h2>
    <p>{props.content}</p>
    <p>Author: {props.author}</p>
  </div>
)

export default InfoCard`}
        />

        <p>함수에서 'props'라는 매개변수를 확인할 수 있다.</p>
        <CodeBlock
          filename="App.jsx"
          language="jsx"
          code={`import './App.css'

import InfoCard from './InfoCard'

function App() {

  return (
    <>
      <InfoCard 
        title="Props in React"
        content="Props pass data from one component to another."
        author="Alice"
      />
      <InfoCard 
        title="React Composition"
        content="Composition makes your components more reusable"
        author="Charlie"
      />
    </>
  )
}

export default App`}
        />
      </Foldable>
      <h3>Props 객체 디스트럭쳐링</h3>
      <p>
        자바스크립트를 통해 'props' 객체를 디스트럭쳐링(비구조화)하여 코드를 더
        간결하게 작성할 수 있다.
        <span style={{ color: '#bbb' }}> 복붙 X 그냥 수정해보기</span> <br />
        디스트럭쳐링 된 객체 매개변수엔는 아래와 같이 기본값들이 지정될 수
        있는데, 만약 주어진 props에 해당 항목이 없다면 작성된 기본값을 대신
        사용한다.
      </p>
      {/* App에서 저자 하나 지워보기 */}
      <CodeBlock
        filename="InfoCard.jsx"
        language="jsx"
        code={`import styles from './Card.module.css'

const InfoCard = ({ 
  title="(No Title)",
  content,
  author="Anonymous" 
}) => (
  <div className={styles.card}>
    <h2>{title}</h2>
    <p>{content}</p>
    <p>Author: {author}</p>
  </div>
)

export default InfoCard`}
      />
      <h3>스프레딩 하기</h3>
      <p>
        ...은 스프레드 문법으로, 이를 사용해 배열이나 문자열을 개별 요소로
        분해하여 결합할 수 있다.
        <br />
        아래에서는 객체를 풀어서 props로 전달하도록 한다.
      </p>
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'

import InfoCard from './InfoCard'

const cardData1 = {
  title: "Props in React",
  content: "Props pass data from one component to another.",
  author: "Alice"
};
const cardData2 = {
  title: "React Composition",
  content: "Composition makes your components more reusable"
};

function App() {

  return (
    <>
      <InfoCard {...cardData1} />
      <InfoCard {...cardData2} />
    </>
  )
}

export default App
`}
      />
      <h3>배열에 담아보기</h3>
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'

import InfoCard from './InfoCard'

const cards = [
  {
    idx: 1,
    title: "Props in React",
    content: "Props pass data from one component to another.",
    author: "Alice"
  }, {
    idx: 2,
    title: "React Composition",
    content: "Composition makes your components more reusable"
  }
]

function App() {

  return (
    <>
      {cards.map(cardData => (
        <InfoCard key={cardData.idx} {...cardData} />
      ))}
    </>
  )
}

export default App`}
      />
      <p></p>
      <CodeBlock
        filename="ProductCard.jsx"
        language="jsx"
        code={`import styles from './Card.module.css'

const ProductCard = ({ 
  name, price, formatPrice 
}) => {
  const displayedPrice
  = formatPrice(price)

  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <p>Price: {displayedPrice}</p>
    </div>
  );
}

export default ProductCard`}
      />
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'

import ProductCard from './ProductCard'

const App = () => {
  const product = { 
    name: "Laptop", 
    price: 123.4567 
  };

  return (
    <ProductCard 
    {...product} 
    formatPrice={(p) => {직접 쓰기} }
    />
  );
}

export default App`}
      />

      <CodeBlock
        filename="CardLayout.jsx"
        language="jsx"
        code={`import styles from './Card.module.css'

const CardLayout = ({ 
  title, children 
}) => (
  <div className={styles.card}>
    <h2>{title}</h2>
    <div className="content">
      {children}
    </div>
  </div>
)

export default CardLayout`}
      />

      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'

import CardLayout from './CardLayout';

const App = () => (
  <div>
    <CardLayout title="About">
      <p>Props of Components</p>
    </CardLayout>

    <CardLayout title="Details">
      <ul>
        <li>Feature A</li>
        <li>Feature B</li>
        <li>Feature C</li>
      </ul>
    </CardLayout>

    <CardLayout title="Contact">
      <p>Email: example@example.com</p>
      <p>Phone: 123-456-7890</p>
    </CardLayout>
  </div>
);

export default App`}
      />

      <CodeBlock
        filename="withConditionalCard.jsx"
        language="jsx"
        code={`import styles from './Card.module.css'

function withConditionalCard(WrappedComp) {
  return function ConditionalCard({ 
    disabled, ...props 
  }) {
    const cardStyle = {
      opacity: disabled ? 0.5 : 1,
    }

    return (
      <div
        className={styles.card}
        style={cardStyle}
      >
        <WrappedComp {...props} />
      </div>
    )
  }
}

export default withConditionalCard`}
      />
      <CodeBlock
        filename="SimpleCard.jsx"
        language="jsx"
        code={`function SimpleCard({ title, content }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}

export default SimpleCard`}
      />
      <CodeBlock
        filename="App.jsx"
        language="jsx"
        code={`import './App.css'

import withConditionalCard from './withConditionalCard'
import SimpleCard from './SimpleCard'

const ConditionalSimpleCard = withConditionalCard(SimpleCard)

const App = () => (
  <>
    <ConditionalSimpleCard 
      title="Active Card" 
      content="This card is active." 
      disabled={false} 
    />
    
    <ConditionalSimpleCard 
      title="Disabled Card" 
      content="This card is disabled." 
      disabled={true} 
    />
  </>
)

export default App`}
      />
    </div>
  ),
};

export default Lesson8;
