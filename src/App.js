/* eslint-disable */ /* 변수 만들어놓고 안 썼어요를 잡아주지 않는 코드 */


import { useState } from 'react'; /* 리액트에 있는 내장함수를 하나 쓰겠다~ */
import logo from './logo.svg';
import './App.css';

function App() { /* 이 app function도 하나의 컴포넌트이기 때문에 다른 컴포넌트 창조시 이거 밑에 나란히 만들면 된다! */
  
    let [글제목, 글제목변경함수] = useState(["푸딩 종류", "설향 딸기 라떼 만들기", "촉촉한 딸기 쇼트 케이키"]);
    let [따봉, 따봉변경함수] = useState([0, 0, 0]);
    let [글변경, 글변경함수] = useState(["커스터드 케이키", "딸기 쇼트 푸딩", "설향 바나나"]);
    let [modal, setModal] = useState(false); /* 여기에는 현재 상태를 적어주는 게 좋다고 했지만, false로 하신 걸 보니 주로 처음 웹페이지에 들어갔을 때 보였으면 좋겠는 상태를 적는 게 좋은 것 같다! 닫힘 열림 외에도 0이나 1, true나 false와 같이 상태를 표현할 수 있는 말이면 다 되는 것 같다! */
  let [color, setcolor] = useState(["orange", "pink", "skygreen"])
  let [title, setTitle] = useState(0);
  let [inputValue, setInputValue] = useState(""); /* 인풋값을 저장할 거기 때문에 텅 빈 문자열로 지정 */
  

  function 제목변경() {
    let newItem = [...글제목]; /* 특히나 array나 object일 경우 복사를 해서 state변경. (참고 - state는 직접 변경이 안 됨) */
    newItem[0] = "커스터드 케이키";
    글제목변경함수( newItem );
  }
  
  function likeItCount() {
    let i = [0, 1, 2];
    let like = [...따봉];
    like[i] = like[i] + 1;
    따봉변경함수( like )
  }


  function createItem() { /* unshift로 구현) array item 추가하는 방법 */
    let newArray = [...글제목];
    let newArrayPush = newArray.unshift(inputValue);
    let arrayAddItem = newArray.concat(newArrayPush)
    글제목변경함수(arrayAddItem)
  }

  const deleteItem = (i) => {
    let newArray = [...글제목];
    newArray.splice(i, 1);
    글제목변경함수(newArray);
  }
  

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>

      {
       글제목.map(function (a, i){
         return (<div className='list' key={i}>
           <h3 onClick={() => { setModal(!modal); setTitle(i) }}> { a }
             <span onClick={(e) => {
               e.stopPropagation();
               let like = [...따봉];
                like[i] = like[i] + 1;
               따봉변경함수(like)
             }}
             className="like">🧡</span>
            { 따봉[i] }
             <button onClick={(e) => {
               e.stopPropagation();
               deleteItem(i);
             }}>❌</button>
          </h3>
           <p>2023-02-15</p>
        <hr/>
      </div>)
        })
      }

            <button onClick={ 제목변경 }>글 변경</button>

      {
        modal == true ? <Modal title={ title } 글제목={글제목} color={color}
          제목변경={제목변경} /> : null
      }


      <input type="text" onChange={(e) => {
        setInputValue(e.target.value);
        console.log(inputValue);
      }} />

      <button onClick={ createItem }>글 추가</button>

    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal' style={{ background: props.color[1] }}>
      <h2>{ props.글제목[props.title] }</h2>
        <p>날짜</p>
      <p>상세내용</p>
      <button onClick={ props.제목변경 }>글 제목 변경</button>
    </div>
  )
}


export default App;
